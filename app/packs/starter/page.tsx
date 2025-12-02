"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
          <div className="inline-flex items-center justify-center size-24 rounded-2xl bg-gradient-to-br from-soft-blue to-soft-teal text-white shadow-2xl">
            <Sparkles className="size-12" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-soft-blue to-soft-teal bg-clip-text text-transparent">
            Pack Starter
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Votre vitrine digitale, simple et efficace, prête en 72 heures
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-bold text-foreground">500</span>
            <span className="text-3xl text-muted-foreground">€</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center border-2 border-soft-blue/30">
            <CardHeader>
              <Clock className="size-8 mx-auto text-soft-blue mb-2" />
              <CardTitle className="text-lg">Livraison rapide</CardTitle>
              <CardDescription>Sous 72 heures</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-2 border-soft-teal/30">
            <CardHeader>
              <Zap className="size-8 mx-auto text-soft-teal mb-2" />
              <CardTitle className="text-lg">Design moderne</CardTitle>
              <CardDescription>Responsive et attractif</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-2 border-accent/30">
            <CardHeader>
              <Users className="size-8 mx-auto text-accent mb-2" />
              <CardTitle className="text-lg">Support inclus</CardTitle>
              <CardDescription>Accompagnement personnalisé</CardDescription>
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
              Le Pack Starter est parfait pour les entrepreneurs, freelances et petites entreprises qui souhaitent
              établir rapidement leur présence en ligne avec une landing page professionnelle.
            </p>
            <p>
              Une seule page optimisée pour présenter votre activité, vos services ou produits, et convertir vos
              visiteurs en clients avec des call-to-action stratégiquement placés.
            </p>
          </CardContent>
        </Card>

        {/* What's Included */}
        <Card className="mb-16 border-2 border-soft-blue/30 bg-gradient-to-br from-soft-blue/5 to-soft-teal/5">
          <CardHeader>
            <CardTitle className="text-3xl">Ce qui est inclus</CardTitle>
            <CardDescription className="text-base">
              Tout ce dont vous avez besoin pour lancer votre présence en ligne
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-soft-blue/20 flex items-center justify-center">
                    <Check className="size-4 text-soft-blue" />
                  </div>
                  Design et développement
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Design responsive adapté à tous les écrans (mobile, tablette, desktop)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Interface moderne et attractive avec votre identité visuelle
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Navigation intuitive et expérience utilisateur optimisée
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-soft-teal/20 flex items-center justify-center">
                    <Check className="size-4 text-soft-teal" />
                  </div>
                  Contenu et intégration
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Intégration de vos textes, images et logo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Optimisation des images pour un chargement rapide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Structuration du contenu pour maximiser l'impact</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Check className="size-4 text-accent" />
                  </div>
                  Fonctionnalités
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Formulaire de contact fonctionnel avec notifications email
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Boutons call-to-action stratégiquement placés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Liens vers vos réseaux sociaux</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-soft-violet/20 flex items-center justify-center">
                    <Check className="size-4 text-soft-violet" />
                  </div>
                  Mise en ligne et support
                </h3>
                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Hébergement et nom de domaine (non inclus, nous vous guidons)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Mise en ligne complète et configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-soft-violet mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Formation rapide pour gérer votre site</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <Card className="mb-16 border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-3xl">Notre processus</CardTitle>
            <CardDescription className="text-base">
              Un workflow simple et efficace pour une livraison rapide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Briefing initial (Jour 1)</h4>
                  <p className="text-muted-foreground">
                    Vous nous fournissez vos contenus (textes, images, logo) et vos préférences de design. Nous validons
                    ensemble la direction créative.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Création et développement (Jours 1-2)</h4>
                  <p className="text-muted-foreground">
                    Notre équipe conçoit votre landing page avec un design moderne et responsive, intègre vos contenus
                    et configure les fonctionnalités.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Validation et ajustements (Jour 3)</h4>
                  <p className="text-muted-foreground">
                    Vous recevez une prévisualisation, nous apportons les ajustements finaux selon vos retours, puis
                    nous mettons votre site en ligne.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advantages */}
        <Card className="mb-16 border-2 border-soft-blue/30 bg-gradient-to-br from-soft-blue/5 to-background">
          <CardHeader>
            <CardTitle className="text-3xl">Pourquoi choisir le Pack Starter ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-soft-blue">⚡ Rapidité</h4>
                <p className="text-muted-foreground">
                  Votre site est prêt en 72 heures maximum. Idéal pour les lancements urgents ou les événements à venir.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-soft-teal">💰 Prix accessible</h4>
                <p className="text-muted-foreground">
                  Un investissement raisonnable pour établir votre présence digitale professionnelle sans vous ruiner.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-accent">✨ Simplicité</h4>
                <p className="text-muted-foreground">
                  Pas de complexité inutile. Une page claire, efficace et concentrée sur votre message principal.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg text-soft-violet">🎯 Efficacité</h4>
                <p className="text-muted-foreground">
                  Optimisée pour la conversion avec des call-to-action stratégiques qui transforment vos visiteurs en
                  clients.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="space-y-8">
          <Card className="border-2 border-accent bg-gradient-to-br from-accent/10 to-accent/5">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-3xl font-bold">Prêt à lancer votre site en 72 heures ?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Commandez votre Pack Starter maintenant et bénéficiez d'un accompagnement personnalisé du début à la
                fin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-accent hover:bg-accent/90"
                  onClick={() => setShowForm(true)}
                >
                  Commander le Pack Starter
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
            <p className="text-lg">Des questions ? Notre équipe est là pour vous aider !</p>
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

      <PackForm open={showForm} onOpenChange={setShowForm} packName="Pack Starter" />
    </div>
  )
}
