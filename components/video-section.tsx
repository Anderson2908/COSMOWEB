"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function VideoSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center ${isVisible ? "animate-on-scroll" : ""}`}>
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-balance">
                Découvrez comment nous transformons vos idées en{" "}
                <span className="bg-gradient-to-r from-accent via-purple-600 to-accent bg-clip-text text-transparent">
                  réalité digitale
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque projet est unique. Notre approche combine expertise technique, design moderne et compréhension
                approfondie de vos objectifs business pour créer des sites web qui génèrent des résultats concrets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                De la conception initiale au lancement final, nous vous accompagnons à chaque étape pour assurer que
                votre présence en ligne reflète parfaitement votre vision et vos ambitions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm font-medium">Design sur mesure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  <span className="text-sm font-medium">Performance optimale</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm font-medium">Support continu</span>
                </div>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/modern-web-design-showcase-presentation.jpg"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
