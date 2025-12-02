"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CGVPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Conditions Générales de Vente
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Objet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre WebMaster
              Digital, SARL au capital de 10 000 €, SIRET 123 456 789 00012, ci-après dénommée "le Prestataire", et
              toute personne physique ou morale, ci-après dénommée "le Client", souhaitant bénéficier des services de
              création de sites web proposés par le Prestataire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services proposés</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">WebMaster propose les prestations suivantes :</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Création de sites web vitrine</li>
              <li>Développement de sites portfolio</li>
              <li>Création de sites e-commerce</li>
              <li>Maintenance et support technique</li>
              <li>Hébergement et gestion de noms de domaine</li>
              <li>Optimisation SEO et performances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Devis et commande</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Toute prestation fait l'objet d'un devis détaillé gratuit, valable 30 jours à compter de sa date
              d'émission. Le devis signé par le Client et accompagné de l'acompte vaut commande ferme et définitive.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La commande ne sera considérée comme validée qu'après réception du devis signé accompagné de l'acompte
              correspondant. Tout devis non signé et non accompagné de l'acompte dans les délais ne pourra être
              considéré comme valide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Tarifs</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les tarifs de nos prestations sont indiqués en euros et hors taxes. La TVA applicable est celle en vigueur
              au jour de la facturation. Nos tarifs sont révisables à tout moment mais les prestations sont facturées
              sur la base des tarifs en vigueur au moment de la validation de la commande.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="text-foreground">
                <strong>Pack Starter :</strong> 500 € HT
              </p>
              <p className="text-foreground">
                <strong>Pack Confort :</strong> 850 € HT
              </p>
              <p className="text-foreground">
                <strong>Pack Premium :</strong> 1 250 € HT
              </p>
              <p className="text-foreground">
                <strong>Suivi mensuel :</strong> 19,99 € HT/mois
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Modalités de paiement</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le paiement s'effectue selon les modalités suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Acompte :</strong> 50% du montant total à la signature du devis
              </li>
              <li>
                <strong>Solde :</strong> 50% du montant total à la livraison du projet
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Les moyens de paiement acceptés sont : virement bancaire, carte bancaire, et chèque. En cas de retard de
              paiement, des pénalités de 3 fois le taux d'intérêt légal seront appliquées, ainsi qu'une indemnité
              forfaitaire de 40 € pour frais de recouvrement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Délais de réalisation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les délais de réalisation sont communiqués à titre indicatif dans le devis. Ils courent à compter de la
              réception de l'acompte et de tous les éléments nécessaires à la réalisation du projet (contenus, images,
              logos, accès, etc.).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tout retard dans la fourniture des éléments par le Client entraîne un report proportionnel du délai de
              livraison. Le Prestataire ne pourra être tenu responsable d'un retard de livraison dû à un cas de force
              majeure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Obligations du Client</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Le Client s'engage à :</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Fournir tous les éléments nécessaires dans les délais convenus</li>
              <li>Garantir qu'il dispose de tous les droits sur les contenus fournis</li>
              <li>Valider ou formuler ses demandes de modifications dans un délai raisonnable</li>
              <li>Désigner un interlocuteur unique pour le suivi du projet</li>
              <li>Respecter les délais de paiement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Obligations du Prestataire</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Le Prestataire s'engage à :</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Mettre en œuvre tous les moyens nécessaires pour réaliser la prestation</li>
              <li>Respecter les délais convenus dans la mesure du possible</li>
              <li>Assurer la confidentialité des informations communiquées</li>
              <li>Informer le Client de l'avancement du projet</li>
              <li>Livrer un site conforme au cahier des charges validé</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modifications et révisions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chaque pack inclut un nombre limité de révisions :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Pack Starter : 2 séries de modifications</li>
              <li>Pack Confort : 3 séries de modifications</li>
              <li>Pack Premium : 5 séries de modifications</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Toute modification supplémentaire ou changement du cahier des charges initial fera l'objet d'un devis
              complémentaire facturé 80 € HT/heure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le Prestataire conserve l'entière propriété intellectuelle sur tous les éléments créés jusqu'au paiement
              intégral du prix. Une fois le paiement effectué, les droits d'exploitation du site sont transférés au
              Client pour une utilisation dans le cadre de son activité.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le Prestataire se réserve le droit de mentionner la réalisation dans son portfolio et d'afficher un lien
              discret "Site créé par WebMaster" dans le footer du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Garantie et maintenance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le Prestataire garantit le bon fonctionnement du site pendant 3 mois à compter de sa mise en ligne
              (garantie limitée aux bugs et dysfonctionnements techniques, hors modifications du contenu par le Client).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Des contrats de maintenance peuvent être souscrits séparément pour assurer le suivi, les mises à jour de
              sécurité et les modifications mineures du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Résiliation et annulation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En cas d'annulation de la commande par le Client après validation du devis :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Avant le début des travaux : conservation de 30% de l'acompte</li>
              <li>Après le début des travaux : facturation au prorata du travail effectué</li>
              <li>À plus de 50% d'avancement : aucun remboursement</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Le Prestataire se réserve le droit de résilier le contrat en cas de manquement grave du Client à ses
              obligations, notamment en cas de non-paiement ou de fourniture tardive des éléments nécessaires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La responsabilité du Prestataire est limitée au montant de la prestation. Le Prestataire ne pourra être
              tenu responsable :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Des dommages indirects (perte de chiffre d'affaires, perte de données, etc.)</li>
              <li>Des contenus fournis par le Client</li>
              <li>Des interruptions de service dues à l'hébergeur ou à des cas de force majeure</li>
              <li>De l'utilisation du site par le Client après livraison</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Hébergement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sauf disposition contraire, l'hébergement du site n'est pas inclus dans nos prestations. Le Client peut
              opter pour notre solution d'hébergement partenaire ou fournir ses propres accès d'hébergement. Le
              Prestataire ne pourra être tenu responsable des dysfonctionnements liés à l'hébergement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. Droit de rétractation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé
              pour les contrats de prestation de services pleinement exécutés avant la fin du délai de rétractation et
              dont l'exécution a commencé après accord préalable exprès du consommateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">16. Protection des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les données personnelles collectées sont traitées conformément à notre Politique de Confidentialité et au
              RGPD. Le Client dispose d'un droit d'accès, de rectification et de suppression de ses données en
              contactant : contact@webmaster.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">17. Litiges</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
              Si aucun accord n'est trouvé, le litige sera porté devant les tribunaux compétents du ressort de Paris.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le Client est informé qu'il peut recourir à une médiation conventionnelle ou à tout autre mode alternatif
              de règlement des différends en cas de contestation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">18. Loi applicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes CGV sont soumises au droit français. Elles peuvent être modifiées à tout moment, les
              conditions applicables étant celles en vigueur à la date de la commande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">19. Contact</h2>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="text-foreground">Pour toute question concernant nos CGV, contactez-nous :</p>
              <p className="text-foreground">
                <strong>Email :</strong> contact@webmaster.fr
              </p>
              <p className="text-foreground">
                <strong>Téléphone :</strong> +33 6 50 77 08 33
              </p>
              <p className="text-foreground">
                <strong>Adresse :</strong> Paris, France
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </main>
    </div>
  )
}
