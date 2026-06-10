"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does Aetibar Information & Technologies provide?",
    answer:
      "Aetibar provides website development, web application development, SEO services, digital marketing, branding, AI solutions, and software development services.",
  },
  {
    question: "Why choose Aetibar for web development services?",
    answer:
      "Aetibar develops responsive, SEO-friendly, and high-performance websites tailored to business goals and user experience.",
  },
  {
    question: "Does Aetibar offer SEO services?",
    answer:
      "Yes, Aetibar offers technical SEO, on-page SEO, off-page SEO, local SEO, keyword research, content optimization, and SEO audits.",
  },
  {
    question: "Do you provide digital marketing services?",
    answer:
      "Yes, Aetibar provides digital marketing services including Google Ads, social media marketing, content marketing, SEO, and lead generation strategies.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "Website development timelines depend on project complexity. A standard business website usually takes 2–6 weeks, while custom web applications may require additional time.",
  },
  {
    question: "Do you provide ongoing website maintenance and support?",
    answer:
      "Yes, Aetibar provides website maintenance, security updates, performance monitoring, technical support, and ongoing optimization services.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-4xl px-6">
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
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.2, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="glass group flex w-full items-center justify-between rounded-xl p-5 text-left transition-all duration-150 hover:border-cyan/30"
              >
                <span className="text-lg font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-150 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15, ease: [0.33, 1, 0.68, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-3">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
