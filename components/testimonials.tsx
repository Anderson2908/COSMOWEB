"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Photographe indépendante",
    content:
      "Grâce à mon nouveau portfolio, j'ai doublé mes demandes de devis en 3 mois. Le design est exactement ce que je voulais !",
    rating: 5,
    initials: "MD",
  },
  {
    name: "Thomas Martin",
    role: "Gérant de restaurant",
    content:
      "Notre site vitrine nous permet enfin de présenter notre carte et de prendre des réservations en ligne. Simple et efficace.",
    rating: 5,
    initials: "TM",
  },
  {
    name: "Sophie Bernard",
    role: "Créatrice de bijoux",
    content:
      "Ma boutique en ligne est magnifique et facile à utiliser. Les clients adorent et mes ventes ont explosé !",
    rating: 5,
    initials: "SB",
  },
  {
    name: "Laurent Petit",
    role: "Coach sportif",
    content:
      "Un site professionnel qui reflète parfaitement mon activité. Mes clients peuvent maintenant réserver leurs séances en ligne facilement.",
    rating: 5,
    initials: "LP",
  },
  {
    name: "Claire Moreau",
    role: "Fleuriste",
    content:
      "L'équipe a su comprendre mes besoins et créer un site qui met en valeur mes créations florales. Je recommande à 100% !",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Nicolas Durand",
    role: "Artisan boulanger",
    content:
      "Enfin un site à la hauteur de notre savoir-faire artisanal. Les commandes en ligne ont boosté notre chiffre d'affaires.",
    rating: 5,
    initials: "ND",
  },
]

const stats = [
  { value: "50+", label: "Projets réalisés" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "4.9/5", label: "Note moyenne" },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="testimonials" className="relative py-24 px-4 bg-[#0a0a14] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/5 to-transparent pointer-events-none" />
      
      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className={`text-center space-y-4 mb-8 ${isVisible ? "animate-on-scroll" : ""}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a3e] border border-[#6366f1]/30 text-sm font-semibold text-[#818cf8] mb-4 tracking-wider">
            TÉMOIGNAGES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
            Ils nous font confiance
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance">
            Découvrez ce que nos clients disent de leur collaboration avec COSMOWEB
          </p>
        </div>

        {/* Stats */}
        <div className={`flex flex-wrap justify-center gap-8 md:gap-16 mb-16 ${isVisible ? "animate-on-scroll-delay-1" : ""}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6366f1] to-[#818cf8] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? "animate-on-scroll-delay-2" : ""}`}>
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative bg-[#111827]/80 border-[#1f2937] hover:border-[#6366f1]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#818cf8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <CardContent className="relative p-6 space-y-4">
                {/* Quote icon */}
                <Quote className="size-8 text-[#6366f1]/30 mb-2" />
                
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-300 leading-relaxed text-[15px]">"{testimonial.content}"</p>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#1f2937]">
                  <div className="relative size-12 rounded-full overflow-hidden bg-gradient-to-br from-[#6366f1] to-[#818cf8] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badge */}
        <div className={`mt-12 text-center ${isVisible ? "animate-on-scroll-delay-3" : ""}`}>
          <p className="text-gray-500 text-sm">
            Rejoignez nos clients satisfaits et donnez vie à votre projet web
          </p>
        </div>
      </div>
    </section>
  )
}
