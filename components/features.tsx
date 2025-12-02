"use client"

import { Globe, Palette, Zap, ShieldCheck, BarChart, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Globe,
    title: "Site Vitrine",
    description:
      "Présentez votre entreprise et vos services de manière professionnelle avec un design qui vous ressemble.",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "Portfolio",
    description: "Mettez en valeur vos réalisations et votre expertise avec un portfolio élégant et personnalisé.",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Zap,
    title: "E-commerce",
    description: "Vendez vos produits en ligne avec une boutique rapide, sécurisée et optimisée pour la conversion.",
    gradient: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité garantie",
    description: "Tous nos sites sont sécurisés avec SSL, sauvegardés régulièrement et protégés contre les menaces.",
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: BarChart,
    title: "SEO optimisé",
    description: "Soyez visible sur Google grâce à nos sites optimisés pour le référencement naturel.",
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Headphones,
    title: "Support dédié",
    description: "Un accompagnement personnalisé tout au long de votre projet et après la mise en ligne.",
    gradient: "from-rose-500 to-red-500",
    bgColor: "bg-rose-500/10",
  },
]

export function Features() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="services"
      className="py-24 px-4 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-background dark:from-blue-950/20 dark:via-purple-950/10 dark:to-background"
    >
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-on-scroll" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Des sites web qui font la différence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Nous créons des expériences digitales modernes et performantes, adaptées à vos besoins spécifiques.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? "animate-on-scroll-delay-1" : ""}`}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group ${feature.bgColor} hover:shadow-2xl transition-all duration-300 border-2 border-accent/20 hover:border-accent hover:-translate-y-2`}
            >
              <CardContent className="p-8 space-y-4">
                <div
                  className={`size-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  <feature.icon className="size-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 space-y-12">
          <div className={`text-center space-y-4 ${isVisible ? "animate-on-scroll-delay-2" : ""}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-balance">Exemples de nos réalisations</h3>
            <p className="text-lg text-muted-foreground">Des designs modernes adaptés à chaque secteur</p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? "animate-on-scroll-delay-3" : ""}`}
          >
            <a
              href="https://abonnement-cafe.justeatemps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/abonnement-cafe-justeatemps.png"
                  alt="Site d'abonnement café - Juste à Temps"
                  width={500}
                  height={400}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-card">
                <h4 className="font-semibold text-lg">Abonnement Café</h4>
                <p className="text-sm text-muted-foreground">Solution e-commerce sur-mesure</p>
              </div>
            </a>

            <div className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/modern-portfolio-website-design-for-photographer-w.jpg"
                  alt="Exemple de portfolio"
                  width={500}
                  height={400}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-card">
                <h4 className="font-semibold text-lg">Portfolio Créatif</h4>
                <p className="text-sm text-muted-foreground">Pour artistes et créateurs</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/professional-business-website-showcase-with-clean-.jpg"
                  alt="Exemple de site vitrine"
                  width={500}
                  height={400}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-card">
                <h4 className="font-semibold text-lg">Site Vitrine Pro</h4>
                <p className="text-sm text-muted-foreground">Pour entreprises et services</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/modern-ecommerce-online-store-interface-with-produ.jpg"
                  alt="Exemple de boutique en ligne"
                  width={500}
                  height={400}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-card">
                <h4 className="font-semibold text-lg">Boutique E-commerce</h4>
                <p className="text-sm text-muted-foreground">Pour vendre en ligne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
