"use client"

import { Button } from "@/components/ui/button"
import { Check, Shield, Zap, Headphones, Server, RefreshCw, ArrowRight } from "lucide-react"
import Link from "next/link"

// Lien de paiement Stripe (Payment Link)
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_bJe4gB3xdg4h3cSfOx08g00"

const features = [
  {
    icon: Headphones,
    title: "Support technique réactif",
    description: "Réponse sous 24h pour toute question ou problème",
  },
  {
    icon: Zap,
    title: "Corrections & ajustements",
    description: "Bugs corrigés et modifications mineures incluses",
  },
  {
    icon: Server,
    title: "Hébergement sécurisé",
    description: "Votre site hébergé sur des serveurs performants",
  },
  {
    icon: Shield,
    title: "Mises à jour de sécurité",
    description: "Protection contre les failles et maintenance préventive",
  },
  {
    icon: RefreshCw,
    title: "Sauvegardes régulières",
    description: "Vos données sauvegardées automatiquement",
  },
]

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      {/* Header */}
      <header className="border-b border-[#1f2937]">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white hover:text-[#a5b4fc] transition-colors">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <div className="inline-block bg-[#6366f1]/20 text-[#a5b4fc] px-4 py-2 rounded-full text-sm font-medium mb-6">
              Abonnement Mensuel
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Maintenance & Sérénité
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Assurez la pérennité de votre site web avec notre offre tout-inclus. 
              Concentrez-vous sur votre activité, on s&apos;occupe du reste.
            </p>

            {/* Price */}
            <div className="bg-[#111827] rounded-2xl p-6 border border-[#1f2937] mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">19,99€</span>
                <span className="text-xl text-gray-400">/mois</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block bg-transparent border border-[#f59e0b] text-[#f59e0b] px-3 py-1 rounded-full text-sm font-medium">
                  Sans engagement
                </span>
                <span className="text-gray-500 text-sm">• Annulable à tout moment</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#6366f1]/20 rounded-lg p-2 flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#6366f1]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-[#111827] rounded-2xl p-8 border border-[#6366f1]/30 shadow-xl shadow-[#6366f1]/5">
              <h2 className="text-2xl font-bold mb-2">Souscrire à l&apos;abonnement</h2>
              <p className="text-gray-400 mb-6">
                Cliquez sur le bouton ci-dessous pour accéder au paiement sécurisé via Stripe.
              </p>

              <Button
                asChild
                className="w-full bg-[#6366f1] hover:bg-[#5558e3] text-white py-6 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <a href={STRIPE_PAYMENT_LINK} className="flex items-center justify-center gap-2">
                  Continuer vers le paiement
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-[#1f2937]">
                <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Paiement sécurisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>SSL 256-bit</span>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <svg className="h-8 opacity-60" viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#6772e5" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.4 10.4 0 0 1-4.56 1.03c-4.02 0-6.83-2.57-6.83-7.14 0-4.12 2.67-7.14 6.28-7.14 3.65 0 5.96 2.87 5.96 7.12 0 .37-.02.72-.04 1.21zm-4-5.47c-1.18 0-2.13.91-2.27 2.59h4.44c-.11-1.63-.95-2.59-2.17-2.59zM40.95 20.03V6.26h4.02l.23 1.52c.86-1.14 2.17-1.82 3.69-1.82 1.32 0 2.41.47 3.11 1.27.75.83 1.1 1.92 1.1 3.56v9.24h-4.19v-8.44c0-1.35-.52-2.02-1.57-2.02-.91 0-1.65.52-2.21 1.4v9.06h-4.18zM32.96 5.07c1.35 0 2.45-1.03 2.45-2.35 0-1.35-1.1-2.37-2.45-2.37-1.35 0-2.43 1.02-2.43 2.37 0 1.32 1.08 2.35 2.43 2.35zm-2.08 14.96V6.26h4.19v13.77h-4.19zM25.35 20.03V10.3h-1.92V6.62h1.92V5.39c0-1.89.54-3.18 1.53-4.05.92-.82 2.18-1.25 3.78-1.25.58 0 1.17.06 1.78.19v3.52c-.38-.12-.78-.18-1.22-.18-1.13 0-1.68.61-1.68 1.77v1.23h2.59v3.68h-2.59v9.73h-4.19zM14.17 20.03V6.26h4.02l.23 1.52c.86-1.14 2.17-1.82 3.69-1.82V10c-.45-.08-.82-.12-1.14-.12-1.05 0-1.87.41-2.61 1.27v8.88h-4.19zM6.5 16.24c0 .94.73 1.44 1.97 1.44 1 0 2.06-.32 2.96-.88v3.2c-1.12.68-2.59 1.03-4.11 1.03C4.37 21.03 2 19.21 2 16.45c0-3.07 2.54-4.22 5.35-4.81l1.96-.41c.63-.14.87-.42.87-.78 0-.56-.55-.88-1.6-.88-1.2 0-2.57.42-3.74 1.06V7.51c1.12-.54 2.76-.92 4.41-.92 3.16 0 5.21 1.47 5.21 4.37 0 2.32-1.33 3.65-4.21 4.25l-1.91.4c-.9.19-1.22.41-1.22.87 0 .44.37.76 1.38.76zm-4.5 3.79V6.26h4.02l.25 1.43c1.13-1.2 2.64-1.73 4.04-1.73 1.83 0 3.25.65 4.13 1.9.95-1.18 2.5-1.9 4.21-1.9 1.6 0 2.9.54 3.74 1.48.81.92 1.14 2.14 1.14 3.66v9.13h-4.18v-8.54c0-1.29-.5-1.92-1.42-1.92-.7 0-1.32.37-1.87 1.05v9.41h-4.18v-8.54c0-1.29-.5-1.92-1.42-1.92-.7 0-1.32.37-1.87 1.05v9.41H2z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* FAQ mini */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Des questions ? <Link href="/#faq" className="text-[#6366f1] hover:underline">Consultez notre FAQ</Link></p>
              <p className="mt-1">ou contactez-nous à <a href="mailto:contact-agence@cosmoweb.fr" className="text-[#6366f1] hover:underline">contact-agence@cosmoweb.fr</a></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
