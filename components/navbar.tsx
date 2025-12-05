"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onOpenForm: () => void
}

export function Navbar({ onOpenForm }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/95 border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection("hero")} className="hover:opacity-80 transition-opacity flex items-center gap-1">
              <span className="text-[#6366f1] font-black text-3xl tracking-tight">W</span>
              <span className="font-bold text-2xl text-white tracking-tight">COSMOWEB</span>
              <span className="text-[#6366f1] text-3xl font-bold">.</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <Button 
              asChild 
              className="bg-white text-[#0a0a14] hover:bg-gray-100 font-semibold px-6 py-2 rounded-full"
            >
              <a href="https://calendly.com/contact-agence-cosmoweb/30min" target="_blank" rel="noopener noreferrer">
                Réserver un appel
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-[#0a0a14]/95 rounded-lg">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              FAQ
            </button>
            <Button asChild className="w-full bg-white text-[#0a0a14] hover:bg-gray-100 font-semibold rounded-full">
              <a href="https://calendly.com/contact-agence-cosmoweb/30min" target="_blank" rel="noopener noreferrer">
                Réserver un appel
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
