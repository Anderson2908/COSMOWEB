"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { ContactSection } from "@/components/contact-section"
import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { ProjectForm } from "@/components/project-form"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      <Hero />
      <VideoSection />
      <Features />
      <Pricing />
      <Testimonials />
      <About />
      <ContactSection />
      <FAQ />
      <CTA />
      <Footer />
      <ProjectForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </main>
  )
}
