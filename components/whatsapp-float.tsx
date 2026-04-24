"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  // WhatsApp number for Chint Uganda (using the main office number)
  const phoneNumber = "256392266552" // Format: country code + number without + or spaces
  const defaultMessage = "Hello! I'm interested in learning more about Chint Uganda's products and services."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all bg-[#25D366] hover:bg-[#20BA5A] text-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </>
  )
}
