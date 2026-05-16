"use client"

import { motion } from "framer-motion"

const logos = [
  "TechCorp",
  "InnovateLabs",
  "FutureScale",
  "DataFlow",
  "CloudSync",
  "AIVentures",
  "GrowthHub",
  "ScaleUp",
  "DigitalEdge",
  "SmartSystems",
]

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-secondary/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-secondary/80 to-transparent" />

        {/* Scrolling Logos */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex h-12 items-center justify-center px-4"
              >
                <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground/60 transition-colors hover:text-foreground">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan/20 to-indigo/20" />
                  {logo}
                </div>
              </div>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 items-center gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex h-12 items-center justify-center px-4"
              >
                <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground/60 transition-colors hover:text-foreground">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan/20 to-indigo/20" />
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
