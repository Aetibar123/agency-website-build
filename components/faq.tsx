"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A typical website takes 2-5 weeks, while larger applications can take 3-6 months. We provide detailed timelines during our discovery phase and keep you updated throughout the process.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We believe in transparent communication. You'll have a dedicated project manager, access to our project management tools, and regular check-ins. We provide weekly progress reports and are always available via Slack, email, or video calls.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Absolutely! All our packages include post-launch support. We also offer extended maintenance plans that include updates, security patches, performance monitoring, and feature enhancements to keep your product running smoothly.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We specialize in modern web technologies including React, React Native, Next.js, Node.js, Python, Firebase, Supabase, and cloud platforms like AWS and Google Cloud. We choose the best tech stack for each project based on your specific requirements and scalability needs.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "Quality is embedded in our process. We follow agile methodologies, conduct thorough code reviews, implement automated testing, and perform extensive QA before every release. Our team adheres to industry best practices and coding standards.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes! We frequently collaborate with in-house teams. Whether you need us to augment your existing capabilities or take the lead on specific initiatives, we adapt our approach to integrate seamlessly with your workflow and team culture.",
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
