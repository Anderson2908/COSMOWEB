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
    <div className="min-h-screen bg-[#0a0a14]">
      {/* Header */}
      <header className="border-b border-[#1f2937] bg-[#0a0a14]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a14]/60">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-gray-400 hover:text-white hover:bg-[#1f2937]">
              <ArrowLeft className="h-4 w-4" />
              Retour à l&apos;accueil
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#a5b4fc] bg-clip-text text-transparent">
          Mentions Légales
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Informations légales</h2>
            <p className="text-gray-400 leading-relaxed">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie
              numérique, il est précisé aux utilisateurs du site cosmoweb.fr l&apos;identité des différents intervenants
              dans le cadre de sa réalisation et de son suivi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Éditeur du site</h2>
            <div className="bg-[#111827]/80 border border-[#1f2937] p-6 rounded-xl space-y-2">
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Raison sociale :</strong> COSMOWEB
              </p>
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Statut :</strong> Entreprise individuelle (en cours d&apos;immatriculation)
              </p>
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Siège social :</strong> Paris, France
              </p>
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Téléphone :</strong> +33 6 50 77 08 33
              </p>
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Email :</strong> contact-agence@cosmoweb.fr
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Directeur de la publication</h2>
            <p className="text-gray-400 leading-relaxed">
              Le directeur de la publication du site est le représentant légal de COSMOWEB.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Hébergement</h2>
            <div className="bg-[#111827]/80 border border-[#1f2937] p-6 rounded-xl space-y-2">
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Hébergeur :</strong> Vercel Inc.
              </p>
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Site web :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6366f1] hover:text-[#818cf8] hover:underline transition-colors"
                >
                  https://vercel.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Propriété intellectuelle</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la
              propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
              téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-gray-400 leading-relaxed">
              La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu&apos;il soit est
              formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation de responsabilité</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              COSMOWEB s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site.
              Toutefois, COSMOWEB ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises
              à disposition sur ce site.
            </p>
            <p className="text-gray-400 leading-relaxed">
              En conséquence, COSMOWEB décline toute responsabilité pour toute imprécision, inexactitude ou omission
              portant sur des informations disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Liens hypertextes</h2>
            <p className="text-gray-400 leading-relaxed">
              Le site peut contenir des liens hypertextes vers d&apos;autres sites. COSMOWEB n&apos;exerce aucun contrôle sur ces
              sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Loi applicable</h2>
            <p className="text-gray-400 leading-relaxed">
              Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1f2937]">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </main>
    </div>
  )
}
