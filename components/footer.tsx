import Link from "next/link"
import { Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-[#0a0a14] overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo et description */}
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              <span className="text-[#6366f1] font-black text-3xl tracking-tight">W</span>
              <span className="font-bold text-2xl text-white tracking-tight">COSMOWEB</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Nous transformons vos idées en expériences digitales performantes. L'agence web partenaire de votre croissance.
            </p>
            <div className="flex space-x-3">
              <span 
                className="size-10 rounded-full bg-[#1a1a2e] border border-[#2a2a4e] flex items-center justify-center text-gray-500 cursor-default"
                title="Instagram - Bientôt disponible"
              >
                <Instagram className="size-5" />
              </span>
              <span 
                className="size-10 rounded-full bg-[#1a1a2e] border border-[#2a2a4e] flex items-center justify-center text-gray-500 cursor-default"
                title="LinkedIn - Bientôt disponible"
              >
                <Linkedin className="size-5" />
              </span>
              <span 
                className="size-10 rounded-full bg-[#1a1a2e] border border-[#2a2a4e] flex items-center justify-center text-gray-500 cursor-default"
                title="GitHub - Bientôt disponible"
              >
                <Github className="size-5" />
              </span>
            </div>
          </div>

          {/* Agence */}
          <div>
            <h3 className="font-bold text-white mb-6">Agence</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("features")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Processus
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pricing")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tarifs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-gray-500" />
                <a
                  href="mailto:contact-agence@cosmoweb.fr"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact-agence@cosmoweb.fr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-gray-500" />
                <a
                  href="tel:+33650770833"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  06 50 77 08 33
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 text-gray-500" />
                <span className="text-gray-400">
                  <span className="text-white">Paris</span>, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="pt-8 border-t border-[#1f2937]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 COSMOWEB. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/mentions-legales"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Mentions Légales
              </Link>
              <Link
                href="/cgv"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                CGV
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
