"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  Code2,
  Smartphone,
  Palette,
  Search,
  Share2,
  Fingerprint,
  Bot,
  BarChart3,
  ShoppingCart,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description:
      "Custom web applications built with modern frameworks. Scalable architecture, clean code, and pixel-perfect execution.",
    gradient: "from-cyan to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    gradient: "from-indigo to-purple-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centric design that converts. Research-driven interfaces that balance aesthetics with functionality.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that increase organic visibility and drive qualified traffic to your business.",
    gradient: "from-emerald to-teal-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Strategic social campaigns that build brand awareness, engage audiences, and generate measurable results.",
    gradient: "from-orange-500 to-amber-500",
  },

  {
    icon: Bot,
    title: "AI Automation Solutions",
    description:
      "Custom AI integrations and automation workflows that streamline operations and enhance productivity.",
    gradient: "from-cyan to-emerald",
  },

]

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])
  const brightness = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0.9, 1, 1.1])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        filter: useTransform(brightness, (v) => `brightness(${v})`),

      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-indigo/5 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header with staggered text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="mb-4 inline-block rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-sm font-medium text-cyan"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          >
            Services That <span className="gradient-text">Drive Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            End-to-end digital solutions designed to transform your business and
            accelerate growth in the modern marketplace.
          </motion.p>
        </motion.div>

        {/* Services Grid with 3D tilt cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1000px", }}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.33, 1, 0.68, 1]

              }}
            >
              <TiltCard className="group relative h-full">
                {/* Gradient Border */}
                <div
                  className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-50`}
                />

                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} p-[1px] opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                >
                  <div className="h-full w-full rounded-2xl bg-card" />
                </div>
                {/* Card Content */}
                <div className="relative z-10 h-full rounded-2xl bg-card p-6">
                  {/* Icon with spin on hover */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} p-[1px]`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-card">
                      <service.icon className="h-6 w-6 text-foreground" />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

              

                  {/* Shine effect on hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      background: [
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
                        "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.03) 150%, transparent 200%)",
                      ],
                    }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
