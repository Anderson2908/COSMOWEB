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
              className="group relative bg-[#111827]/80 rounded-2xl p-8 border border-[#1f2937] hover:border-[#6366f1]/50 transition-colors duration-300 cursor-pointer overflow-hidden"
            >
              {/* Lueur au hover - simplifiée */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#818cf8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Icône */}
              <div className="relative size-12 rounded-xl bg-[#1a1a2e] border border-[#2a2a4e] group-hover:border-[#6366f1]/50 flex items-center justify-center text-gray-400 mb-6 transition-colors duration-300">
                <feature.icon className="size-6 transition-colors duration-300 group-hover:text-[#818cf8]" />
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
            {/* Ligne horizontale de connexion - animation unique au chargement */}
            <div className="hidden md:block absolute top-[60px] left-1/2 -translate-x-1/2 w-[60%] h-[2px] overflow-hidden">
              <div 
                className={`w-full h-full bg-gradient-to-r from-[#6366f1]/50 via-[#6366f1] to-[#6366f1]/50 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                style={{ transition: 'transform 1s ease-out' }}
              />
            </div>

            {/* Les 3 étapes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`group flex flex-col items-center text-center ${isVisible ? 'animate-on-scroll' : ''}`}
                  style={{ animationDelay: isVisible ? `${0.3 + index * 0.15}s` : '0s' }}
                >
                  {/* Cercle avec icône - hover seulement */}
                  <div
                    className={`relative z-10 rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105 ${
                      step.size === "large"
                        ? "size-32 bg-gradient-to-b from-[#2a2a5e] to-[#1a1a3e] border-2 border-[#6366f1]/50"
                        : "size-24 bg-[#1a1a2e] border border-[#2a2a4e] group-hover:border-[#6366f1]/50"
                    }`}
                  >
                    {/* Lueur statique au hover seulement */}
                    <div 
                      className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        step.size === "large" ? "bg-[#6366f1]/20" : "bg-[#6366f1]/15"
                      }`}
                      style={{ filter: "blur(15px)" }}
                    />

                    <step.icon
                      className={`relative z-10 transition-colors duration-300 ${
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
