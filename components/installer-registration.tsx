"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { UserCheck, Tool, ShieldCheck, ArrowRight } from "lucide-react"

export function InstallerRegistration() {
  return (
    <section className="py-24 bg-[#0B1C2C] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A96A]/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover"
              alt="Professional Electrician"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C] via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border-white/10">
              <div className="flex items-center gap-4">
                <div className="bg-[#C8A96A] p-3 rounded-xl">
                  <UserCheck className="h-6 w-6 text-[#0B1C2C]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Join 1000+ Certified Professionals</h4>
                  <p className="text-white/60 text-sm">Empowering Uganda's electrical workforce.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              Are You a <span className="text-[#C8A96A]">Professional Installer?</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Register as a certified CHINT partner and gain access to exclusive rewards, technical training, project leads, and specialized pricing for your installations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-[#C8A96A]" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Official Certification</h5>
                  <p className="text-sm text-white/40">Recognized CHINT partner status.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-[#C8A96A]" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Lead Generation</h5>
                  <p className="text-sm text-white/40">Direct customer project leads.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#C8A96A] hover:bg-[#C8A96A]/90 text-[#0B1C2C] px-10 py-7 rounded-xl font-bold text-lg shadow-xl shadow-[#C8A96A]/10 transition-all hover:scale-105">
                Register Now
              </Button>
              <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/5 px-10 py-7 rounded-xl font-bold text-lg">
                Member Login
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
