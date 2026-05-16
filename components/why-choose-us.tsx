"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Server,
  Search,
  Target,
  HeadphonesIcon,
  Code2,
  MessageSquare,
  LineChart,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid development cycles with agile methodology",
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description: "Built to grow with your business demands",
  },
  {
    icon: Search,
    title: "SEO-Focused Development",
    description: "Every project optimized for search engines",
  },
  {
    icon: Target,
    title: "Conversion-Focused Design",
    description: "UX designed to maximize conversions",
  },
  {
    icon: HeadphonesIcon,
    title: "Long-term Support",
    description: "Dedicated support and maintenance plans",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "Latest frameworks and best practices",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Regular updates and clear reporting",
  },
  {
    icon: LineChart,
    title: "Business-Oriented Strategy",
    description: "Solutions aligned with your goals",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <span className="mb-4 inline-block rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-sm font-medium text-emerald">
              Why Us
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Built Different.
              <br />
              <span className="gradient-text">Designed to Scale.</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We don&apos;t just build products — we engineer growth systems. Our
              approach combines technical excellence with business strategy to
              deliver results that matter.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-3xl font-bold text-indigo">10+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-3xl font-bold text-pink-500">4+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.2, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                whileHover={{ scale: 1.02 }}
                style={{ willChange: "transform, opacity" }}
                className="glass group rounded-xl p-4 transition-all duration-150 hover:border-cyan/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/20 to-indigo/20 transition-colors group-hover:from-cyan/30 group-hover:to-indigo/30">
                  <feature.icon className="h-5 w-5 text-cyan" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
