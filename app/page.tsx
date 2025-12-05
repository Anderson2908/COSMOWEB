"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { ContactSection } from "@/components/contact-section"
import { FAQ } from "@/components/faq"
import { ProjectForm } from "@/components/project-form"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <ContactSection />
      <FAQ />
      <Footer />
      <ProjectForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </main>
  )
}
