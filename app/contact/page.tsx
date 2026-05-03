"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle")
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  })

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus("saving")
    setError("")

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          topic: formData.topic,
          message: formData.message,
        }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Could not submit inquiry.")
      setStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", phone: "", topic: "", message: "" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit inquiry.")
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F9FB]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0B1C2C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Get In <span className="text-[#C8A96A]">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Our expert engineers and consultants are ready to assist with your industrial electrical and power distribution requirements.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Contact Form Container */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 bg-white p-10 rounded-3xl shadow-xl shadow-[#0B1C2C]/5 border border-[#0B1C2C]/5"
            >
              <h2 className="text-3xl font-black text-[#0B1C2C] mb-8">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B1C2C] uppercase tracking-wider">First Name</label>
                    <Input required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} placeholder="John" className="bg-[#F8F9FB] border-none py-6 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B1C2C] uppercase tracking-wider">Last Name</label>
                    <Input required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder="Doe" className="bg-[#F8F9FB] border-none py-6 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1C2C] uppercase tracking-wider">Email Address</label>
                  <Input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" type="email" className="bg-[#F8F9FB] border-none py-6 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1C2C] uppercase tracking-wider">Phone Number</label>
                  <Input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+256 ..." type="tel" className="bg-[#F8F9FB] border-none py-6 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1C2C] uppercase tracking-wider">Inquiry Topic</label>
                  <Input required value={formData.topic} onChange={(e) => setFormData({ ...formData, topic: e.target.value })} placeholder="Project Consultation" className="bg-[#F8F9FB] border-none py-6 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1C2C] uppercase tracking-wider">Message Details</label>
                  <Textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help you today?" rows={6} className="bg-[#F8F9FB] border-none rounded-xl" />
                </div>
                <Button disabled={status === "saving"} size="lg" className="w-full bg-[#0B1C2C] hover:bg-[#1a2e44] text-white font-bold py-8 rounded-xl shadow-lg transition-all group">
                  <Send className="h-5 w-5 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {status === "saving" ? "Sending..." : "Send Official Inquiry"}
                </Button>
                {status === "success" && <p className="rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">Inquiry saved. Our team can review it in admin lead management.</p>}
                {status === "error" && <p className="rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}
              </form>
            </motion.div>

            {/* Contact Details Container */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-8"
            >
              <h2 className="text-3xl font-black text-[#0B1C2C]">Corporate <span className="text-[#C8A96A]">Presence</span></h2>
              
              <div className="grid gap-6">
                {[
                  { icon: MapPin, title: "Headquarters", content: "Chint Centre, Industrial Area\nKampala, Uganda" },
                  { icon: Phone, title: "Official Contact", content: "+256 392 266 552\n+256 772 123 456" },
                  { icon: Mail, title: "Digital Correspondence", content: "info@chintuganda.com\nsales@chintuganda.com" },
                  { icon: Clock, title: "Operational Hours", content: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 p-6 bg-white rounded-2xl premium-shadow border border-[#0B1C2C]/5 group hover:border-[#C8A96A] transition-colors">
                    <div className="h-14 w-14 bg-[#F8F9FB] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C8A96A] transition-colors">
                      <item.icon className="h-7 w-7 text-[#0B1C2C] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-black text-[#0B1C2C] text-lg mb-1">{item.title}</h3>
                      <p className="text-[#0B1C2C]/60 whitespace-pre-line leading-relaxed font-medium">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Find Us CTA */}
              <div className="p-8 bg-[#0B1C2C] rounded-3xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-3">Find a Distributor</h3>
                  <p className="text-white/60 mb-6 font-medium">Locate our certified dealers and service hubs across the region.</p>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#0B1C2C] rounded-xl font-bold px-8">
                    <Link href="/#nearby-dealers">
                      Open Store Locator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="absolute top-0 right-0 h-full w-32 bg-[#C8A96A] opacity-5 -skew-x-12 translate-x-16 group-hover:translate-x-10 transition-transform" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
