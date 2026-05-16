"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, Linkedin, Instagram, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Case Studies", href: "#projects" },
    { name: "Documentation", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "https://x.com/Aetibar_", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aetibar-information-and-technologies-502531406/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/aetibar_information/", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-secondary/50">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="relative h-10 w-24">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan to-indigo opacity-80" />
                <div className="absolute inset-[2px] flex items-center justify-center rounded-lg bg-background">
                  <span className="gradient-text text-xl font-bold">Aetibar</span>
                </div>
              </div>
              <span className="text-xl font-bold text-foreground">
                Information<span className="gradient-text"> & Technologies</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-muted-foreground">
              We build scalable digital products and growth systems for ambitious
              businesses worldwide.
            </p>

           

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-cyan/20 hover:text-cyan"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aetibar Information & Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-cyan">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-cyan">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-cyan">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
