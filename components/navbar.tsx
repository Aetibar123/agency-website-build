"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-cyan ${
                  activeSection === link.href.replace("#", "")
                    ? "text-cyan"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-indigo"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-cyan to-indigo px-6 text-background hover:shadow-lg hover:shadow-cyan/25"
            >
              <Link href="#contact">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo to-cyan opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass-strong absolute left-0 right-0 top-full mt-2 mx-4 rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-cyan"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-gradient-to-r from-cyan to-indigo text-background"
              >
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
