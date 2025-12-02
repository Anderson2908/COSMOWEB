"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, ArrowLeft, Clock, Rocket, Shield, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { PackForm } from "@/components/pack-form"
import { useState, useEffect } from "react"

export default function ConfortPackPage() {
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
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
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
            <div className="relative inline-flex items-center justify-center size-24 rounded-2xl bg-gradient-to-br from-soft-violet to-soft-blue text-white shadow-2xl">
              <Zap className="size-12" />
            </div>
          </div>
          <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
            ⭐ Le plus populaire
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-soft-violet to-soft-blue bg-clip-text text-transparent">
            Pack Confort
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Votre présence web complète et optimisée pour réussir
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-bold text-foreground">850</span>
            <span className="text-3xl text-muted-foreground">€</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center border-2 border-soft-violet/30">
            <CardHeader>
              <Clock className="size-8 mx-auto text-soft-violet mb-2" />
              <CardTitle className="text-lg">Livraison optimale</CardTitle>
              <CardDescription>7 à 10 jours</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-2 border-soft-blue/30">
            <CardHeader>
              <Rocket className="size-8 mx-auto text-soft-blue mb-2" />
              <CardTitle className="text-lg">SEO inclus</CardTitle>
              <CardDescription>Optimisation pour Google</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-2 border-accent/30">
            <CardHeader>
              <Shield className="size-8 mx-auto text-accent mb-2" />
              <CardTitle className="text-lg">Suivi 1 mois</CardTitle>
              <CardDescription>Support technique inclus</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Ideal For */}
        <Card className="mb-16 border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-3xl">Idéal pour</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              Le Pack Confort est la solution parfaite pour les PME, commerces locaux et professionnels qui veulent un
              site complet avec plusieurs pages pour présenter leurs services, leur équipe et faciliter le contact avec
              leurs clients.
            </p>
            <p>
              Jusqu'à 3 pages stratégiques (exemple : Accueil, Services, Contact) avec un design personnalisé et une
              optimisation SEO pour être bien référencé sur Google.
            </p>
          </CardContent>
        </Card>

        {/* What's Included */}
        <Card className="mb-16 border-2 border-soft-violet/30 bg-gradient-to-br from-soft-violet/5 to-soft-blue/5">
          <CardHeader>
            <CardTitle className="text-3xl">Ce qui est inclus</CardTitle>
            <CardDescription className="text-base">
              Une solution complète pour établir une présence web professionnelle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-soft-violet/20 flex items-center justify-center">
                    <Check className="size-4 text-soft-violet" />
                  </div>
                  Design personnalisé
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Design responsive 100% adapté à votre identité visuelle
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Jusqu'à 3 pages stratégiques pour votre activité</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Navigation intuitive et menu professionnel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Animations modernes et interactions fluides</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-soft-blue/20 flex items-center justify-center">
                    <Check className="size-4 text-soft-blue" />
                  </div>
                  Optimisation SEO
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Recherche et intégration de mots-clés pertinents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Optimisation des balises meta et titres</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Structure optimisée pour les moteurs de recherche</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Vitesse de chargement optimisée</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Check className="size-4 text-accent" />
                  </div>
                  Fonctionnalités avancées
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Formulaires de contact avancés avec validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Intégration Google Maps pour votre localisation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Galerie d'images professionnelle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Call-to-action stratégiques sur chaque page</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-soft-teal/20 flex items-center justify-center">
                    <Check className="size-4 text-soft-teal" />
                  </div>
                  Support et suivi
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">1 mois de suivi technique après livraison</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Formation complète pour gérer votre site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Corrections et ajustements inclus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Support par email et téléphone</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example Pages */}
        <Card className="mb-16 border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-3xl">Exemples de structures possibles</CardTitle>
            <CardDescription className="text-base">
              Voici quelques configurations typiques pour un Pack Confort 3 pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 border-2 border-soft-violet/20 rounded-lg bg-soft-violet/5">
                <h4 className="font-semibold text-xl text-soft-violet">Structure Entreprise</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-violet" />
                    <span>Page 1: Accueil (présentation entreprise + services)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-violet" />
                    <span>Page 2: À propos (équipe + valeurs + histoire)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-violet" />
                    <span>Page 3: Contact (formulaire + localisation)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 p-6 border-2 border-soft-blue/20 rounded-lg bg-soft-blue/5">
                <h4 className="font-semibold text-xl text-soft-blue">Structure Service</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-blue" />
                    <span>Page 1: Accueil (offre principale + avantages)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-blue" />
                    <span>Page 2: Services (détail des prestations)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-blue" />
                    <span>Page 3: Contact + Devis</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 p-6 border-2 border-accent/20 rounded-lg bg-accent/5">
                <h4 className="font-semibold text-xl text-accent">Structure Commerce</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-accent" />
                    <span>Page 1: Accueil (présentation magasin)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-accent" />
                    <span>Page 2: Produits / Services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-accent" />
                    <span>Page 3: Informations pratiques + Contact</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 p-6 border-2 border-soft-teal/20 rounded-lg bg-soft-teal/5">
                <h4 className="font-semibold text-xl text-soft-teal">Structure Freelance</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-teal" />
                    <span>Page 1: Accueil (présentation + portfolio)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-teal" />
                    <span>Page 2: Prestations (services détaillés)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-teal" />
                    <span>Page 3: Contact + Disponibilités</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <Card className="mb-16 border-2 border-soft-violet/20">
          <CardHeader>
            <CardTitle className="text-3xl">Notre processus</CardTitle>
            <CardDescription className="text-base">
              Un accompagnement structuré pour garantir votre satisfaction
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                  desc: "Développement des 3 pages avec intégration de vos contenus, optimisation SEO et configuration des fonctionnalités.",
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
                  <div className="flex-shrink-0 size-12 rounded-full bg-gradient-to-br from-soft-violet to-soft-blue text-white flex items-center justify-center font-bold text-lg">
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

        {/* Why Choose */}
        <Card className="mb-16 border-2 border-soft-blue/30 bg-gradient-to-br from-soft-blue/5 to-background">
          <CardHeader>
            <CardTitle className="text-3xl">Pourquoi le Pack Confort est le plus populaire ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-soft-violet">🎯 Équilibre parfait</h4>
                <p className="text-muted-foreground">
                  Le meilleur rapport qualité-prix avec des fonctionnalités complètes sans surcoût inutile.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-soft-blue">🚀 SEO inclus</h4>
                <p className="text-muted-foreground">
                  Optimisation SEO de base pour être visible sur Google dès le lancement de votre site.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-accent">💼 Professionnel</h4>
                <p className="text-muted-foreground">
                  Un site multi-pages qui inspire confiance et présente votre activité de manière complète.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-soft-teal">🛡️ Suivi inclus</h4>
                <p className="text-muted-foreground">
                  1 mois de support technique pour vous accompagner après le lancement et faire les ajustements
                  nécessaires.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="space-y-8">
          <Card className="border-2 border-accent bg-gradient-to-br from-accent/10 to-accent/5">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-3xl font-bold">Prêt à créer votre présence web complète ?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Commandez votre Pack Confort et bénéficiez d'un site professionnel optimisé pour Google avec 1 mois de
                support inclus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-accent hover:bg-accent/90"
                  onClick={() => setShowForm(true)}
                >
                  Commander le Pack Confort
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <a href="https://calendly.com/votre-lien" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 size-5" />
                    Prendre un RDV
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="text-center space-y-4 text-muted-foreground">
            <p className="text-lg">Des questions sur le Pack Confort ?</p>
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

      <PackForm open={showForm} onOpenChange={setShowForm} packName="Pack Confort" />
    </div>
  )
}
