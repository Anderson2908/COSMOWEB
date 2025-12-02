"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Crown, ArrowLeft, Infinity, Sparkles, Shield, Phone, Mail, Zap } from "lucide-react"
import Link from "next/link"
import { PackForm } from "@/components/pack-form"
import { useState, useEffect } from "react"

export default function PremiumPackPage() {
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      {/* Header with back button */}
      <div className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/#pricing">
            <Button variant="ghost" className="gap-2">
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
            <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full" />
            <div className="relative inline-flex items-center justify-center size-28 rounded-2xl bg-gradient-to-br from-accent via-soft-violet to-accent text-white shadow-2xl">
              <Crown className="size-14" />
            </div>
          </div>
          <div className="inline-block bg-gradient-to-r from-accent to-soft-violet text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            👑 Solution Premium
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-accent via-soft-violet to-accent bg-clip-text text-transparent">
            Pack Premium
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            La solution complète, flexible et évolutive pour votre réussite digitale
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-bold text-foreground">1250</span>
            <span className="text-3xl text-muted-foreground">€</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <Card className="text-center border-2 border-accent/30 bg-accent/5">
            <CardHeader>
              <Infinity className="size-8 mx-auto text-accent mb-2" />
              <CardTitle className="text-lg">Pages illimitées</CardTitle>
              <CardDescription>Aucune limitation</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-2 border-soft-violet/30 bg-soft-violet/5">
            <CardHeader>
              <Sparkles className="size-8 mx-auto text-soft-violet mb-2" />
              <CardTitle className="text-lg">Sur mesure</CardTitle>
              <CardDescription>100% personnalisé</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-2 border-soft-blue/30 bg-soft-blue/5">
            <CardHeader>
              <Zap className="size-8 mx-auto text-soft-blue mb-2" />
              <CardTitle className="text-lg">SEO avancé</CardTitle>
              <CardDescription>Optimisation poussée</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-2 border-soft-teal/30 bg-soft-teal/5">
            <CardHeader>
              <Shield className="size-8 mx-auto text-soft-teal mb-2" />
              <CardTitle className="text-lg">Suivi 3 mois</CardTitle>
              <CardDescription>Support premium</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Ideal For */}
        <Card className="mb-16 border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-transparent">
          <CardHeader>
            <CardTitle className="text-3xl">Idéal pour</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              Le Pack Premium est conçu pour les entreprises ambitieuses qui veulent un site web d'exception, sans
              compromis. C'est la solution idéale si vous avez besoin de nombreuses pages, de fonctionnalités avancées,
              ou d'intégrations spécifiques avec d'autres outils.
            </p>
            <p>
              Nombre de pages illimité, design 100% sur mesure, intégrations d'outils externes (CRM, paiement en ligne,
              réservation, etc.), et un accompagnement premium pendant 3 mois après la livraison.
            </p>
          </CardContent>
        </Card>

        {/* What's Included */}
        <Card className="mb-16 border-2 border-accent/30 bg-gradient-to-br from-accent/5 via-soft-violet/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-3xl">Ce qui est inclus</CardTitle>
            <CardDescription className="text-base">
              La solution la plus complète pour un site web professionnel et évolutif
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Check className="size-4 text-accent" />
                  </div>
                  Site sur mesure illimité
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Nombre de pages illimité selon vos besoins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Design 100% personnalisé et unique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Code propre et optimisé développé à la main</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Architecture évolutive et scalable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Animations et interactions avancées</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-soft-violet/20 flex items-center justify-center">
                    <Check className="size-4 text-soft-violet" />
                  </div>
                  Optimisation SEO avancée
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Audit SEO complet et stratégie de mots-clés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Optimisation technique poussée (Core Web Vitals)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Balisage schema.org pour rich snippets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Sitemap XML et configuration Google Search Console</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Analyse de la concurrence et recommandations</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-soft-blue/20 flex items-center justify-center">
                    <Check className="size-4 text-soft-blue" />
                  </div>
                  Fonctionnalités premium
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Formulaires avancés avec logique conditionnelle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Espace membre / client si nécessaire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Système de blog ou actualités</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Multilingue si besoin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Tableaux de bord personnalisés</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-soft-teal/20 flex items-center justify-center">
                    <Check className="size-4 text-soft-teal" />
                  </div>
                  Intégrations externes
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Connexion CRM (HubSpot, Salesforce, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Paiement en ligne (Stripe, PayPal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Système de réservation / prise de rendez-vous</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">API personnalisées et webhooks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Analytics avancé et tracking conversions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 border-2 border-accent/20 rounded-lg bg-accent/5">
              <div className="flex items-start gap-4">
                <Shield className="size-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-xl mb-2">Suivi technique premium - 3 mois inclus</h4>
                  <p className="text-muted-foreground mb-4">
                    Un accompagnement complet pendant 3 mois après la livraison pour vous assurer une tranquillité
                    totale.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-accent" />
                      <span>Support prioritaire par email et téléphone</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-accent" />
                      <span>Mises à jour de sécurité et corrections de bugs</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-accent" />
                      <span>Ajustements et modifications mineures incluses</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-accent" />
                      <span>Formation complète et documentation détaillée</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-accent" />
                      <span>Conseils stratégiques pour optimiser votre présence digitale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="mb-16 border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-3xl">Cas d'usage typiques</CardTitle>
            <CardDescription className="text-base">
              Voici quelques exemples de projets parfaitement adaptés au Pack Premium
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border-2 border-accent/20 rounded-lg bg-accent/5">
                <h4 className="font-semibold text-lg text-accent mb-3">Site corporate complet</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  10-20 pages incluant présentation entreprise, équipe, services détaillés, études de cas, blog,
                  carrières, contact
                </p>
                <p className="text-xs text-accent font-medium">Idéal pour PME en croissance</p>
              </div>

              <div className="p-6 border-2 border-soft-violet/20 rounded-lg bg-soft-violet/5">
                <h4 className="font-semibold text-lg text-soft-violet mb-3">Plateforme de services en ligne</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Espace membre, système de réservation/paiement, tableau de bord client, gestion de commandes
                </p>
                <p className="text-xs text-soft-violet font-medium">Idéal pour services B2C/B2B</p>
              </div>

              <div className="p-6 border-2 border-soft-blue/20 rounded-lg bg-soft-blue/5">
                <h4 className="font-semibold text-lg text-soft-blue mb-3">Site e-commerce sur mesure</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Catalogue produits, panier d'achat personnalisé, paiement sécurisé, gestion des commandes et stocks
                </p>
                <p className="text-xs text-soft-blue font-medium">Idéal pour boutiques en ligne</p>
              </div>

              <div className="p-6 border-2 border-soft-teal/20 rounded-lg bg-soft-teal/5">
                <h4 className="font-semibold text-lg text-soft-teal mb-3">Site vitrine multilingue</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Version en plusieurs langues, adaptation culturelle du contenu, SEO international
                </p>
                <p className="text-xs text-soft-teal font-medium">Idéal pour entreprises à l'international</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <Card className="mb-16 border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-3xl">Notre processus premium</CardTitle>
            <CardDescription className="text-base">
              Un accompagnement structuré et personnalisé sur 2 à 5 semaines
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                  <div className="flex-shrink-0 size-12 rounded-full bg-gradient-to-br from-accent via-soft-violet to-accent text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Why Premium */}
        <Card className="mb-16 border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-background">
          <CardHeader>
            <CardTitle className="text-3xl">Pourquoi investir dans le Pack Premium ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-accent">🏆 Sans compromis</h4>
                <p className="text-muted-foreground">
                  Aucune limitation. Votre site est conçu exactement comme vous le souhaitez, avec toutes les
                  fonctionnalités dont vous avez besoin.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-soft-violet">🚀 Évolutif</h4>
                <p className="text-muted-foreground">
                  Architecture pensée pour évoluer avec votre business. Ajout de nouvelles fonctionnalités facile dans
                  le futur.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-soft-blue">💎 Unique</h4>
                <p className="text-muted-foreground">
                  Design 100% personnalisé qui reflète parfaitement votre identité et vous démarque de la concurrence.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-soft-teal">🛡️ Sécurité</h4>
                <p className="text-muted-foreground">
                  Code professionnel avec les meilleures pratiques de sécurité et 3 mois de suivi pour une tranquillité
                  totale.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="space-y-8">
          <Card className="border-2 border-accent bg-gradient-to-br from-accent/15 via-soft-violet/10 to-accent/5">
            <CardContent className="p-8 text-center space-y-6">
              <Crown className="size-16 mx-auto text-accent" />
              <h2 className="text-3xl font-bold">Prêt pour une solution d'exception ?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discutons de votre projet et créons ensemble un site web qui dépassera vos attentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-gradient-to-r from-accent to-soft-violet hover:opacity-90"
                  onClick={() => setShowForm(true)}
                >
                  Commander le Pack Premium
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-accent text-accent bg-transparent"
                  asChild
                >
                  <a href="https://calendly.com/votre-lien" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 size-5" />
                    Prendre un RDV
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Ou contactez-nous pour un devis personnalisé adapté à vos besoins spécifiques
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="text-center space-y-4 text-muted-foreground">
            <p className="text-lg">Notre équipe est à votre écoute pour discuter de votre projet</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact@webmaster.fr"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="size-5" />
                contact@webmaster.fr
              </a>
              <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="size-5" />
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>

      <PackForm open={showForm} onOpenChange={setShowForm} packName="Pack Premium" />
    </div>
  )
}
