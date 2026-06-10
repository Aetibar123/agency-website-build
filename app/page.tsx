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
          "name": "What services does Aetibar Information & Technologies provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aetibar provides website development, web application development, SEO services, digital marketing, branding, AI solutions, and software development services."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Aetibar for web development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aetibar develops responsive, SEO-friendly, and high-performance websites tailored to business goals and user experience."
          }
        },
        {
          "@type": "Question",
          "name": "Does Aetibar offer SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Aetibar offers technical SEO, on-page SEO, off-page SEO, local SEO, keyword research, content optimization, and SEO audits."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide digital marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Aetibar provides digital marketing services including Google Ads, social media marketing, content marketing, SEO, and lead generation strategies."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development timelines depend on project complexity. A standard business website usually takes 2–6 weeks, while custom web applications may require additional time."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ongoing website maintenance and support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Aetibar provides website maintenance, security updates, performance monitoring, technical support, and ongoing optimization services."
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
