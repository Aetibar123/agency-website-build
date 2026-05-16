"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Zap, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: "$499",
    period: "starting at",
    description: "Perfect for startups and small businesses getting started.",
    features: [
      "Custom website design",
      "Up to 5 pages",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form integration",
      "1 month support",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-emerald to-teal-500",
  },
  {
    name: "Growth",
    icon: Zap,
    price: "$999",
    period: "starting at",
    description: "For growing businesses ready to scale their digital presence.",
    features: [
      "Everything in Starter",
      "Up to 15 pages",
      "Advanced animations",
      "CMS integration",
      "E-commerce features",
      "Advanced SEO & analytics",
      "Social media integration",
      "3 months support",
    ],
    cta: "Get Started",
    popular: true,
    gradient: "from-cyan to-indigo",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "tailored pricing",
    description: "Full-scale solutions for enterprises with complex requirements.",
    features: [
      "Everything in Growth",
      "Unlimited pages",
      "Custom integrations",
      "AI/ML features",
      "Performance marketing",
      "Dedicated team",
      "Priority support",
      "12 months support",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-indigo to-violet-500",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-sm font-medium text-cyan">
            Pricing
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose a plan that fits your needs. All plans include our commitment
            to quality and results.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 pt-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.25, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan to-indigo px-4 py-1.5 text-sm font-medium text-background shadow-lg shadow-cyan/20">
                  Most Popular
                </div>
              )}

              {/* Card */}
              <div
                className={`glass h-full rounded-2xl p-8 pt-10 transition-all duration-150 ${
                  plan.popular
                    ? "border-cyan/30 glow-cyan"
                    : "hover:border-indigo/30"
                }`}
              >
                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${plan.gradient}`}
                >
                  <plan.icon className="h-6 w-6 text-background" />
                </div>

                {/* Plan Info */}
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${plan.gradient}`}
                      >
                        <Check className="h-3 w-3 text-background" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan to-indigo text-background hover:shadow-lg hover:shadow-cyan/25"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
