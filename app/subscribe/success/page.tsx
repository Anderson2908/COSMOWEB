"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, ArrowRight } from "lucide-react"

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuler un chargement pour vérifier la session
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a14] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#6366f1] mx-auto mb-4"></div>
          <p className="text-gray-400">Confirmation de votre paiement...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      {/* Background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6366f1]/10 rounded-full blur-3xl"></div>
      </div>

      <main className="relative container mx-auto px-4 py-24 max-w-2xl text-center">
        {/* Success Icon */}
        <div className="mb-8 inline-flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Paiement confirmé !
        </h1>
        
        <p className="text-xl text-gray-400 mb-8">
          Bienvenue dans la famille CosmoWeb. Votre abonnement Maintenance & Sérénité est maintenant actif.
        </p>

        {/* Info Card */}
        <div className="bg-[#111827] rounded-2xl p-8 border border-[#1f2937] text-left mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#6366f1]" />
            Prochaines étapes
          </h2>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-[#6366f1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <p className="font-medium">Email de confirmation</p>
                <p className="text-sm text-gray-400">Vous allez recevoir un email de confirmation avec tous les détails de votre abonnement.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#6366f1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <p className="font-medium">Notre équipe vous contacte</p>
                <p className="text-sm text-gray-400">Un membre de notre équipe vous contactera sous 24h pour faire le point sur votre site.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#6366f1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <p className="font-medium">Accès au support</p>
                <p className="text-sm text-gray-400">Vous pouvez désormais nous contacter à tout moment pour vos demandes de maintenance.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Subscription details */}
        <div className="bg-[#111827]/50 rounded-xl p-6 border border-[#1f2937] mb-8">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="text-sm text-gray-400">Votre abonnement</p>
              <p className="font-semibold">Maintenance & Sérénité</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Montant mensuel</p>
              <p className="font-semibold text-[#6366f1]">19,99€/mois</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button asChild className="bg-[#6366f1] hover:bg-[#5558e3] text-white px-8 py-6 rounded-full text-lg font-semibold">
          <Link href="/" className="flex items-center gap-2">
            Retour à l&apos;accueil
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>

        <p className="mt-6 text-sm text-gray-500">
          Une question ? Contactez-nous à{" "}
          <a href="mailto:contact-agence@cosmoweb.fr" className="text-[#6366f1] hover:underline">
            contact-agence@cosmoweb.fr
          </a>
        </p>
      </main>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a14] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#6366f1] mx-auto mb-4"></div>
          <p className="text-gray-400">Chargement...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}

