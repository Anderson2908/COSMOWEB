import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Erreur de vérification du webhook:", err)
      return NextResponse.json(
        { error: "Signature webhook invalide" },
        { status: 400 }
      )
    }

    // Gérer les différents événements
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        console.log("✅ Paiement réussi pour:", session.customer_email)
        // Ici vous pouvez ajouter la logique pour:
        // - Envoyer un email de confirmation
        // - Activer le compte client
        // - Enregistrer dans votre base de données
        break
      }

      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("✅ Nouvel abonnement créé:", subscription.id)
        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("📝 Abonnement mis à jour:", subscription.id)
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("❌ Abonnement annulé:", subscription.id)
        // Désactiver l'accès au service
        break
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice
        console.log("💰 Paiement de facture réussi:", invoice.id)
        break
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice
        console.log("⚠️ Échec de paiement:", invoice.id)
        // Envoyer un email au client pour mettre à jour son moyen de paiement
        break
      }

      default:
        console.log(`Événement non géré: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Erreur webhook:", error)
    return NextResponse.json(
      { error: "Erreur lors du traitement du webhook" },
      { status: 500 }
    )
  }
}

