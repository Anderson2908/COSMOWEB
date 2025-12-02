"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, Crown, ArrowRight, Shield } from "lucide-react"
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
    icon: Sparkles,
    gradient: "from-soft-blue to-soft-teal",
    ideal: "Une seule landing page (vitrine) simple et efficace",
    features: [
      "Design responsive et moderne",
      "Intégration du contenu fourni (texte, images, logo)",
      "Formulaire de contact / Call-to-action",
      "Livraison : sous 72 heures",
    ],
    advantages: "Rapide, simple, prix accessible",
    popular: false,
    href: "/packs/starter",
  },
  {
    id: "confort",
    name: "Pack Confort",
    price: "850",
    currency: "€",
    icon: Zap,
    gradient: "from-soft-violet to-soft-blue",
    ideal: "Site complet de jusqu'à 3 pages (ex : Accueil, Services, Contact)",
    features: [
      "Design responsive et personnalisé",
      "Optimisation SEO de base",
      "Formulaires et Call-to-action",
      "Suivi technique après la livraison (1 mois inclus)",
      "Livraison : De 7 à 10 jours",
    ],
    advantages: "Parfait pour une présence web complète et optimisée",
    popular: true,
    href: "/packs/confort",
  },
  {
    id: "premium",
    name: "Pack Premium",
    price: "1250",
    currency: "€",
    icon: Crown,
    gradient: "from-accent to-soft-violet",
    ideal: "Site web complet, nombre de pages illimité",
    features: [
      "Site web sur mesure codé",
      "Optimisation SEO avancée",
      "Formulaires, Call-to-action et intégration possible d'outils externes",
      "Suivi technique après la livraison (3 mois inclus)",
      "Livraison : De 2 à 5 semaines",
    ],
    advantages: "Solution complète, flexible et évolutive",
    popular: false,
    href: "/packs/premium",
  },
]

export function Pricing() {
  const [showForm, setShowForm] = useState(false)
  const [selectedPack, setSelectedPack] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  const handleSelectPack = (packId: string, packName: string) => {
    setSelectedPack(packName)
    setShowForm(true)
  }

  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div ref={ref} className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-on-scroll" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Nos Packs de Création de Site Internet</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Choisissez la solution qui correspond le mieux à vos besoins et à votre budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 ${isVisible ? "animate-on-scroll-delay-1" : ""}`}
        >
          {packs.map((pack, index) => {
            const Icon = pack.icon
            return (
              <Card
                key={pack.id}
                className={`relative flex flex-col bg-card border-2 transition-all duration-300 hover:shadow-2xl ${
                  pack.popular
                    ? "border-accent shadow-xl scale-105 md:scale-110 lg:-mt-4 lg:mb-4"
                    : "border-accent/20 hover:border-accent/50 hover:-translate-y-2"
                }`}
              >
                {/* Popular Badge */}
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <CardHeader className="space-y-4">
                  {/* Icon */}
                  <div
                    className={`size-16 rounded-xl bg-gradient-to-br ${pack.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon className="size-8" />
                  </div>

                  {/* Title */}
                  <div>
                    <CardTitle className="text-2xl font-bold">{pack.name}</CardTitle>
                    <CardDescription className="text-base mt-2">{pack.ideal}</CardDescription>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">{pack.price}</span>
                      <span className="text-xl text-muted-foreground">{pack.currency}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  {/* Features */}
                  <ul className="space-y-3">
                    {pack.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="mt-0.5 size-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Advantages */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-accent">✓</span> {pack.advantages}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="flex-col gap-2">
                  <Button
                    asChild
                    className={`w-full group ${
                      pack.popular
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                    size="lg"
                  >
                    <Link href={pack.href}>
                      Voir les détails
                      <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Suivi mensuel option */}
        <div className={`mt-16 ${isVisible ? "animate-on-scroll-delay-2" : ""}`}>
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-xl bg-gradient-to-br from-accent to-soft-violet flex items-center justify-center text-white shadow-lg">
                  <Shield className="size-8" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold">Suivi après livraison</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Option de suivi technique et maintenance mensuelle
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">19,99</span>
                    <span className="text-xl text-muted-foreground">€</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">par mois</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Profitez d'un suivi continu de votre site web après sa livraison. Cette option vous garantit :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 size-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="size-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Support technique réactif pour toute question ou problème
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 size-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="size-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Mises à jour de sécurité et maintenance préventive
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 size-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="size-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Corrections de bugs et ajustements mineurs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 size-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="size-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Sauvegardes régulières et monitoring de performance
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  setSelectedPack("Suivi mensuel")
                  setShowForm(true)
                }}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                Souscrire au suivi mensuel
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center space-y-4 ${isVisible ? "animate-on-scroll-delay-3" : ""}`}>
          <p className="text-muted-foreground">
            Tous nos packs incluent un design moderne, une mise en ligne complète et un support dédié.
          </p>
          <p className="text-sm text-muted-foreground">
            Besoin d'une solution personnalisée ?{" "}
            <button
              onClick={() => {
                setSelectedPack("Devis personnalisé")
                setShowForm(true)
              }}
              className="text-accent hover:underline font-medium"
            >
              Contactez-nous pour un devis sur mesure
            </button>
          </p>
        </div>
      </div>

      <PackForm open={showForm} onOpenChange={setShowForm} packName={selectedPack || undefined} />
    </section>
  )
}
