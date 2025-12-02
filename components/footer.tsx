import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              WebMaster
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nous créons des sites web modernes et performants pour propulser votre entreprise dans le digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sites Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sites Vitrine
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sites E-commerce
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Maintenance & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Informations Légales</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gestion des Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@webmaster.fr"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@webmaster.fr
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+33123456789"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +33 6 50 77 08 33
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} WebMaster Digital. Tous droits réservés.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              SIRET : 123 456 789 00012 | TVA : FR12345678900
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
