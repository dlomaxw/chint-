"use client"

import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, MessageCircle, ArrowRight, ShieldCheck, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle")

  async function subscribe() {
    if (!email.includes("@")) {
      setStatus("error")
      return
    }

    setStatus("saving")
    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "newsletter", name: email, email, topic: "Newsletter subscription" }),
    })
    setStatus(response.ok ? "success" : "error")
    if (response.ok) setEmail("")
  }

  return (
    <footer className="bg-[#050B14] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Brand Element */}
      <div className="absolute top-0 right-0 h-full w-[40%] bg-gradient-to-l from-[#C8A96A]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Identity */}
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-[#C8A96A] tracking-tighter">CHINT<span className="text-white ml-2">UGANDA</span></h3>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              Architecting the energy landscape of East Africa with high-precision industrial components, sustainable infrastructure, and intelligent power distribution ecosystems.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/chintglobal" },
                { icon: Twitter, href: "https://twitter.com/CHINTGlobal" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/chint" },
                { icon: Youtube, href: "https://www.youtube.com/@CHINTGlobal" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center bg-white/5 hover:bg-[#C8A96A] hover:text-[#0B1C2C] rounded-xl transition-all duration-300 group">
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Strategic Units */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#C8A96A] mb-8">Industrial Units</h4>
            <ul className="space-y-4 text-[13px] text-white/50 font-bold uppercase tracking-wider">
              <li><Link href="/products/power-distribution" className="hover:text-white transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Power Transmission</Link></li>
              <li><Link href="/products/low-voltage" className="hover:text-white transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Low Voltage Control</Link></li>
              <li><Link href="/building" className="hover:text-white transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Urban Infrastructure</Link></li>
              <li><Link href="/new-energy" className="hover:text-white transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Renewable Energy</Link></li>
              <li><Link href="/automation" className="hover:text-white transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> System Automation</Link></li>
            </ul>
          </div>

          {/* Support Network */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#C8A96A] mb-8">Corporate Support</h4>
            <ul className="space-y-4 text-[13px] text-white/50 font-bold uppercase tracking-wider">
              <li><Link href="/services" className="hover:text-white transition-colors">Technical Advisory</Link></li>
              <li><Link href="/downloads" className="hover:text-white transition-colors">Specifications Lab</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Distributor Network</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Global Profile</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Project Inquiries</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#C8A96A] mb-4">Strategic Updates</h4>
              <p className="text-xs text-white/40 mb-6 font-medium">Join our network for the latest in electrical engineering and power innovation.</p>
              <div className="flex gap-2">
                <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="bg-white/5 border-white/10 focus:ring-[#C8A96A] rounded-xl h-12 text-sm" placeholder="Enterprise Email" />
                <Button onClick={subscribe} disabled={status === "saving"} className="bg-[#C8A96A] hover:bg-[#C8A96A]/90 text-[#0B1C2C] rounded-xl h-12 px-6">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              {status === "success" && <p className="mt-3 text-xs font-bold text-emerald-300">Subscribed successfully.</p>}
              {status === "error" && <p className="mt-3 text-xs font-bold text-red-300">Enter a valid email and try again.</p>}
            </div>
            
            <div className="space-y-4">
               <div className="flex items-center gap-4 group">
                 <div className="h-10 w-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#C8A96A]/10 transition-colors">
                   <Phone className="h-4 w-4 text-[#C8A96A]" />
                 </div>
                 <span className="text-xs font-bold tracking-widest">+256 392 266 552</span>
               </div>
               <div className="flex items-center gap-4 group">
                 <div className="h-10 w-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#C8A96A]/10 transition-colors">
                   <Mail className="h-4 w-4 text-[#C8A96A]" />
                 </div>
                 <span className="text-xs font-bold tracking-widest">info@chintuganda.com</span>
               </div>
            </div>
          </div>
        </div>

        {/* Brand Indicators & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             <div className="flex items-center gap-3">
               <ShieldCheck className="h-6 w-6 text-[#C8A96A]" />
               <span className="font-black text-sm tracking-tighter">ISO 9001 CERTIFIED</span>
             </div>
             <div className="flex items-center gap-3">
               <Globe className="h-6 w-6 text-[#C8A96A]" />
               <span className="font-black text-sm tracking-tighter">GLOBAL NETWORK</span>
             </div>
             <div className="flex items-center gap-3">
               <Zap className="h-6 w-6 text-[#C8A96A]" />
               <span className="font-black text-sm tracking-tighter">IEC STANDARDS</span>
             </div>
          </div>
          
          <div className="text-center lg:text-right space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              © 2026 CHINT UGANDA ENTERPRISE SOLUTIONS. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] text-white/10 font-bold">
              LICENSED DISTRIBUTOR OF CHINT GLOBAL PRODUCTS IN THE REPUBLIC OF UGANDA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
