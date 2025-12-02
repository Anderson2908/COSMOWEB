"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { ProjectForm } from "./project-form"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTA() {
  const [showForm, setShowForm] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-soft-violet via-soft-blue to-soft-teal">
      <div
        ref={ref}
        id="form"
        className={`container mx-auto max-w-4xl text-center space-y-8 ${isVisible ? "animate-on-scroll" : ""}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">Prêt à lancer votre site web ?</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto text-balance text-foreground">
          Discutons de votre projet et créons ensemble le site web qui fera décoller votre business.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground group shadow-lg"
          onClick={() => setShowForm(true)}
        >
          Démarrer mon projet
          <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <ProjectForm open={showForm} onOpenChange={setShowForm} />
    </section>
  )
}
