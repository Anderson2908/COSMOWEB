"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Photographe indépendante",
    content:
      "Grâce à mon nouveau portfolio, j'ai doublé mes demandes de devis en 3 mois. Le design est exactement ce que je voulais !",
    rating: 5,
    avatar: "professional female photographer with camera",
  },
  {
    name: "Thomas Martin",
    role: "Gérant de restaurant",
    content:
      "Notre site vitrine nous permet enfin de présenter notre carte et de prendre des réservations en ligne. Simple et efficace.",
    rating: 5,
    avatar: "professional male restaurant owner smiling",
  },
  {
    name: "Sophie Bernard",
    role: "Créatrice de bijoux",
    content:
      "Ma boutique en ligne est magnifique et facile à utiliser. Les clients adorent et mes ventes ont explosé !",
    rating: 5,
    avatar: "professional female jewelry designer with elegant style",
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="testimonials" className="py-24 px-4">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-on-scroll" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Ils nous font confiance</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${isVisible ? "animate-on-scroll-delay-1" : ""}`}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="relative size-12 rounded-full overflow-hidden bg-accent/10 flex-shrink-0">
                    <Image
                      src={`/.jpg?height=48&width=48&query=${testimonial.avatar}`}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
