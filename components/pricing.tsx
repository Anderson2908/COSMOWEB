"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, ArrowRight, Snowflake } from "lucide-react"
import { useState } from "react"
import { PackForm } from "./pack-form"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

const packs = [
  {
    id: "starter",
    name: "Pack Starter",
    price: "500",
    currency: "€",
    icon: Star,
    iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
    description: "Idéal pour se lancer avec une présence professionnelle efficace.",
    features: [
      "Site One-Page moderne",
      "Design responsive (Mobile & PC)",
      "Formulaire de contact",
      "Intégration réseaux sociaux",
      "Optimisation vitesse",
    ],
    popular: false,
    href: "/packs/starter",
    buttonStyle: "border",
    christmas: false,
  },
  {
    id: "confort",
    name: "Pack Confort",
    price: "765",
    originalPrice: "850",
    currency: "€",
    icon: Zap,
    iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
    description: "La solution complète pour présenter votre activité en détail.",
    features: [
      "Site Multi-pages (jusqu'à 5)",
      "Blog / Actualités",
      "Optimisation SEO de base",
      "Interface d'administration",
      "Google Maps & Analytics",
      "Support prioritaire",
      "Formation à l'utilisation",
    ],
    popular: true,
    href: "/packs/confort",
    buttonStyle: "filled",
    christmas: true,
  },
  {
    id: "premium",
    name: "Pack Premium",
    price: "1250",
    currency: "€",
    icon: Crown,
    iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
    description: "Pour les entreprises qui visent l'excellence et la performance.",
    features: [
      "Site sur-mesure complexe",
      "Fonctionnalités avancées (Rdv, E-shop...)",
      "SEO Avancé & Rédaction",
      "Design Premium & Animations",
      "Multi-langues",
      "Maintenance offerte (3 mois)",
      "Support 7j/7",
    ],
    popular: false,
    href: "/packs/premium",
    buttonStyle: "border",
    christmas: false,
  },
]

// Composant flocon de neige animé
function SnowEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-white/60 animate-snowfall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            fontSize: `${8 + Math.random() * 10}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}

const maintenanceFeatures = [
  "Support technique réactif pour toute question ou problème",
  "Corrections de bugs et ajustements mineurs",
  "Hébergement sécurisé de votre site",
  "Mises à jour de sécurité et maintenance préventive",
  "Sauvegardes régulières et monitoring de performance",
]

export function Pricing() {
  const [showForm, setShowForm] = useState(false)
  const [selectedPack, setSelectedPack] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="relative py-24 px-4 bg-[#0a0a14] overflow-hidden">
      <div ref={ref} className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-on-scroll" : ""}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
            Des tarifs clairs, sans surprises
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance">
            Investissez dans un outil rentable pour votre entreprise.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6 ${isVisible ? "animate-on-scroll-delay-1" : ""}`}
        >
          {packs.map((pack) => {
            const Icon = pack.icon
            return (
              <div
                key={pack.id}
                className={`group relative flex flex-col rounded-2xl p-8 border cursor-pointer transition-colors duration-200 ${
                  pack.christmas
                    ? "bg-gradient-to-b from-[#111827]/90 via-[#111827]/90 to-[#1e3a5f]/40 border-[#6366f1] shadow-lg shadow-[#6366f1]/10"
                    : pack.popular
                    ? "bg-[#111827]/90 border-[#6366f1] shadow-lg shadow-[#6366f1]/10"
                    : "bg-[#111827]/80 border-[#1f2937] hover:border-[#6366f1]/50"
                }`}
              >
                {/* Effet neige pour Noël */}
                {pack.christmas && <SnowEffect />}

                {/* Lueur au hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/8 via-transparent to-[#818cf8]/8" />
                </div>

                {/* Christmas Badge */}
                {pack.christmas && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    <span className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                      <Snowflake className="size-4" />
                      Offre de Noël -10%
                      <Snowflake className="size-4" />
                    </span>
                  </div>
                )}

                {/* Popular Badge (si pas Noël) */}
                {pack.popular && !pack.christmas && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#6366f1] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      Le plus populaire
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`relative size-12 rounded-xl ${pack.christmas ? "bg-gradient-to-br from-red-500 to-green-600" : pack.iconBg} flex items-center justify-center text-white mb-6`}>
                  <Icon className="size-6" />
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#a5b4fc]">{pack.name}</h3>

                {/* Price */}
                <div className="relative mb-4">
                  {pack.originalPrice && (
                    <span className="text-xl text-gray-500 line-through mr-2">{pack.originalPrice}€</span>
                  )}
                  <span className={`text-4xl font-bold transition-colors duration-300 group-hover:text-[#c4b5fd] ${pack.christmas ? "text-green-400" : "text-white"}`}>{pack.price}</span>
                  <span className="text-2xl text-gray-400">{pack.currency}</span>
                  {pack.christmas && (
                    <p className="text-xs text-gray-400 mt-1">Offre valable jusqu&apos;au 15/01</p>
                  )}
                </div>

                {/* Description */}
                <p className="relative text-gray-400 mb-6 text-sm leading-relaxed">{pack.description}</p>

                {/* Features */}
                <ul className="relative space-y-3 flex-1 mb-8">
                  {pack.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="size-5 text-[#6366f1] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  asChild
                  className={`relative w-full rounded-full py-6 font-semibold transition-colors duration-300 ${
                    pack.buttonStyle === "filled"
                      ? "bg-[#6366f1] hover:bg-[#5558e3] text-white"
                      : "bg-transparent border-2 border-[#6366f1] text-[#a5b4fc] hover:bg-[#6366f1]/10"
                  }`}
                  size="lg"
                >
                  <Link href={pack.href}>En savoir plus</Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Maintenance & Sérénité */}
        <div className={`mt-16 ${isVisible ? "animate-on-scroll-delay-2" : ""}`}>
          <div className="bg-[#111827]/90 rounded-2xl p-8 md:p-10 border border-[#6366f1]/30">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Left content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Maintenance & Sérénité</h3>
                <p className="text-gray-400 mb-8">
                  Assurez la pérennité de votre site web avec notre offre tout-inclus.
                </p>

                {/* Features in 2 columns */}
                <div className="grid md:grid-cols-2 gap-4">
                  {maintenanceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="size-5 text-[#6366f1] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right content - Price box */}
              <div className="lg:text-right flex flex-col items-start lg:items-end">
                <p className="text-gray-400 text-sm mb-2">Abonnement Mensuel</p>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-white">19,99€</span>
                  <span className="text-gray-400">/mois</span>
                </div>
                <span className="inline-block bg-transparent border border-[#f59e0b] text-[#f59e0b] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                  Sans engagement
                </span>
                <Button
                  asChild
                  className="bg-[#6366f1] hover:bg-[#5558e3] text-white px-6 py-5 rounded-full font-semibold transition-all duration-300"
                >
                  <Link href="/subscribe" className="flex items-center gap-2">
                    S&apos;abonner
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PackForm open={showForm} onOpenChange={setShowForm} packName={selectedPack || undefined} />
    </section>
  )
}
