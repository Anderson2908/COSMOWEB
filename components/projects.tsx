"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "Simulateur Café",
    category: "Application web",
    description: "Simulateur d'abonnement café professionnel pour Juste à Temps",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    link: "https://abonnement-cafe.justeatemps.com",
  },
  {
    title: "Simulateur Fruits",
    category: "Application web",
    description: "Simulateur d'abonnement fruits professionnel pour Juste à Temps",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop",
    link: "https://abonnement-fruits.justeatemps.com",
  },
  {
    title: "Bistrot du Marché",
    category: "Restaurant",
    description: "Site avec réservation en ligne et menu digital",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    link: "",
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="relative py-20 px-4 bg-[#0d0d1a] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#6366f1]/3 to-transparent pointer-events-none" />
      
      <div ref={ref} className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className={`text-center space-y-3 mb-10 ${isVisible ? "animate-on-scroll" : ""}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a3e] border border-[#6366f1]/30 text-xs font-semibold text-[#818cf8] tracking-wider">
            RÉALISATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nos derniers projets
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Quelques exemples de sites web que nous avons créés pour nos clients
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 ${isVisible ? "animate-on-scroll-delay-1" : ""}`}>
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              className={`h-full ${project.link ? "" : "pointer-events-none"}`}
            >
            <Card 
              className={`group relative h-full flex flex-col bg-[#111827]/80 border-[#1f2937] hover:border-[#6366f1]/50 transition-all duration-300 overflow-hidden ${project.link ? "cursor-pointer" : ""}`}
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#6366f1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="size-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0" />
                </div>
              </div>
              
              <CardContent className="p-4 space-y-2 flex-grow flex flex-col">
                {/* Category badge */}
                <span className="text-xs font-medium text-[#818cf8] bg-[#6366f1]/10 px-2 py-1 rounded">
                  {project.category}
                </span>
                
                {/* Title */}
                <h3 className="font-semibold text-white group-hover:text-[#818cf8] transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-400 line-clamp-2 flex-grow">
                  {project.description}
                </p>
              </CardContent>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
