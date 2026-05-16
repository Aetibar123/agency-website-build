"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Sparkles, Zap, TrendingUp } from "lucide-react"

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      baseX: number
      baseY: number
    }> = []

    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Mouse interaction - particles move away from cursor
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.x -= (dx / distance) * force * 2
          particle.y -= (dy / distance) * force * 2
        } else {
          // Return to base position slowly
          particle.x += (particle.baseX - particle.x) * 0.02
          particle.y += (particle.baseY - particle.y) * 0.02
        }

        particle.baseX += particle.vx
        particle.baseY += particle.vy

        if (particle.baseX < 0 || particle.baseX > canvas.width) particle.vx *= -1
        if (particle.baseY < 0 || particle.baseY > canvas.height) particle.vy *= -1

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        )
        gradient.addColorStop(0, `rgba(34, 211, 238, ${particle.opacity})`)
        gradient.addColorStop(1, `rgba(34, 211, 238, 0)`)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const connDx = particle.x - other.x
          const connDy = particle.y - other.y
          const connDistance = Math.sqrt(connDx * connDx + connDy * connDy)

          if (connDistance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - connDistance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}

// Animated text reveal component
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// Magnetic button component
function MagneticButton({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  )
}

const statsData = [
  { value: "20+", label: "Projects Delivered", icon: Sparkles },
  { value: "98%", label: "Client Satisfaction", icon: TrendingUp },
  { value: "$12000+", label: "Revenue Generated", icon: Zap },
]

// Counter animation component
function AnimatedCounter({ value, suffix = "", delay = 0 }: { value: string; suffix?: string; delay?: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""))

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0
      const duration = 1500
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setDisplayValue(Math.floor(numericValue * easeOut))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [numericValue, delay])

  const prefix = value.startsWith("$") ? "$" : ""

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const springY = useSpring(y, { damping: 20, stiffness: 100 })
  const springOpacity = useSpring(opacity, { damping: 20, stiffness: 100 })
  const springScale = useSpring(scale, { damping: 20, stiffness: 100 })

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg" />
      <ParticleField />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-indigo/10 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/5 blur-[100px]"
      />

      <motion.div
        style={{ y: springY, scale: springScale }}
        className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-40"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-cyan" />
              </motion.div>
              <span className="text-sm font-medium text-cyan">
                Trusted by 100+ Global Brands
              </span>
            </motion.div>

            {/* Headline with staggered reveal */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <AnimatedText text="We Build" className="text-foreground" delay={0.1} />{" "}
              <AnimatedText text="Scalable" className="gradient-text" delay={0.2} />
              <br />
              <AnimatedText text="Digital Products" className="text-foreground" delay={0.3} />
              <br />
              <AnimatedText text="& Growth Systems" className="gradient-text" delay={0.4} />
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="mb-8 max-w-xl text-lg text-muted-foreground lg:text-xl"
            >
              Custom web apps, mobile apps, AI solutions, branding, SEO, and
              performance marketing — all designed to scale your business.
            </motion.p>

            {/* CTAs with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <MagneticButton
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyan to-indigo px-8 py-4 text-lg font-semibold text-background transition-all hover:shadow-lg hover:shadow-cyan/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo to-cyan"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
              </MagneticButton>
              <MagneticButton
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-indigo/30 bg-transparent px-8 py-4 text-lg font-semibold text-foreground backdrop-blur-sm transition-all hover:border-indigo hover:bg-indigo/10"
              >
                View Projects
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="relative hidden lg:block perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main Dashboard Card */}
              <div className="relative z-10 glass rounded-2xl p-6 glow-indigo">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-3 w-3 rounded-full bg-red-500"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                      className="h-3 w-3 rounded-full bg-yellow-500"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                      className="h-3 w-3 rounded-full bg-emerald"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">Analytics Dashboard</div>
                </div>

                {/* Mock Chart */}
                <div className="mb-6 h-40 rounded-xl bg-secondary/50 p-4" >
                  <div className="flex h-full items-end justify-between gap-2" >
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${height}%`, opacity: 1 }}

                        transition={{
                          duration: 0.6,
                          delay: 0.8 + i * 0.05,
                          ease: [0.33, 1, 0.68, 1]
                        }}
                        whileHover={{
                          scaleY: 1.1,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        className="w-full rounded-t bg-gradient-to-t from-cyan to-indigo opacity-80 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Revenue", value: "$12.4k", change: "+20%" },
                    { label: "Users", value: "27.2K", change: "+18%" },

                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400 } }}
                      className="rounded-lg bg-secondary/50 p-3 text-center cursor-pointer"
                    >
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                      <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-emerald">{stat.change}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Cards with 3D effect */}
              <motion.div
                initial={{ opacity: 0, x: -30, z: 50 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0], z: 50 }}
                transition={{
                  opacity: { duration: 0.5, delay: 1 },
                  x: { duration: 0.5, delay: 1 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05, rotateY: 10, z: 80 }}
                className="glass absolute -left-16 top-20 z-20 rounded-xl p-4 glow-cyan cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/20">
                    <TrendingUp className="h-5 w-5 text-cyan" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Conversions</div>
                    <div className="text-lg font-bold text-cyan">+127%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, z: 50 }}
                animate={{ opacity: 1, x: 0, y: [0, 8, 0], z: 50 }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.2 },
                  x: { duration: 0.5, delay: 1.2 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                whileHover={{ scale: 1.05, rotateY: -10, z: 80 }}
                className="glass absolute -right-10 bottom-10 z-20 rounded-xl p-4 glow-emerald cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/20">
                    <Zap className="h-5 w-5 text-emerald" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Performance</div>
                    <div className="text-lg font-bold text-emerald">99.9%</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section with staggered reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 grid gap-6 sm:grid-cols-3"
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1 + i * 0.15,
                ease: [0.33, 1, 0.68, 1]
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="glass group rounded-2xl p-6 text-center transition-all cursor-pointer hover:glow-cyan"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-indigo/20"
              >
                <stat.icon className="h-6 w-6 text-cyan" />
              </motion.div>
              <div className="mb-1 text-3xl font-bold text-foreground">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                  delay={1.2 + i * 0.15}
                />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="#services"
            className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-cyan"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-sm"
            >
              Explore Our Services
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
