"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PolitiqueConfidentialitePage() {
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
          Politique de Confidentialité
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-400 leading-relaxed">
              COSMOWEB accorde une grande importance à la protection de vos données personnelles. La présente politique
              de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations
              personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Responsable du traitement</h2>
            <div className="bg-[#111827]/80 border border-[#1f2937] p-6 rounded-xl space-y-2">
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Société :</strong> COSMOWEB
              </p>
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Email :</strong> contact-agence@cosmoweb.fr
              </p>
              <p className="text-white">
                <strong className="text-[#a5b4fc]">Adresse :</strong> Paris, France
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Données collectées</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Nous collectons les données suivantes lorsque vous utilisez notre site :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Données d&apos;identification (nom, prénom, nom de l&apos;entreprise)</li>
              <li>Coordonnées (email, numéro de téléphone)</li>
              <li>Informations professionnelles (chiffre d&apos;affaires, secteur d&apos;activité)</li>
              <li>Données de navigation (cookies, adresse IP, pages visitées)</li>
              <li>Informations relatives à vos besoins et projets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Finalités du traitement</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Traitement de vos demandes de devis et de contact</li>
              <li>Gestion de la relation client</li>
              <li>Amélioration de nos services et de notre site web</li>
              <li>Envoi d&apos;informations commerciales (avec votre consentement)</li>
              <li>Respect de nos obligations légales et réglementaires</li>
              <li>Analyses statistiques et mesure d&apos;audience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Base légale du traitement</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Le traitement de vos données personnelles repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                <strong className="text-white">Exécution d&apos;un contrat :</strong> pour traiter vos demandes de services
              </li>
              <li>
                <strong className="text-white">Intérêt légitime :</strong> pour améliorer nos services et personnaliser votre expérience
              </li>
              <li>
                <strong className="text-white">Consentement :</strong> pour l&apos;envoi de communications marketing
              </li>
              <li>
                <strong className="text-white">Obligation légale :</strong> pour respecter nos obligations comptables et fiscales
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Durée de conservation</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Vos données personnelles sont conservées pendant les durées suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Données de prospects : 3 ans à compter du dernier contact</li>
              <li>Données clients : durée de la relation contractuelle + 5 ans</li>
              <li>Données de facturation : 10 ans (obligation légale)</li>
              <li>Cookies : maximum 13 mois</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Destinataires des données</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Vos données personnelles peuvent être transmises aux destinataires suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Personnel autorisé de COSMOWEB</li>
              <li>Prestataires techniques (hébergement, maintenance)</li>
              <li>Outils de gestion de la relation client (CRM)</li>
              <li>Services de paiement en ligne</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-4">
              Nous nous assurons que tous nos partenaires respectent des niveaux de protection des données équivalents
              aux nôtres.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Vos droits</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                <strong className="text-white">Droit d&apos;accès :</strong> obtenir la confirmation que vos données sont traitées
              </li>
              <li>
                <strong className="text-white">Droit de rectification :</strong> corriger vos données inexactes
              </li>
              <li>
                <strong className="text-white">Droit à l&apos;effacement :</strong> demander la suppression de vos données
              </li>
              <li>
                <strong className="text-white">Droit à la limitation :</strong> limiter le traitement de vos données
              </li>
              <li>
                <strong className="text-white">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données
              </li>
              <li>
                <strong className="text-white">Droit à la portabilité :</strong> récupérer vos données dans un format structuré
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-4">
              Pour exercer vos droits, contactez-nous à : <strong className="text-[#a5b4fc]">contact-agence@cosmoweb.fr</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Sécurité des données</h2>
            <p className="text-gray-400 leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
              contre la destruction accidentelle ou illicite, la perte, l&apos;altération, la divulgation ou l&apos;accès non
              autorisé. Nos systèmes sont sécurisés par SSL/TLS et nous effectuons des sauvegardes régulières.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Cookies</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Nous utilisons :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                <strong className="text-white">Cookies essentiels :</strong> nécessaires au fonctionnement du site
              </li>
              <li>
                <strong className="text-white">Cookies analytiques :</strong> pour mesurer l&apos;audience et améliorer le site
              </li>
              <li>
                <strong className="text-white">Cookies marketing :</strong> pour personnaliser le contenu (avec votre consentement)
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-4">
              Vous pouvez gérer vos préférences de cookies à tout moment dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Modifications</h2>
            <p className="text-gray-400 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
              modification sera publiée sur cette page avec une nouvelle date de mise à jour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact</h2>
            <p className="text-gray-400 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
              contactez-nous à : <strong className="text-[#a5b4fc]">contact-agence@cosmoweb.fr</strong> ou <strong className="text-[#a5b4fc]">+33 6 50 77 08 33</strong>
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
