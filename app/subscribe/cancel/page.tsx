"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { XCircle, ArrowLeft, MessageCircle } from "lucide-react"

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      {/* Background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-3xl"></div>
      </div>

      <main className="relative container mx-auto px-4 py-24 max-w-2xl text-center">
        {/* Cancel Icon */}
        <div className="mb-8 inline-flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-full p-6">
              <XCircle className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Paiement annulé
        </h1>
        
        <p className="text-xl text-gray-400 mb-8">
          Pas de souci ! Votre paiement n&apos;a pas été effectué et aucun montant n&apos;a été prélevé.
        </p>

        {/* Info Card */}
        <div className="bg-[#111827] rounded-2xl p-8 border border-[#1f2937] text-left mb-8">
          <h2 className="text-xl font-semibold mb-4">Vous avez des questions ?</h2>
          
          <p className="text-gray-400 mb-6">
            Si vous avez rencontré un problème ou si vous souhaitez en savoir plus sur notre offre de maintenance, 
            n&apos;hésitez pas à nous contacter. Notre équipe est là pour vous aider.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300">
              <MessageCircle className="w-5 h-5 text-[#6366f1]" />
              <span>Support disponible du lundi au vendredi</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-[#6366f1]">✉️</span>
              <a href="mailto:contact-agence@cosmoweb.fr" className="hover:text-[#6366f1] transition-colors">
                contact-agence@cosmoweb.fr
              </a>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="border-[#6366f1] text-[#a5b4fc] hover:bg-[#6366f1]/10 px-8 py-6 rounded-full text-lg">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Retour à l&apos;accueil
            </Link>
          </Button>
          
          <Button asChild className="bg-[#6366f1] hover:bg-[#5558e3] text-white px-8 py-6 rounded-full text-lg font-semibold">
            <Link href="/subscribe">
              Réessayer
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          L&apos;abonnement Maintenance & Sérénité est sans engagement et résiliable à tout moment.
        </p>
      </main>
    </div>
  )
}

