import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Montserrat as V0_Font_Montserrat } from "next/font/google"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { AIAgent } from "@/components/ai-agent"
import { ChintLoadingScreen } from "@/components/chint-loading-screen"

const montserrat = V0_Font_Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Chint Uganda - Electrical Equipment & Power Distribution Solutions",
  description:
    "Leading provider of electrical equipment, power distribution systems, and industrial automation solutions in Uganda. Quality products with decades of experience.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <ChintLoadingScreen />
        {children}
        <WhatsAppFloat />
        <AIAgent />
      </body>
    </html>
  )
}
