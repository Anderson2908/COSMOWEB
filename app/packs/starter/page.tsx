"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, ArrowLeft, Clock, Zap, Users, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { PackForm } from "@/components/pack-form"
import { useState, useEffect } from "react"

export default function StarterPackPage() {
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a14]">
      {/* Header with back button */}
      <div className="border-b border-[#1f2937] bg-[#0a0a14]/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/#pricing">
            <Button variant="ghost" className="gap-2 text-gray-300 hover:text-white hover:bg-[#1f2937]">
              <ArrowLeft className="size-4" />
              Retour aux packs
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center size-24 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#818cf8] text-white shadow-2xl shadow-[#6366f1]/20">
            <Sparkles className="size-12" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#a78bfa] bg-clip-text text-transparent">
            Pack Starter
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            Votre vitrine digitale, simple et efficace, prête en 72 heures
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-bold text-white">500</span>
            <span className="text-3xl text-gray-400">€</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-6">
            <Clock className="size-8 mx-auto text-[#6366f1] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">Livraison rapide</h3>
            <p className="text-gray-400">Sous 72 heures</p>
          </div>
          <div className="text-center bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-6">
            <Zap className="size-8 mx-auto text-[#818cf8] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">Design moderne</h3>
            <p className="text-gray-400">Responsive et attractif</p>
          </div>
          <div className="text-center bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-6">
            <Users className="size-8 mx-auto text-[#a78bfa] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">Support disponible</h3>
            <p className="text-gray-400">Via abonnement suivi</p>
          </div>
        </div>

        {/* Ideal For */}
        <div className="mb-16 bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Idéal pour</h2>
          <div className="text-lg text-gray-400 space-y-4">
            <p>
              Le Pack Starter est parfait pour les entrepreneurs, freelances et petites entreprises qui souhaitent
              établir rapidement leur présence en ligne avec une landing page professionnelle.
            </p>
            <p>
              Une seule page optimisée pour présenter votre activité, vos services ou produits, et convertir vos
              visiteurs en clients avec des call-to-action stratégiquement placés.
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16 bg-[#111827]/60 border border-[#6366f1]/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-2">Ce qui est inclus</h2>
          <p className="text-gray-400 mb-8">
            Tout ce dont vous avez besoin pour lancer votre présence en ligne
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#6366f1]" />
                </div>
                Design et développement
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">
                    Design responsive adapté à tous les écrans (mobile, tablette, desktop)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">
                    Interface moderne et attractive avec votre identité visuelle
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">
                    Navigation intuitive et expérience utilisateur optimisée
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#818cf8]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#818cf8]" />
                </div>
                Contenu et intégration
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Intégration de vos textes, images et logo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Optimisation des images pour un chargement rapide</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Structuration du contenu pour maximiser l'impact</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#a78bfa]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#a78bfa]" />
                </div>
                Fonctionnalités
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">
                    Formulaire de contact fonctionnel avec notifications email
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Boutons call-to-action stratégiquement placés</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Liens vers vos réseaux sociaux</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#c4b5fd]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#c4b5fd]" />
                </div>
                Mise en ligne et support
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">
                    Hébergement et nom de domaine (non inclus, nous vous guidons)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Mise en ligne complète et configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Formation rapide pour gérer votre site</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16 bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-2">Notre processus</h2>
          <p className="text-gray-400 mb-8">
            Un workflow simple et efficace pour une livraison rapide
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 size-12 rounded-full bg-[#6366f1] text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white mb-2">Briefing initial (Jour 1)</h4>
                <p className="text-gray-400">
                  Vous nous fournissez vos contenus (textes, images, logo) et vos préférences de design. Nous validons
                  ensemble la direction créative.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 size-12 rounded-full bg-[#6366f1] text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white mb-2">Création et développement (Jours 1-2)</h4>
                <p className="text-gray-400">
                  Notre équipe conçoit votre landing page avec un design moderne et responsive, intègre vos contenus
                  et configure les fonctionnalités.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 size-12 rounded-full bg-[#6366f1] text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white mb-2">Validation et ajustements (Jour 3)</h4>
                <p className="text-gray-400">
                  Vous recevez une prévisualisation, nous apportons les ajustements finaux selon vos retours, puis
                  nous mettons votre site en ligne.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-16 bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8">Pourquoi choisir le Pack Starter ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#6366f1]">⚡ Rapidité</h4>
              <p className="text-gray-400">
                Votre site est prêt en 72 heures maximum. Idéal pour les lancements urgents ou les événements à venir.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#818cf8]">💰 Prix accessible</h4>
              <p className="text-gray-400">
                Un investissement raisonnable pour établir votre présence digitale professionnelle sans vous ruiner.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#a78bfa]">✨ Simplicité</h4>
              <p className="text-gray-400">
                Pas de complexité inutile. Une page claire, efficace et concentrée sur votre message principal.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#c4b5fd]">🎯 Efficacité</h4>
              <p className="text-gray-400">
                Optimisée pour la conversion avec des call-to-action stratégiques qui transforment vos visiteurs en
                clients.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-8">
          <div className="bg-[#111827]/60 border border-[#6366f1]/50 rounded-2xl p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Prêt à lancer votre site en 72 heures ?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Commandez votre Pack Starter maintenant et bénéficiez d'un accompagnement personnalisé du début à la
              fin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-full"
                onClick={() => setShowForm(true)}
              >
                Commander le Pack Starter
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-[#6366f1] text-[#a5b4fc] bg-transparent hover:bg-[#6366f1]/10 rounded-full" asChild>
                <a href="https://calendly.com/contact-agence-cosmoweb/30min" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 size-5" />
                  Réserver un appel
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-4 text-gray-400">
            <p className="text-lg">Des questions ? Notre équipe est là pour vous aider !</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact-agence@cosmoweb.fr"
                className="flex items-center gap-2 hover:text-[#6366f1] transition-colors"
              >
                <Mail className="size-5" />
                contact-agence@cosmoweb.fr
              </a>
              <a href="tel:+33650770833" className="flex items-center gap-2 hover:text-[#6366f1] transition-colors">
                <Phone className="size-5" />
                06 50 77 08 33
              </a>
            </div>
          </div>
        </div>
      </div>

      <PackForm open={showForm} onOpenChange={setShowForm} packName="Pack Starter" />
    </div>
  )
}
