"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer:
      "Le délai dépend du type de site choisi. Un site vitrine simple (Pack Starter) peut être livré en 72h, tandis qu'un site multi-pages (Pack Confort) prend de 7 à 10 jours. Pour un site sur-mesure (Pack Premium), comptez de 2 à 5 semaines selon la complexité.",
  },
  {
    question: "Le site m'appartient-il une fois terminé ?",
    answer:
      "Oui, absolument ! Une fois le site livré et le paiement effectué, vous êtes propriétaire de votre site web. Vous recevez tous les accès et pouvez en disposer comme bon vous semble.",
  },
  {
    question: "Y a-t-il des frais mensuels cachés ?",
    answer:
      "Non, aucun frais caché. Le prix affiché est le prix final pour la création de votre site. Seuls l'hébergement et la maintenance (optionnelle à 19,99€/mois) sont des frais récurrents, mais ils sont clairement indiqués et sans engagement.",
  },
  {
    question: "Puis-je modifier mon site moi-même ?",
    answer:
      "Oui ! Selon le pack choisi, vous aurez accès à une interface d'administration simple pour modifier vos textes, images et contenus. Nous vous formons à son utilisation lors de la livraison.",
  },
  {
    question: "Faites-vous le référencement (SEO) ?",
    answer:
      "Oui, tous nos sites sont optimisés pour le référencement naturel. Le Pack Starter inclut les bases SEO, le Pack Confort une optimisation SEO de base, et le Pack Premium un SEO avancé avec rédaction optimisée pour vous positionner devant vos concurrents.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative py-24 bg-[#0a0a14] overflow-hidden"
    >
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-on-scroll" : ""}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Vous avez des interrogations ? Nous avons les réponses.
          </p>
        </div>

        {/* FAQ Items */}
        <div className={`max-w-4xl mx-auto space-y-4 ${isVisible ? "animate-on-scroll-delay-1" : ""}`}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827]/70 border border-[#1f2937] rounded-2xl overflow-hidden transition-colors duration-200 hover:border-[#374151]"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-lg text-white pr-8">{item.question}</span>
                <div className="size-10 rounded-full bg-[#1a1a2e] border border-[#2a2a4e] flex items-center justify-center flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="size-5 text-gray-400" />
                  ) : (
                    <Plus className="size-5 text-gray-400" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
