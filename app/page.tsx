import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { TechStack } from "@/components/tech-stack"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import Script from "next/script"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Process />
      <Testimonials />
      <TechStack />
      <Pricing />

    <Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is your typical project timeline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines vary based on scope and complexity. A typical website takes 2-5 weeks, while larger applications can take 3-6 months."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle project communication?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We believe in transparent communication. You'll have a dedicated project manager, access to project management tools, and regular check-ins throughout the project."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer ongoing support after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. All our packages include post-launch support. We also offer extended maintenance plans that include updates, security patches, and performance monitoring."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in modern web technologies including React, React Native, Next.js, Node.js, Python, Firebase, Supabase, and cloud platforms."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure project quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quality is embedded in our process. We follow agile methodologies, conduct thorough code reviews, implement automated testing, and perform rigorous quality assurance checks."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work with our existing team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We frequently collaborate with in-house teams. Whether you need us to augment your existing capabilities or take the lead on specific projects, we can adapt to your workflow."
          }
        }
      ]
    })
  }}
/>
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
