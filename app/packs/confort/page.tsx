"use client"

import { Button } from "@/components/ui/button"
import { Check, Zap, ArrowLeft, Clock, Rocket, Shield, Phone, Mail, Headphones, Server, RefreshCw, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PackForm } from "@/components/pack-form"
import { useState, useEffect } from "react"

// Lien de paiement Stripe pour l'abonnement
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_bJe4gB3xdg4h3cSfOx08g00"

export default function ConfortPackPage() {
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
          <div className="relative">
            <div className="absolute inset-0 bg-[#6366f1]/20 blur-3xl rounded-full" />
            <div className="relative inline-flex items-center justify-center size-24 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#818cf8] text-white shadow-2xl shadow-[#6366f1]/30">
              <Zap className="size-12" />
            </div>
          </div>
          <div className="inline-block bg-[#6366f1] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
            ⭐ Le plus populaire
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#a78bfa] bg-clip-text text-transparent">
            Pack Confort
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            Votre présence web complète et optimisée pour réussir
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-bold text-white">850</span>
            <span className="text-3xl text-gray-400">€</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-6">
            <Clock className="size-8 mx-auto text-[#6366f1] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">Livraison optimale</h3>
            <p className="text-gray-400">7 à 10 jours</p>
          </div>
          <div className="text-center bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-6">
            <Rocket className="size-8 mx-auto text-[#818cf8] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">SEO inclus</h3>
            <p className="text-gray-400">Optimisation pour Google</p>
          </div>
          <div className="text-center bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-6">
            <Shield className="size-8 mx-auto text-[#a78bfa] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">Suivi 1 mois</h3>
            <p className="text-gray-400">Support technique inclus</p>
          </div>
        </div>

        {/* Ideal For */}
        <div className="mb-16 bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Idéal pour</h2>
          <div className="text-lg text-gray-400 space-y-4">
            <p>
              Le Pack Confort est la solution parfaite pour les PME, commerces locaux et professionnels qui veulent un
              site complet avec plusieurs pages pour présenter leurs services, leur équipe et faciliter le contact avec
              leurs clients.
            </p>
            <p>
              Jusqu'à 5 pages stratégiques avec un design personnalisé et une
              optimisation SEO pour être bien référencé sur Google.
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16 bg-[#111827]/60 border border-[#6366f1]/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-2">Ce qui est inclus</h2>
          <p className="text-gray-400 mb-8">
            Une solution complète pour établir une présence web professionnelle
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#6366f1]" />
                </div>
                Design personnalisé
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">
                    Design responsive 100% adapté à votre identité visuelle
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Jusqu'à 5 pages stratégiques pour votre activité</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Navigation intuitive et menu professionnel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Animations modernes et interactions fluides</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#818cf8]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#818cf8]" />
                </div>
                Optimisation SEO
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Recherche et intégration de mots-clés pertinents</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Optimisation des balises meta et titres</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Structure optimisée pour les moteurs de recherche</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Vitesse de chargement optimisée</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#a78bfa]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#a78bfa]" />
                </div>
                Fonctionnalités avancées
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Formulaires de contact avancés avec validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Intégration Google Maps pour votre localisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Galerie d'images professionnelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Call-to-action stratégiques sur chaque page</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#c4b5fd]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#c4b5fd]" />
                </div>
                Support et suivi
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">1 mois de suivi technique après livraison</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Formation complète pour gérer votre site</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Corrections et ajustements inclus</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Support par email et téléphone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16 bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-2">Notre processus</h2>
          <p className="text-gray-400 mb-8">
            Un accompagnement structuré pour garantir votre satisfaction
          </p>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Briefing et stratégie (Jours 1-2)",
                desc: "Entretien approfondi pour comprendre vos besoins, votre cible et vos objectifs. Définition de la structure et de l'arborescence du site.",
              },
              {
                step: 2,
                title: "Design et maquettage (Jours 3-4)",
                desc: "Création du design personnalisé avec votre identité visuelle. Validation des maquettes avant développement.",
              },
              {
                step: 3,
                title: "Développement (Jours 5-7)",
                desc: "Développement des pages avec intégration de vos contenus, optimisation SEO et configuration des fonctionnalités.",
              },
              {
                step: 4,
                title: "Tests et ajustements (Jours 8-9)",
                desc: "Tests complets sur tous les appareils, corrections et optimisations selon vos retours.",
              },
              {
                step: 5,
                title: "Mise en ligne et formation (Jour 10)",
                desc: "Mise en ligne de votre site et formation personnalisée pour que vous puissiez le gérer en autonomie.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 size-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#818cf8] text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <div className="mb-16 bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8">Pourquoi le Pack Confort est le plus populaire ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#6366f1]">🎯 Équilibre parfait</h4>
              <p className="text-gray-400">
                Le meilleur rapport qualité-prix avec des fonctionnalités complètes sans surcoût inutile.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#818cf8]">🚀 SEO inclus</h4>
              <p className="text-gray-400">
                Optimisation SEO de base pour être visible sur Google dès le lancement de votre site.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#a78bfa]">💼 Professionnel</h4>
              <p className="text-gray-400">
                Un site multi-pages qui inspire confiance et présente votre activité de manière complète.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#c4b5fd]">🛡️ Suivi inclus</h4>
              <p className="text-gray-400">
                1 mois de support technique pour vous accompagner après le lancement et faire les ajustements
                nécessaires.
              </p>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="mb-16 bg-gradient-to-br from-[#111827] to-[#0f172a] border border-[#f59e0b]/30 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f59e0b]/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <div className="inline-block bg-[#f59e0b]/20 text-[#f59e0b] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  💎 Option recommandée
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Maintenance & Sérénité</h2>
                <p className="text-gray-400 max-w-xl">
                  Assurez la pérennité de votre site après la période de suivi incluse. On s'occupe de tout, vous vous concentrez sur votre activité.
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="flex items-baseline gap-1 justify-center md:justify-end">
                  <span className="text-4xl font-bold text-white">19,99€</span>
                  <span className="text-xl text-gray-400">/mois</span>
                </div>
                <span className="inline-block bg-transparent border border-[#f59e0b] text-[#f59e0b] px-3 py-1 rounded-full text-sm font-medium mt-2">
                  Sans engagement
                </span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-[#f59e0b]/20 rounded-lg p-2 flex-shrink-0">
                  <Headphones className="size-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Support réactif</h4>
                  <p className="text-xs text-gray-400">Réponse sous 24h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#f59e0b]/20 rounded-lg p-2 flex-shrink-0">
                  <Zap className="size-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Corrections incluses</h4>
                  <p className="text-xs text-gray-400">Bugs et ajustements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#f59e0b]/20 rounded-lg p-2 flex-shrink-0">
                  <Server className="size-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Hébergement sécurisé</h4>
                  <p className="text-xs text-gray-400">Serveurs performants</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#f59e0b]/20 rounded-lg p-2 flex-shrink-0">
                  <RefreshCw className="size-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Sauvegardes auto</h4>
                  <p className="text-xs text-gray-400">Données protégées</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold rounded-full px-8"
              >
                <a href={STRIPE_PAYMENT_LINK} className="flex items-center gap-2">
                  Souscrire à l'abonnement
                  <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#f59e0b]/50 text-[#f59e0b] bg-transparent hover:bg-[#f59e0b]/10 rounded-full px-8"
              >
                <Link href="/subscribe">
                  En savoir plus
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-8">
          <div className="bg-[#111827]/60 border border-[#6366f1]/50 rounded-2xl p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Prêt à créer votre présence web complète ?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Commandez votre Pack Confort et bénéficiez d'un site professionnel optimisé pour Google avec 1 mois de
              support inclus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-full"
                onClick={() => setShowForm(true)}
              >
                Commander le Pack Confort
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
            <p className="text-lg">Des questions sur le Pack Confort ?</p>
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

      <PackForm open={showForm} onOpenChange={setShowForm} packName="Pack Confort" />
    </div>
  )
}
