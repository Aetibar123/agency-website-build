"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVentures",
    image: "/testimonials/sarah.jpg",
    content:
      "Aetibar Information & Technologies transformed our entire digital presence. Their team delivered a product that exceeded our expectations and drove a 300% increase in conversions.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, ScaleUp Labs",
    image: "/testimonials/michael.jpg",
    content:
      "The level of professionalism and technical expertise is unmatched. They don't just build products — they build solutions that scale with your business.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "CMO, GrowthCorp",
    image: "/testimonials/emily.jpg",
    content:
      "Our marketing ROI increased by 250% after partnering with Nexus. Their data-driven approach and creative execution are truly world-class.",
    rating: 5,
  },
  // {
  //   name: "David Kim",
  //   role: "CTO, InnovateTech",
  //   image: "/testimonials/david.jpg",
  //   content:
  //     "As a technical founder, I appreciate their attention to code quality and architecture. They built us a platform that handles millions of requests daily.",
  //   rating: 5,
  // },
  // {
  //   name: "Lisa Thompson",
  //   role: "Director, FutureScale",
  //   image: "/testimonials/lisa.jpg",
  //   content:
  //     "From branding to development to marketing — Nexus handled everything flawlessly. Our startup launch was a massive success thanks to their team.",
  //   rating: 5,
  // },
  // {
  //   name: "James Wilson",
  //   role: "VP Product, DataFlow",
  //   image: "/testimonials/james.jpg",
  //   content:
  //     "They understood our vision from day one and delivered beyond what we imagined. The AI features they built are now our biggest competitive advantage.",
  //   rating: 5,
  // },
]

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-indigo/5 blur-[120px]" />

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
          <span className="mb-4 inline-block rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-sm font-medium text-emerald">
            Client Success
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders say
            about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.25, delay: i * 0.03, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ y: -3 }}
              style={{ willChange: "transform, opacity" }}
              className="glass group relative rounded-2xl p-6 transition-all duration-150 hover:border-cyan/30"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 h-8 w-8 text-cyan/20" />

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-indigo">
                  <span className="text-lg font-bold text-background">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
