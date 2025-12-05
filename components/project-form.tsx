"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react"

type ProjectType = "portfolio" | "vitrine" | "ecommerce" | ""
type TeamSize = "1" | "2-5" | "6-10" | "10+" | ""
type Budget = "<2000" | "2000-5000" | "5000-10000" | "10000+" | ""

interface ProjectFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectForm({ open, onOpenChange }: ProjectFormProps) {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState<ProjectType>("")
  const [teamSize, setTeamSize] = useState<TeamSize>("")
  const [goal, setGoal] = useState("")
  const [budget, setBudget] = useState<Budget>("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const resetForm = () => {
    setStep(1)
    setProjectType("")
    setTeamSize("")
    setGoal("")
    setBudget("")
    setEmail("")
    setPhone("")
    setSubmitted(false)
    setIsLoading(false)
  }

  const handleClose = (open: boolean) => {
    if (!open) {
      setTimeout(resetForm, 300)
    }
    onOpenChange(open)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "project",
          projectType,
          teamSize,
          goal,
          budget,
          email,
          phone,
        }),
      })
      
      if (response.ok) {
        setSubmitted(true)
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

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-[#0d1117] border border-[#1f2937] text-white">
          <DialogHeader>
            <div className="mx-auto size-16 rounded-full bg-[#6366f1]/20 flex items-center justify-center mb-4">
              <Check className="size-8 text-[#6366f1]" />
            </div>
            <DialogTitle className="text-center text-2xl text-white">Merci pour votre demande !</DialogTitle>
            <DialogDescription className="text-center text-base text-gray-400">
              Nous avons bien reçu votre projet. Notre équipe vous contactera sous 24h pour discuter de vos besoins.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => handleClose(false)} className="w-full bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-full">
            Fermer
          </Button>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl bg-[#0d1117] border border-[#1f2937] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Parlez-nous de votre projet</DialogTitle>
          <DialogDescription className="text-gray-400">Étape {step} sur 6</DialogDescription>
        </DialogHeader>

        {/* Progress bar */}
        <div className="w-full bg-[#1f2937] rounded-full h-2 mb-6">
          <div
            className="bg-[#6366f1] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>

        <div className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-white">Quel type de site souhaitez-vous ?</Label>
              <RadioGroup value={projectType} onValueChange={(value) => setProjectType(value as ProjectType)}>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="portfolio" id="portfolio" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="portfolio" className="flex-1 cursor-pointer">
                    <div className="font-semibold text-white">Portfolio</div>
                    <div className="text-sm text-gray-400">Présentez vos réalisations et votre expertise</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="vitrine" id="vitrine" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="vitrine" className="flex-1 cursor-pointer">
                    <div className="font-semibold text-white">Site Vitrine</div>
                    <div className="text-sm text-gray-400">Présentez votre entreprise et vos services</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="ecommerce" id="ecommerce" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="ecommerce" className="flex-1 cursor-pointer">
                    <div className="font-semibold text-white">Site E-commerce</div>
                    <div className="text-sm text-gray-400">Vendez vos produits en ligne</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-white">Combien de collaborateurs dans votre entreprise ?</Label>
              <RadioGroup value={teamSize} onValueChange={(value) => setTeamSize(value as TeamSize)}>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="1" id="1" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="1" className="flex-1 cursor-pointer text-white">
                    Indépendant / Freelance
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="2-5" id="2-5" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="2-5" className="flex-1 cursor-pointer text-white">
                    2 à 5 collaborateurs
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="6-10" id="6-10" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="6-10" className="flex-1 cursor-pointer text-white">
                    6 à 10 collaborateurs
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="10+" id="10+" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="10+" className="flex-1 cursor-pointer text-white">
                    Plus de 10 collaborateurs
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <Label htmlFor="goal" className="text-lg font-semibold text-white">
                Quel est l'objectif principal de votre site ?
              </Label>
              <Textarea
                id="goal"
                placeholder="Ex: Générer des leads, vendre mes produits, présenter mes services..."
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="min-h-32 resize-none bg-[#111827] border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#6366f1] rounded-xl"
              />
              <p className="text-sm text-gray-400">
                Décrivez en quelques mots ce que vous souhaitez accomplir avec votre site web.
              </p>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-white">Quel est votre budget ?</Label>
              <RadioGroup value={budget} onValueChange={(value) => setBudget(value as Budget)}>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="<2000" id="<2000" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="<2000" className="flex-1 cursor-pointer text-white">
                    Moins de 2 000 €
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="2000-5000" id="2000-5000" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="2000-5000" className="flex-1 cursor-pointer text-white">
                    2 000 € - 5 000 €
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="5000-10000" id="5000-10000" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="5000-10000" className="flex-1 cursor-pointer text-white">
                    5 000 € - 10 000 €
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border border-[#1f2937] rounded-xl p-4 hover:border-[#6366f1]/50 cursor-pointer transition-colors bg-[#111827]/50">
                  <RadioGroupItem value="10000+" id="10000+" className="border-[#6366f1] text-[#6366f1]" />
                  <Label htmlFor="10000+" className="flex-1 cursor-pointer text-white">
                    Plus de 10 000 €
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <Label htmlFor="email" className="text-lg font-semibold text-white">
                Quelle est votre adresse email ?
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-base bg-[#111827] border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#6366f1] rounded-xl h-12"
              />
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4">
              <Label htmlFor="phone" className="text-lg font-semibold text-white">
                Quel est votre numéro de téléphone ?
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+33 6 12 34 56 78"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-base bg-[#111827] border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#6366f1] rounded-xl h-12"
              />
              <p className="text-sm text-gray-400">
                Nous vous contacterons sous 24h pour discuter de votre projet en détail.
              </p>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="gap-2 border-[#1f2937] bg-transparent text-white hover:bg-[#1f2937] rounded-full">
                <ArrowLeft className="size-4" />
                Retour
              </Button>
            )}
            {step < 6 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={
                  (step === 1 && !projectType) ||
                  (step === 2 && !teamSize) ||
                  (step === 3 && !goal.trim()) ||
                  (step === 4 && !budget) ||
                  (step === 5 && (!email.trim() || !email.includes("@")))
                }
                className="flex-1 gap-2 bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-full disabled:opacity-50"
              >
                Continuer
                <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!phone.trim() || isLoading} className="flex-1 bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-full disabled:opacity-50">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer ma demande"
                )}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
