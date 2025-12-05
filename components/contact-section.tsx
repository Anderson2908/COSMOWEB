"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Loader2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          name,
          email,
          message,
        }),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setName("")
          setEmail("")
          setMessage("")
          setSubmitted(false)
        }, 5000)
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (error) {
      console.error("Erreur:", error)
      alert("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-[#0a0a14] overflow-hidden"
    >
      <div ref={ref} className="max-w-2xl mx-auto relative z-10">
        <div
          className={`bg-[#0d1117] border border-[#1f2937] rounded-3xl p-8 md:p-12 ${isVisible ? "animate-on-scroll" : ""}`}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto size-16 rounded-full bg-[#6366f1]/20 flex items-center justify-center mb-4">
                <Mail className="size-8 text-[#6366f1]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Merci !</h3>
              <p className="text-gray-400">
                Nous avons bien reçu votre demande. Notre équipe vous contactera très rapidement !
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Parlons de votre projet
                </h2>
                <p className="text-gray-400">
                  Laissez-nous vos coordonnées et nous vous recontacterons pour un audit gratuit.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300">
                    Votre Nom
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Jean Dupont"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full h-14 px-4 bg-[#161b22] border border-[#30363d] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300">
                    Votre Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="jean@entreprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-14 px-4 bg-[#161b22] border border-[#30363d] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300">
                    Détails du projet
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Je souhaite refaire le site de mon agence immobilière..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-4 bg-[#161b22] border border-[#30363d] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-base font-semibold bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 size-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Demander mon devis gratuit"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
