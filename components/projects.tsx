"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"

const categories = ["All", "SaaS", "E-commerce", "AI Tools", "Corporate", "Branding"]

const projects = [
  // {
  //   id: 1,
  //   title: "FinFlow Dashboard",
  //   category: "SaaS",
  //   description: "AI-powered financial analytics platform for enterprise clients",
  //   image: "/projects/finflow.jpg",
  //   tags: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL"],
  //   metrics: { revenue: "+240%", users: "50K+", rating: "4.9" },
  //   color: "from-cyan to-blue-500",
  // },
  {
    id: 2,
    title: "Luxe Commerce",
    category: "E-commerce",
    description: "Premium fashion e-commerce with AR try-on features",
    image: "/projects/luxe.jpg",
    tags: ["React", "Node.js", "Stripe", "AWS"],
    metrics: { revenue: "+40%", users: "5K+", rating: "4.8" },
    color: "from-indigo to-purple-500",
  },
  {
    id: 3,
    title: "NeuralChat",
    category: "AI Tools",
    description: "Enterprise conversational AI platform with custom training",
    image: "/projects/neural.jpg",
    tags: ["Python", "TensorFlow", "React", "Docker"],
    metrics: { revenue: "+60%", users: "7K+", rating: "4.9" },
    color: "from-emerald to-teal-500",
  },
  {
    id: 4,
    title: "Vertex Capital",
    category: "Corporate",
    description: "Investment firm website with real-time portfolio tracking",
    image: "/projects/vertex.jpg",
    tags: ["Next.js", "Framer Motion", "Sanity"],
    metrics: { revenue: "+120%", users: "17K+", rating: "5.0" },
    color: "from-orange-500 to-amber-500",
  },
  // {
  //   id: 5,
  //   title: "Aura Brand",
  //   category: "Branding",
  //   description: "Complete brand identity for a tech startup",
  //   image: "/projects/aura.jpg",
  //   tags: ["Figma", "Illustration", "Motion"],
  //   metrics: { awareness: "+400%", engagement: "85%", satisfaction: "98%" },
  //   color: "from-pink-500 to-rose-500",
  // },
  // {
  //   id: 6,
  //   title: "DataSync Pro",
  //   category: "SaaS",
  //   description: "Real-time data synchronization platform for enterprises",
  //   image: "/projects/datasync.jpg",
  //   tags: ["Go", "Kubernetes", "React", "GraphQL"],
  //   metrics: { revenue: "+280%", users: "75K+", rating: "4.7" },
  //   color: "from-violet-500 to-indigo",
  // },
]

// 3D Project Card with parallax effect
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])
  
  // Parallax for inner elements
  const imageX = useTransform(mouseXSpring, [-0.5, 0.5], ["-5%", "5%"])
  const imageY = useTransform(mouseYSpring, [-0.5, 0.5], ["-5%", "5%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / rect.width - 0.5
    const yPct = mouseY / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1],
        layout: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer"
    >
      {/* Card */}
      <div className="glass relative overflow-hidden rounded-2xl" style={{ transform: "translateZ(0)" }}>
        {/* Image Placeholder with parallax */}
        <motion.div
          style={{ x: imageX, y: imageY }}
          className={`relative h-56 bg-gradient-to-br ${project.color} opacity-80 overflow-hidden`}
        >
          {/* Animated background pattern */}
          <motion.div 
            animate={{ 
              backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%"
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" 
          />
          
          {/* Mock UI Elements with staggered reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="absolute inset-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="flex items-center gap-2 border-b border-white/10 p-3">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="h-2 w-2 rounded-full bg-white/40" 
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                className="h-2 w-2 rounded-full bg-white/40" 
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                className="h-2 w-2 rounded-full bg-white/40" 
              />
            </div>
            <div className="p-4">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="mb-3 h-3 rounded bg-white/20" 
              />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="mb-2 h-2 rounded bg-white/10" 
              />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "66%" }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="h-2 rounded bg-white/10" 
              />
            </div>
          </motion.div>

          {/* Hover Overlay with reveal animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          >
            <motion.button 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background"
            >
              View Project
              <ExternalLink className="h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* Shine effect */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ 
              x: isHovered ? "200%" : "-100%",
              opacity: isHovered ? 0.3 : 0
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
          />
        </motion.div>

        {/* Content */}
        <div className="p-6" style={{ transform: "translateZ(30px)" }}>
          <div className="mb-2 flex items-center justify-between">
            <motion.span 
              animate={{ color: isHovered ? "rgb(34, 211, 238)" : "rgb(34, 211, 238)" }}
              className="text-xs font-medium uppercase tracking-wider text-cyan"
            >
              {project.category}
            </motion.span>
            <motion.div
              animate={{ x: isHovered ? 3 : 0, y: isHovered ? -3 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-cyan" />
            </motion.div>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {project.description}
          </p>

          {/* Tags with staggered animation */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.2)" }}
                className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Metrics with counter animation */}
          <div className="flex gap-4 border-t border-border pt-4">
            {Object.entries(project.metrics).map(([key, value], i) => (
              <motion.div 
                key={key} 
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 10,
                    delay: 0.6 + index * 0.1 + i * 0.1 
                  }}
                  className="text-sm font-bold text-foreground"
                >
                  {value}
                </motion.div>
                <div className="text-xs capitalize text-muted-foreground">
                  {key}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo/5 blur-[120px]" 
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-indigo/30 bg-indigo/10 px-4 py-1.5 text-sm font-medium text-indigo"
          >
            Our Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Explore our latest work across industries. Each project represents
            our commitment to excellence and innovation.
          </motion.p>
        </motion.div>

        {/* Category Filter with magnetic buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {/* Animated background for active state */}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-indigo"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
