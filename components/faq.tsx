"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer:
      "Le délai dépend du type de site choisi. Un site vitrine simple peut être livré en 2-3 semaines, tandis qu'un site e-commerce plus complexe peut prendre 4-6 semaines. Nous vous fournirons un calendrier précis après avoir discuté de vos besoins spécifiques.",
  },
  {
    question: "Puis-je modifier mon site web moi-même après la livraison ?",
    answer:
      "Absolument ! Nous créons des sites faciles à gérer. Vous recevrez une formation complète pour effectuer des modifications simples comme changer du texte, des images ou ajouter du contenu. Pour les modifications plus complexes, notre équipe reste à votre disposition.",
  },
  {
    question: "Le prix inclut-il l'hébergement et le nom de domaine ?",
    answer:
      "Nos packs incluent la création du site. L'hébergement et le nom de domaine sont facturés séparément, mais nous pouvons nous en occuper pour vous. L'hébergement démarre généralement à partir de 10€/mois selon vos besoins.",
  },
  {
    question: "Mon site sera-t-il optimisé pour les mobiles ?",
    answer:
      "Oui, tous nos sites sont 100% responsive et optimisés pour tous les appareils (smartphones, tablettes, ordinateurs). Nous testons rigoureusement sur différents écrans pour garantir une expérience utilisateur parfaite.",
  },
  {
    question: "Proposez-vous un service de maintenance après la livraison ?",
    answer:
      "Oui ! Notre formule de suivi mensuel à 19,99€ comprend les mises à jour de sécurité, les sauvegardes régulières, le support technique et les petites modifications. Vous pouvez également opter pour un support à la demande.",
  },
  {
    question: "Comment se déroule le processus de création ?",
    answer:
      "1) Rendez-vous de découverte pour comprendre vos besoins. 2) Création d'une maquette pour validation. 3) Développement du site. 4) Tests et ajustements. 5) Formation et mise en ligne. Vous êtes impliqué à chaque étape pour garantir un résultat qui vous correspond.",
  },
  {
    question: "Puis-je voir des exemples de vos réalisations ?",
    answer:
      "Bien sûr ! Consultez notre section 'Nos Réalisations' sur cette page ou contactez-nous pour voir des projets similaires au vôtre. Nous serons ravis de partager notre portfolio complet lors de notre premier échange.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
    answer:
      "Votre satisfaction est notre priorité. Nous incluons plusieurs cycles de révisions dans nos packs pour nous assurer que le site final correspond exactement à vos attentes. Nous travaillons ensemble jusqu'à ce que vous soyez 100% satisfait.",
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
      ref={ref}
      className={`py-24 bg-gradient-to-br from-background via-muted/20 to-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos services et notre processus
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed border-t border-border/50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Vous avez d'autres questions ?</p>
          <Button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
          >
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  )
}
