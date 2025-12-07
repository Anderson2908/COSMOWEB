"use client"

import { Button } from "@/components/ui/button"
import { Check, Crown, ArrowLeft, Infinity, Sparkles, Shield, Phone, Mail, Zap, Headphones, Server, RefreshCw, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PackForm } from "@/components/pack-form"
import { useState, useEffect } from "react"

// Lien de paiement Stripe pour l'abonnement
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_bJe4gB3xdg4h3cSfOx08g00"

export default function PremiumPackPage() {
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
            <div className="absolute inset-0 bg-[#6366f1]/30 blur-3xl rounded-full" />
            <div className="relative inline-flex items-center justify-center size-28 rounded-2xl bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#a78bfa] text-white shadow-2xl shadow-[#6366f1]/30">
              <Crown className="size-14" />
            </div>
          </div>
          <div className="inline-block bg-gradient-to-r from-[#6366f1] to-[#818cf8] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            👑 Solution Premium
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#a78bfa] via-[#c4b5fd] to-[#a78bfa] bg-clip-text text-transparent">
            Pack Premium
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            La solution complète, flexible et évolutive pour votre réussite digitale
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-bold text-white">1250</span>
            <span className="text-3xl text-gray-400">€</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <div className="text-center bg-[#111827]/60 border border-[#6366f1]/30 rounded-2xl p-6">
            <Infinity className="size-8 mx-auto text-[#6366f1] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">Pages illimitées</h3>
            <p className="text-gray-400 text-sm">Aucune limitation</p>
          </div>
          <div className="text-center bg-[#111827]/60 border border-[#818cf8]/30 rounded-2xl p-6">
            <Sparkles className="size-8 mx-auto text-[#818cf8] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">Sur mesure</h3>
            <p className="text-gray-400 text-sm">100% personnalisé</p>
          </div>
          <div className="text-center bg-[#111827]/60 border border-[#a78bfa]/30 rounded-2xl p-6">
            <Zap className="size-8 mx-auto text-[#a78bfa] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">SEO avancé</h3>
            <p className="text-gray-400 text-sm">Optimisation poussée</p>
          </div>
          <div className="text-center bg-[#111827]/60 border border-[#c4b5fd]/30 rounded-2xl p-6">
            <Shield className="size-8 mx-auto text-[#c4b5fd] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-1">Suivi 3 mois</h3>
            <p className="text-gray-400 text-sm">Support premium</p>
          </div>
        </div>

        {/* Ideal For */}
        <div className="mb-16 bg-[#111827]/60 border border-[#6366f1]/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Idéal pour</h2>
          <div className="text-lg text-gray-400 space-y-4">
            <p>
              Le Pack Premium est conçu pour les entreprises ambitieuses qui veulent un site web d'exception, sans
              compromis. C'est la solution idéale si vous avez besoin de nombreuses pages, de fonctionnalités avancées,
              ou d'intégrations spécifiques avec d'autres outils.
            </p>
            <p>
              Nombre de pages illimité, design 100% sur mesure, intégrations d'outils externes (CRM, paiement en ligne,
              réservation, etc.), et un accompagnement premium pendant 3 mois après la livraison.
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16 bg-[#111827]/60 border border-[#6366f1]/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-2">Ce qui est inclus</h2>
          <p className="text-gray-400 mb-8">
            La solution la plus complète pour un site web professionnel et évolutif
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#6366f1]" />
                </div>
                Site sur mesure illimité
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Nombre de pages illimité selon vos besoins</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Design 100% personnalisé et unique</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Code propre et optimisé développé à la main</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Architecture évolutive et scalable</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Animations et interactions avancées</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#818cf8]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#818cf8]" />
                </div>
                Optimisation SEO avancée
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Audit SEO complet et stratégie de mots-clés</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Optimisation technique poussée (Core Web Vitals)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Balisage schema.org pour rich snippets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Sitemap XML et configuration Google Search Console</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#818cf8] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Analyse de la concurrence et recommandations</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#a78bfa]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#a78bfa]" />
                </div>
                Fonctionnalités premium
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Formulaires avancés avec logique conditionnelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Espace membre / client si nécessaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Système de blog ou actualités</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Multilingue si besoin</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#a78bfa] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Tableaux de bord personnalisés</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#c4b5fd]/20 flex items-center justify-center">
                  <Check className="size-4 text-[#c4b5fd]" />
                </div>
                Intégrations externes
              </h3>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Connexion CRM (HubSpot, Salesforce, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Paiement en ligne (Stripe, PayPal)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Système de réservation / prise de rendez-vous</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">API personnalisées et webhooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#c4b5fd] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Analytics avancé et tracking conversions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 border border-[#6366f1]/30 rounded-xl bg-[#6366f1]/5">
            <div className="flex items-start gap-4">
              <Shield className="size-8 text-[#6366f1] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-xl text-white mb-2">Suivi technique premium - 3 mois inclus</h4>
                <p className="text-gray-400 mb-4">
                  Un accompagnement complet pendant 3 mois après la livraison pour vous assurer une tranquillité
                  totale.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="size-4 text-[#6366f1]" />
                    <span>Support prioritaire par email et téléphone</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="size-4 text-[#6366f1]" />
                    <span>Mises à jour de sécurité et corrections de bugs</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="size-4 text-[#6366f1]" />
                    <span>Ajustements et modifications mineures incluses</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="size-4 text-[#6366f1]" />
                    <span>Formation complète et documentation détaillée</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="size-4 text-[#6366f1]" />
                    <span>Conseils stratégiques pour optimiser votre présence digitale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16 bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-2">Notre processus premium</h2>
          <p className="text-gray-400 mb-8">
            Un accompagnement structuré et personnalisé sur 2 à 5 semaines
          </p>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Audit et stratégie (Semaine 1)",
                desc: "Analyse approfondie de vos besoins, de votre marché et de votre concurrence. Définition de la stratégie digitale, de l'architecture du site et des fonctionnalités.",
              },
              {
                step: 2,
                title: "Design et UX (Semaine 1-2)",
                desc: "Création de maquettes haute fidélité pour toutes les pages clés. Définition de l'expérience utilisateur et des parcours de conversion. Validation itérative avec vous.",
              },
              {
                step: 3,
                title: "Développement frontend (Semaine 2-3)",
                desc: "Développement de toutes les pages avec code propre et optimisé. Intégration des contenus, animations et interactions. Tests responsive sur tous les appareils.",
              },
              {
                step: 4,
                title: "Développement backend & intégrations (Semaine 3-4)",
                desc: "Configuration des fonctionnalités avancées, connexion avec les outils externes (CRM, paiement, etc.), mise en place de l'espace membre si nécessaire.",
              },
              {
                step: 5,
                title: "SEO et optimisations (Semaine 4)",
                desc: "Optimisation SEO avancée, amélioration des performances, configuration des analytics, tests de sécurité.",
              },
              {
                step: 6,
                title: "Tests et recette (Semaine 4-5)",
                desc: "Tests complets de toutes les fonctionnalités, corrections et ajustements finaux selon vos retours.",
              },
              {
                step: 7,
                title: "Mise en ligne et formation (Semaine 5)",
                desc: "Déploiement en production, formation complète de votre équipe, documentation détaillée, et début du suivi de 3 mois.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 size-12 rounded-full bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#a78bfa] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#6366f1]/20">
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

        {/* Why Premium */}
        <div className="mb-16 bg-[#111827]/60 border border-[#1f2937] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8">Pourquoi investir dans le Pack Premium ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#6366f1]">🏆 Sans compromis</h4>
              <p className="text-gray-400">
                Aucune limitation. Votre site est conçu exactement comme vous le souhaitez, avec toutes les
                fonctionnalités dont vous avez besoin.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#818cf8]">🚀 Évolutif</h4>
              <p className="text-gray-400">
                Architecture pensée pour évoluer avec votre business. Ajout de nouvelles fonctionnalités facile dans
                le futur.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#a78bfa]">💎 Unique</h4>
              <p className="text-gray-400">
                Design 100% personnalisé qui reflète parfaitement votre identité et vous démarque de la concurrence.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-[#c4b5fd]">🛡️ Sécurité</h4>
              <p className="text-gray-400">
                Code professionnel avec les meilleures pratiques de sécurité et 3 mois de suivi pour une tranquillité
                totale.
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
                  Prolongez la tranquillité après vos 3 mois de suivi inclus. On s'occupe de tout, vous vous concentrez sur votre activité.
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
            <Crown className="size-16 mx-auto text-[#6366f1]" />
            <h2 className="text-3xl font-bold text-white">Prêt pour une solution d'exception ?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discutons de votre projet et créons ensemble un site web qui dépassera vos attentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-[#6366f1] to-[#818cf8] hover:opacity-90 text-white rounded-full"
                onClick={() => setShowForm(true)}
              >
                Commander le Pack Premium
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-[#6366f1] text-[#a5b4fc] bg-transparent hover:bg-[#6366f1]/10 rounded-full"
                asChild
              >
                <a href="https://calendly.com/contact-agence-cosmoweb/30min" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 size-5" />
                  Réserver un appel
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Ou contactez-nous pour un devis personnalisé adapté à vos besoins spécifiques
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-4 text-gray-400">
            <p className="text-lg">Notre équipe est à votre écoute pour discuter de votre projet</p>
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

      <PackForm open={showForm} onOpenChange={setShowForm} packName="Pack Premium" />
    </div>
  )
}
