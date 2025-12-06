"use client"

import { Settings, Trophy, Users, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="relative py-24 bg-[#0a0a14] overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 ${isVisible ? "animate-on-scroll" : ""}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a3e] border border-[#3b82f6]/30 text-sm font-semibold text-[#60a5fa] mb-8 tracking-wider">
              NOTRE HISTOIRE
            </div>

            {/* Titre */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-white">Plus qu'une agence web,</span>
              <br />
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
                votre partenaire digital
              </span>
            </h2>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Chez <span className="font-bold text-white">COSMOWEB</span>, nous croyons qu'un site internet n'est pas juste une vitrine, mais
              le <span className="text-[#f59e0b]">cœur battant</span> de votre présence digitale.
            </p>
          </div>

          {/* Deux colonnes : Mission et Expertise */}
          <div className={`grid md:grid-cols-2 gap-6 md:gap-8 mb-12 ${isVisible ? "animate-on-scroll-delay-1" : ""}`}>
            {/* Notre Mission */}
            <div className="group relative bg-gradient-to-br from-[#0f0f1a] to-[#111827] rounded-2xl p-8 border border-[#1f2937] hover:border-[#3b82f6]/50 transition-all duration-500">
              {/* Icône flottante */}
              <div className="absolute -top-5 left-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#3b82f6] rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl p-3 shadow-lg">
                    <Settings className="size-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="mt-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">Notre Mission</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full" />
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  Transformer vos idées en <span className="text-white font-medium">expériences web sur mesure</span>, modernes et performantes. Nous concevons des outils
                  digitaux parfaitement adaptés aux besoins spécifiques des PME, loin des solutions génériques sans âme.
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 text-xs font-medium bg-[#3b82f6]/10 text-[#60a5fa] rounded-full border border-[#3b82f6]/20">Sur mesure</span>
                  <span className="px-3 py-1 text-xs font-medium bg-[#3b82f6]/10 text-[#60a5fa] rounded-full border border-[#3b82f6]/20">Moderne</span>
                  <span className="px-3 py-1 text-xs font-medium bg-[#3b82f6]/10 text-[#60a5fa] rounded-full border border-[#3b82f6]/20">Performant</span>
                </div>
              </div>
            </div>

            {/* L'Expertise */}
            <div className="group relative bg-gradient-to-br from-[#0f0f1a] to-[#111827] rounded-2xl p-8 border border-[#1f2937] hover:border-[#f59e0b]/50 transition-all duration-500">
              {/* Icône flottante */}
              <div className="absolute -top-5 left-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#f59e0b] rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-xl p-3 shadow-lg">
                    <Trophy className="size-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="mt-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">L'Expertise</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full" />
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  Forts d'une expérience solide dans le développement web pour des entreprises générant plus de{" "}
                  <span className="font-bold text-white">12 millions d'euros</span> de CA annuel, nous maîtrisons les enjeux de
                  performance et de conversion à grande échelle.
                </p>
                {/* Stat mise en avant */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">12M€+</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">CA clients accompagnés</span>
                  </div>
                  <div className="w-px h-12 bg-[#1f2937]" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">100%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Satisfaction client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Encadré "Pourquoi nous choisir ?" */}
          <div className={`bg-[#111827]/90 rounded-2xl p-8 md:p-10 border border-[#1f2937] ${isVisible ? "animate-on-scroll-delay-2" : ""}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Pourquoi nous choisir ?</h3>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Cette expertise "grand compte", nous la mettons aujourd'hui au service de votre entreprise. Nous
              comprenons ce que signifie allier <span className="text-[#3b82f6]">design</span>,{" "}
              <span className="text-[#3b82f6]">performance technique</span> et{" "}
              <span className="text-[#f59e0b]">efficacité commerciale</span>.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Nous ne nous contentons pas de livrer des sites "beaux". Nous créons des actifs numériques qui
              apportent une réelle valeur : plus de visibilité, plus de conversions et une image professionnelle
              renforcée.
            </p>

            {/* Badge projets */}
            <div className="flex items-center gap-3 text-gray-500">
              <div className="flex items-center gap-2 bg-[#1a1a2e] rounded-full px-3 py-1.5">
                <Users className="size-4" />
                <Zap className="size-4 text-[#f59e0b]" />
              </div>
              <span className="text-sm">Déjà +50 projets accompagnés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
