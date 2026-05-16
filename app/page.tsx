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
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
