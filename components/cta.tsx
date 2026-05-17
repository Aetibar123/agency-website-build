"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[150px]" />
      <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo/10 blur-[100px]" />
      <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-emerald/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-12 lg:p-16"
        >
          {/* Decorative Elements */}
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-indigo/20 blur-3xl" />

          {/* Content */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.05, ease: [0.33, 1, 0.68, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan to-indigo"
            >
              <Sparkles className="h-8 w-8 text-background" />
            </motion.div>

            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Ready to Build Something
              <br />
              <span className="gradient-text">Exceptional?</span>
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Let&apos;s discuss your project and explore how we can help you achieve
              your digital goals. Book a free strategy call today.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan to-indigo px-8 text-lg font-semibold text-background transition-all hover:shadow-lg hover:shadow-cyan/25"
              >
                <Link href="mailto:[EMAIL_ADDRESS]">
                  <span className="relative z-10 flex items-center gap-2">
                    hello.aetibar@gmail.com  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald" />
                Free consultation
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan" />
                No commitment required
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-indigo" />
                Response within 24h
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
