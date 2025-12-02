"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, phone })
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setPhone("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-accent/5 to-background"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? "animate-on-scroll" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Vous souhaitez être recontacté ?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Laissez-nous vos coordonnées et notre équipe vous contactera sous 24h pour discuter de votre projet
          </p>
        </div>

        <div
          className={`bg-card border border-border rounded-2xl p-8 shadow-lg ${isVisible ? "animate-on-scroll-delay-1" : ""}`}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto size-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Mail className="size-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Merci !</h3>
              <p className="text-muted-foreground">
                Nous avons bien reçu vos coordonnées. Notre équipe vous contactera très bientôt.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-base flex items-center gap-2">
                    <Mail className="size-4" />
                    Adresse email
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone" className="text-base flex items-center gap-2">
                    <Phone className="size-4" />
                    Numéro de téléphone
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-base bg-blue-700">
                Être recontacté
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant votre projet de
                site web.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
