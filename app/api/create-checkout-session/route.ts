import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

// Force Node.js runtime
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  console.log("STRIPE_SECRET_KEY exists:", !!key)
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not defined")
  }
  return new Stripe(key, {
    apiVersion: "2024-12-18.acacia",
  })
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe()
    const { priceId, customerEmail } = await request.json()

    // Vérifier les paramètres requis
    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID manquant. Vérifiez NEXT_PUBLIC_STRIPE_PRICE_ID." },
        { status: 400 }
      )
    }

    if (!customerEmail) {
      return NextResponse.json(
        { error: "Email client manquant." },
        { status: 400 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    if (!baseUrl) {
      return NextResponse.json(
        { error: "URL de base non configurée. Vérifiez NEXT_PUBLIC_BASE_URL." },
        { status: 500 }
      )
    }

    // Créer la session de checkout pour un abonnement
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      success_url: `${baseUrl}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/subscribe/cancel`,
      subscription_data: {
        metadata: {
          plan: "maintenance",
        },
      },
      locale: "fr",
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("Erreur lors de la création de la session:", error)
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue"
    return NextResponse.json(
      { error: `Erreur Stripe: ${errorMessage}` },
      { status: 500 }
    )
  }
}

