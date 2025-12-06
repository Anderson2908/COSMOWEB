import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const { type, ...formData } = data
    
    // Préparer le contenu de l'email
    let emailContent = ""
    let subject = ""
    
    if (type === "pack") {
      subject = `🚀 Nouvelle demande - ${formData.packName || "Pack"}`
      emailContent = `
Nouvelle demande de pack reçue !

Pack demandé : ${formData.packName || "Non spécifié"}

Informations du client :
- Entreprise : ${formData.companyName}
- Chiffre d'affaires : ${formData.revenue}
- Email : ${formData.email}
- Téléphone : ${formData.phone}

Date de la demande : ${new Date().toLocaleString("fr-FR")}
      `
    } else if (type === "project") {
      subject = "🚀 Nouvelle demande de projet"
      emailContent = `
Nouvelle demande de projet reçue !

Détails du projet :
- Type de site : ${formData.projectType}
- Taille de l'équipe : ${formData.teamSize}
- Objectif : ${formData.goal}
- Budget : ${formData.budget}

Contact :
- Email : ${formData.email}
- Téléphone : ${formData.phone}

Date de la demande : ${new Date().toLocaleString("fr-FR")}
      `
    } else if (type === "contact") {
      subject = `📩 Nouveau message de ${formData.name}`
      emailContent = `
Nouveau message de contact reçu !

De : ${formData.name}
Email : ${formData.email}
Entreprise : ${formData.company || "Non spécifié"}

Message :
${formData.message}

Date : ${new Date().toLocaleString("fr-FR")}
      `
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.RECIPIENT_EMAIL || "contact-agence@cosmoweb.fr"
    
    if (resendApiKey) {
      // Utiliser le domaine de test Resend (onboarding@resend.dev)
      // Pour utiliser votre propre domaine, vérifiez-le sur resend.com/domains
      const fromEmail = process.env.FROM_EMAIL || "COSMOWEB <onboarding@resend.dev>"
      
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          subject: subject,
          text: emailContent,
        }),
      })
      
      const responseData = await response.json()
      
      if (!response.ok) {
        console.error("Erreur Resend:", responseData)
        throw new Error(responseData.message || "Erreur lors de l'envoi de l'email")
      }
      
      console.log("✅ Email envoyé avec succès:", responseData)
      
      // Envoyer une copie au client (séparément pour éviter les erreurs)
      if (formData.email) {
        try {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: fromEmail,
              to: [formData.email],
              subject: `Confirmation - ${subject}`,
              text: `Bonjour,\n\nNous avons bien reçu votre demande. Notre équipe vous contactera sous 24h.\n\nRécapitulatif de votre demande :\n${emailContent}\n\nÀ très bientôt,\nL'équipe COSMOWEB`,
            }),
          })
          console.log("✅ Copie envoyée au client")
        } catch (e) {
          console.log("⚠️ Copie client non envoyée:", e)
        }
      }
      
    } else {
      // Mode développement - logger les données
      console.log("=== NOUVELLE DEMANDE ===")
      console.log("Sujet:", subject)
      console.log("Contenu:", emailContent)
      console.log("========================")
      
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    return NextResponse.json({ 
      success: true, 
      message: "Demande envoyée avec succès" 
    })
    
  } catch (error) {
    console.error("❌ Erreur:", error)
    return NextResponse.json(
      { success: false, message: "Erreur lors de l'envoi" },
      { status: 500 }
    )
  }
}
