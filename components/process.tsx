"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Palette, Code2, Megaphone, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into understanding your business, goals, target audience, and competitive landscape.",
    color: "cyan",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Our team crafts a comprehensive roadmap with clear milestones, timelines, and success metrics.",
    color: "indigo",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design",
    description:
      "We create stunning, user-centric designs that align with your brand and convert visitors.",
    color: "pink-500",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description:
      "Our engineers build scalable, performant solutions using cutting-edge technologies.",
    color: "emerald",
  },
  {
    number: "05",
    icon: Megaphone,
    title: "Marketing",
    description:
      "We launch targeted campaigns to drive traffic, engagement, and conversions.",
    color: "orange-500",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We ensure a smooth launch and provide ongoing optimization for continuous growth.",
    color: "violet-500",
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-secondary/30 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan/5 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-sm font-medium text-cyan">
            Our Process
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            From Concept to <span className="gradient-text">Launch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A proven methodology that transforms ideas into successful digital
            products, every single time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan via-indigo to-emerald lg:block" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.25, delay: i * 0.03, ease: [0.33, 1, 0.68, 1] }}
                style={{ willChange: "transform, opacity" }}
                className={`relative lg:flex lg:items-center lg:gap-16 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`glass mb-6 rounded-2xl p-6 lg:mb-0 lg:w-[calc(50%-3rem)] ${
                    i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div
                    className={`mb-4 inline-flex items-center gap-3 ${
                      i % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 90 }}
                    transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-${step.color}/50 bg-background`}
                  >
                    <step.icon className={`h-7 w-7 text-${step.color}`} />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
