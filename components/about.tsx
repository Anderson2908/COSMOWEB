"use client"

import { Award, Target, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div ref={ref} className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-on-scroll" : ""}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              À propos de{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                WebMaster
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full" />
          </div>

          {/* Story Content */}
          <div className={`prose prose-lg max-w-none ${isVisible ? "animate-on-scroll-delay-1" : ""}`}>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                Chez <span className="font-semibold text-violet-600">WebMaster</span>, nous croyons qu'un site internet
                n'est pas juste une vitrine, mais le cœur de votre présence digitale. Notre mission ? Transformer vos
                idées en expériences web sur mesure, modernes et performantes, parfaitement adaptées aux besoins de
                votre PME.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-foreground">
                Fort d'une expérience solide dans le développement web pour des entreprises générant plus de{" "}
                <span className="font-semibold text-blue-600">12 millions d'euros de chiffre d'affaires par an</span>,
                j'ai pu comprendre ce que signifiait vraiment allier performance, design et efficacité pour atteindre
                des objectifs concrets. Cette expertise nous permet aujourd'hui de créer des sites qui ne se contentent
                pas d'être beaux, mais qui apportent une réelle valeur à nos clients : plus de visibilité, plus de
                conversions et une image professionnelle renforcée.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-foreground">
                Nous accompagnons les PME et entrepreneurs à chaque étape : de la conception à la mise en ligne, avec un
                suivi personnalisé et des solutions adaptées à vos besoins spécifiques. Chez nous, chaque projet est
                unique et chaque site est pensé pour vous aider à vous démarquer dans un environnement digital en
                constante évolution.
              </p>

              <p className="text-xl leading-relaxed font-semibold text-center text-violet-600">
                Votre succès est notre priorité, et notre passion, c'est de le rendre visible sur le web.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className={`grid md:grid-cols-3 gap-6 mt-12 ${isVisible ? "animate-on-scroll-delay-2" : ""}`}>
            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-violet-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Performance</h3>
              <p className="text-sm text-muted-foreground">
                Des sites rapides et optimisés pour convertir vos visiteurs en clients
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Une expérience éprouvée au service de votre croissance digitale
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Accompagnement</h3>
              <p className="text-sm text-muted-foreground">Un suivi personnalisé à chaque étape de votre projet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
