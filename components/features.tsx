"use client"

import { Monitor, Smartphone, Search, Zap, Layers, ShieldCheck, MessageSquare, Rocket, MousePointer2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Monitor,
    title: "Sites Vitrine",
    description:
      "Présentez votre activité avec élégance. Un design sur-mesure qui reflète l'identité unique de votre PME.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Une expérience fluide sur tous les écrans. Vos clients sont sur mobile, votre site doit l'être aussi.",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description: "Soyez visible sur Google. Nous optimisons la structure technique pour vous placer devant vos concurrents.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Des temps de chargement ultra-rapides. Ne perdez plus aucun client à cause d'un site lent.",
  },
  {
    icon: Layers,
    title: "Maintenance",
    description: "On s'occupe de tout. Mises à jour, sauvegardes et sécurité pour que vous puissiez dormir tranquille.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description: "Protection avancée contre les menaces. Certificat SSL inclus et bonnes pratiques de sécurité appliquées.",
  },
]

const processSteps = [
  {
    icon: MessageSquare,
    title: "Découverte",
    description: "On échange sur vos objectifs, votre marque et vos besoins. On définit ensemble la stratégie gagnante.",
    size: "normal",
  },
  {
    icon: MousePointer2,
    title: "Conception",
    description: "Nos designers et développeurs travaillent pour créer une interface unique et développer les fonctionnalités.",
    size: "large",
  },
  {
    icon: Rocket,
    title: "Lancement",
    description: "Après validation, nous mettons votre site en ligne. Nous vous formons à son utilisation si besoin.",
    size: "normal",
  },
]

export function Features() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="services"
      className="relative py-24 px-4 bg-[#0a0a14] overflow-hidden"
    >
      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-on-scroll" : ""}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
            Tout ce dont votre PME a besoin
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-balance">
            Pas de frais cachés, pas de jargon technique. Juste des résultats concrets pour votre business.
          </p>
        </div>

        {/* Grille de features */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? "animate-on-scroll-delay-1" : ""}`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#111827]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#1f2937] hover:border-[#6366f1]/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Lueur au hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#818cf8]/10" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#6366f1]/20 rounded-full blur-3xl" />
              </div>
              
              {/* Icône */}
              <div className="relative size-12 rounded-xl bg-[#1a1a2e] border border-[#2a2a4e] group-hover:border-[#6366f1]/50 group-hover:bg-[#1a1a3e] flex items-center justify-center text-gray-400 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#6366f1]/20">
                <feature.icon className="size-6 transition-all duration-500 group-hover:text-[#818cf8] group-hover:scale-110" />
              </div>
              
              {/* Titre */}
              <h3 className="relative text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#a5b4fc]">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="relative text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section Simple comme 1, 2, 3 */}
        <div id="features" className="mt-32 space-y-16">
          {/* Header */}
          <div className={`text-center space-y-4 ${isVisible ? "animate-on-scroll-delay-2" : ""}`}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              Simple comme 1, 2, 3
            </h3>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Notre processus est rodé pour livrer votre site rapidement sans compromis sur la qualité.
            </p>
          </div>

          {/* Étapes du processus */}
          <div className={`relative ${isVisible ? "animate-on-scroll-delay-3" : ""}`}>
            {/* Ligne horizontale de connexion animée */}
            <div className="hidden md:block absolute top-[60px] left-1/2 -translate-x-1/2 w-[60%] h-[2px] overflow-hidden">
              <div 
                className="w-full h-full bg-gradient-to-r from-[#6366f1]/50 via-[#6366f1] to-[#6366f1]/50"
                style={{
                  animation: isVisible ? "line-draw 1.5s ease-out forwards" : "none",
                  transform: "scaleX(0)",
                }}
              />
              {/* Particule lumineuse qui voyage */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-white rounded-full blur-sm"
                style={{
                  animation: isVisible ? "particle-travel 3s ease-in-out infinite 1.5s" : "none",
                  opacity: 0,
                }}
              />
            </div>

            {/* Les 3 étapes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col items-center text-center"
                  style={{
                    animation: isVisible ? `step-appear 0.6s ease-out ${0.3 + index * 0.2}s forwards` : "none",
                    opacity: 0,
                    transform: "translateY(30px)",
                  }}
                >
                  {/* Cercle avec icône */}
                  <div
                    className={`relative z-10 rounded-full flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${
                      step.size === "large"
                        ? "size-32 bg-gradient-to-b from-[#2a2a5e] to-[#1a1a3e] border-2 border-[#6366f1]/50"
                        : "size-24 bg-[#1a1a2e] border border-[#2a2a4e] group-hover:border-[#6366f1]/50"
                    }`}
                    style={{
                      animation: isVisible ? `float ${3 + index * 0.5}s ease-in-out infinite ${index * 0.3}s` : "none",
                    }}
                  >
                    {/* Lueur pulsante derrière le cercle */}
                    <div 
                      className={`absolute inset-0 rounded-full ${
                        step.size === "large" ? "bg-[#6366f1]/30" : "bg-[#6366f1]/20"
                      }`}
                      style={{
                        animation: isVisible ? `pulse-glow 2s ease-in-out infinite ${index * 0.4}s` : "none",
                        filter: "blur(20px)",
                      }}
                    />

                    <step.icon
                      className={`relative z-10 transition-all duration-300 group-hover:scale-110 ${
                        step.size === "large" ? "size-10 text-[#818cf8] group-hover:text-white" : "size-8 text-[#6366f1] group-hover:text-[#818cf8]"
                      }`}
                    />
                  </div>

                  {/* Titre */}
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#818cf8]">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed max-w-xs transition-colors duration-300 group-hover:text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
