"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Shield, Zap, Headphones, Server, RefreshCw } from "lucide-react"
import Link from "next/link"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

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
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError("Veuillez entrer votre adresse email")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          customerEmail: email,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erreur serveur")
      }

      if (data.url) {
        // Rediriger vers Stripe Checkout
        window.location.href = data.url
      } else if (data.sessionId) {
        // Alternative: utiliser Stripe.js pour rediriger
        const stripe = await stripePromise
        await stripe?.redirectToCheckout({ sessionId: data.sessionId })
      } else {
        throw new Error("Erreur lors de la création de la session")
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur est survenue"
      setError(errorMessage)
      setLoading(false)
    }
  }

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

          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-[#111827] rounded-2xl p-8 border border-[#6366f1]/30 shadow-xl shadow-[#6366f1]/5">
              <h2 className="text-2xl font-bold mb-2">Souscrire à l&apos;abonnement</h2>
              <p className="text-gray-400 mb-6">
                Entrez votre email pour accéder au paiement sécurisé
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Adresse email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0a14] border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#6366f1] focus:ring-[#6366f1]"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#6366f1] hover:bg-[#5558e3] text-white py-6 rounded-full text-lg font-semibold transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Redirection en cours...
                    </span>
                  ) : (
                    "Continuer vers le paiement"
                  )}
                </Button>
              </form>

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
                  <img 
                    src="https://stripe.com/img/v3/home/twitter.png" 
                    alt="Powered by Stripe" 
                    className="h-6 opacity-50"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
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

