"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MentionsLegalesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Mentions Légales
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informations légales</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie
              numérique, il est précisé aux utilisateurs du site cosmoweb.fr l'identité des différents intervenants
              dans le cadre de sa réalisation et de son suivi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Éditeur du site</h2>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="text-foreground">
                <strong>Raison sociale :</strong> COSMOWEB
              </p>
              <p className="text-foreground">
                <strong>Statut :</strong> Entreprise individuelle (en cours d'immatriculation)
              </p>
              <p className="text-foreground">
                <strong>Siège social :</strong> Paris, France
              </p>
              <p className="text-foreground">
                <strong>Téléphone :</strong> +33 6 50 77 08 33
              </p>
              <p className="text-foreground">
                <strong>Email :</strong> contact-agence@cosmoweb.fr
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Directeur de la publication</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le directeur de la publication du site est le représentant légal de COSMOWEB.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Hébergement</h2>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="text-foreground">
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p className="text-foreground">
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
              <p className="text-foreground">
                <strong>Site web :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://vercel.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
              propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
              téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit est
              formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation de responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              COSMOWEB s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
              Toutefois, COSMOWEB ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises
              à disposition sur ce site.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En conséquence, COSMOWEB décline toute responsabilité pour toute imprécision, inexactitude ou omission
              portant sur des informations disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Liens hypertextes</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site peut contenir des liens hypertextes vers d'autres sites. COSMOWEB n'exerce aucun contrôle sur ces
              sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Loi applicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </main>
    </div>
  )
}
