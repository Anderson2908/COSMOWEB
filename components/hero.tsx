"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import { ProjectForm } from "./project-form"
import Image from "next/image"

export function Hero() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-soft-violet to-background px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-soft-blue/30 via-transparent to-soft-teal/20 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-blue border border-accent/30 text-sm font-medium text-foreground animate-fade-in-up">
              <Sparkles className="size-4 text-accent" />
              <span>Sites Web Professionnels Clés en Main</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance animate-fade-in-up [animation-delay:100ms]">
              Développez votre business <span className="text-accent">en ligne</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground text-balance animate-fade-in-up [animation-delay:200ms]">
              Créez votre présence digitale avec un site web moderne et performant. Portfolio, site vitrine ou
              e-commerce : nous transformons vos idées en réalité.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up [animation-delay:300ms]">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={() => setShowForm(true)}
              >
                Je souhaite un site
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent"
                onClick={() => {
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Découvrir nos services
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-12 text-sm text-muted-foreground animate-fade-in-up [animation-delay:400ms]">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-accent" />
                <span>Livraison rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-soft-teal" />
                <span>Design moderne</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-soft-blue" />
                <span>Support inclus</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in-up [animation-delay:500ms]">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
              <Image
                src="/modern-web-design-dashboard-interface-with-clean-u.jpg"
                alt="Interface de design web moderne"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-soft-violet border border-accent/30 rounded-xl p-4 shadow-lg">
              <p className="text-sm font-semibold text-foreground">+150 sites créés</p>
              <p className="text-xs text-muted-foreground">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Form Modal */}
      <ProjectForm open={showForm} onOpenChange={setShowForm} />
    </section>
  )
}
