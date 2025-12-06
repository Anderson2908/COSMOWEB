"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { ProjectForm } from "./project-form"

export function Hero() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a14] px-4"
    >

      <div className="container mx-auto max-w-5xl relative z-10 pt-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a3e] border border-[#6366f1]/30 text-sm font-semibold text-[#a5b4fc] animate-fade-in-up tracking-wider">
              SPÉCIALISTE DIGITAL PME
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-in-up [animation-delay:100ms]">
            <span className="text-white"><span className="text-[#c4b5fd] drop-shadow-[0_0_25px_rgba(167,139,250,0.5)]">Propulsez</span> votre entreprise</span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#a78bfa] bg-clip-text text-transparent">
              dans l'ère numérique
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 text-balance max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms] leading-relaxed">
            Nous créons des sites web ultra-performants, modernes et conçus pour
            convertir vos visiteurs en clients fidèles. Clé en main. Sans stress.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:300ms] pt-4">
            <Button
              size="lg"
              className="relative text-lg px-8 py-7 bg-white text-[#0a0a14] font-semibold rounded-full group min-w-[220px] overflow-hidden transition-colors duration-200 hover:bg-[#c4b5fd] active:scale-95"
              onClick={() => setShowForm(true)}
            >
              <span className="relative z-10 flex items-center">
                Lancer mon projet
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="relative text-lg px-8 py-7 bg-[#1a1a2e] text-white border-2 border-[#2a2a4e] rounded-full min-w-[220px] overflow-hidden transition-colors duration-200 hover:border-[#6366f1] hover:bg-[#1a1a3e] active:scale-95 group"
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className="relative z-10 transition-colors duration-200 group-hover:text-[#c4b5fd]">
                Comment ça marche ?
              </span>
            </Button>
          </div>

          {/* Badges en bas */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-16 animate-fade-in-up [animation-delay:400ms]">
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle2 className="size-5 text-[#6366f1]" />
              <span className="text-sm font-medium">Design Premium</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle2 className="size-5 text-[#6366f1]" />
              <span className="text-sm font-medium">SEO Optimisé</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle2 className="size-5 text-[#6366f1]" />
              <span className="text-sm font-medium">Mobile First</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Form Modal */}
      <ProjectForm open={showForm} onOpenChange={setShowForm} />
    </section>
  )
}
