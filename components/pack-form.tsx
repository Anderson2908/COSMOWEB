"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle2, Calendar, Loader2 } from "lucide-react"

interface PackFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  packName?: string
}

export function PackForm({ open, onOpenChange, packName }: PackFormProps) {
  const [step, setStep] = useState<"form" | "success">("form")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    revenue: "",
    email: "",
    phone: "",
  })

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
          type: "pack",
          packName,
          ...formData,
        }),
      })
      
      if (response.ok) {
        setStep("success")
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

  const handleClose = () => {
    setStep("form")
    setFormData({
      companyName: "",
      revenue: "",
      email: "",
      phone: "",
    })
    onOpenChange(false)
  }

  const isFormValid = formData.companyName && formData.revenue && formData.email && formData.phone

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-[#0d1117] border border-[#1f2937] text-white">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">
                {packName ? `Formulaire - ${packName}` : "Demande d'information"}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Remplissez ces informations pour que nous puissions mieux vous accompagner dans votre projet.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-white">Nom de l'entreprise *</Label>
                <Input
                  id="companyName"
                  placeholder="Ex: Mon Entreprise"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  required
                  className="bg-[#111827] border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#6366f1] rounded-xl h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="revenue" className="text-white">Chiffre d'affaires annuel *</Label>
                <Input
                  id="revenue"
                  placeholder="Ex: 500 000 €"
                  value={formData.revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                  required
                  className="bg-[#111827] border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#6366f1] rounded-xl h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email professionnel *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-[#111827] border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#6366f1] rounded-xl h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Numéro de téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-[#111827] border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#6366f1] rounded-xl h-12"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-full disabled:opacity-50" 
                size="lg" 
                disabled={!isFormValid || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 size-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer ma demande"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="flex justify-center">
              <div className="size-16 rounded-full bg-[#6366f1]/20 flex items-center justify-center">
                <CheckCircle2 className="size-10 text-[#6366f1]" />
              </div>
            </div>

            <div className="space-y-2">
              <DialogTitle className="text-2xl text-white">Demande envoyée avec succès!</DialogTitle>
              <DialogDescription className="text-base text-gray-400">
                Merci pour votre intérêt. Un de nos conseillers vous contactera sous 24h !
              </DialogDescription>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-sm text-gray-400">
                En attendant, vous pouvez prendre rendez-vous directement avec un conseiller :
              </p>
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-[#6366f1] to-[#818cf8] hover:opacity-90 text-white rounded-full">
                <a href="https://calendly.com/contact-agence-cosmoweb/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 size-5" />
                  Réserver un appel
                </a>
              </Button>
            </div>

            <Button 
              variant="outline" 
              onClick={handleClose} 
              className="w-full bg-transparent border-[#1f2937] text-white hover:bg-[#1f2937] rounded-full"
            >
              Fermer
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
