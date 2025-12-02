"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle2, Calendar } from "lucide-react"

interface PackFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  packName?: string
}

export function PackForm({ open, onOpenChange, packName }: PackFormProps) {
  const [step, setStep] = useState<"form" | "success">("form")
  const [formData, setFormData] = useState({
    companyName: "",
    revenue: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("success")
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
      <DialogContent className="sm:max-w-lg">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {packName ? `Formulaire - ${packName}` : "Demande d'information"}
              </DialogTitle>
              <DialogDescription>
                Remplissez ces informations pour que nous puissions mieux vous accompagner dans votre projet.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Nom de l'entreprise *</Label>
                <Input
                  id="companyName"
                  placeholder="Ex: WebMaster"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="revenue">Chiffre d'affaires annuel *</Label>
                <Input
                  id="revenue"
                  placeholder="Ex: 500 000 €"
                  value={formData.revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email professionnel *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Numéro de téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={!isFormValid}>
                Envoyer ma demande
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="flex justify-center">
              <div className="size-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="size-10 text-green-600" />
              </div>
            </div>

            <div className="space-y-2">
              <DialogTitle className="text-2xl">Demande envoyée avec succès!</DialogTitle>
              <DialogDescription className="text-base">
                Merci pour votre intérêt. Un de nos conseillers vous contactera très prochainement.
              </DialogDescription>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                En attendant, vous pouvez prendre rendez-vous directement avec un conseiller :
              </p>
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-soft-violet to-accent hover:opacity-90">
                <a href="https://calendly.com/votre-lien" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 size-5" />
                  Prendre rendez-vous maintenant
                </a>
              </Button>
            </div>

            <Button variant="outline" onClick={handleClose} className="w-full bg-transparent">
              Fermer
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
