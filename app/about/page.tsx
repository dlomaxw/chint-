"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, ShieldCheck, Globe, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0B1C2C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight">
                About <span className="text-[#C8A96A]">CHINT</span> Uganda
              </h1>
              <p className="text-xl text-white/70 leading-relaxed font-medium">
                Leading the evolution of Uganda's power infrastructure with world-class electrical engineering, 
                sustainable energy solutions, and an unyielding commitment to industrial excellence.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#C8A96A]/20 rounded-3xl blur-2xl animate-pulse" />
              <img src="/chint-about-hero.jpg" alt="Chint Uganda Team" className="relative rounded-3xl shadow-2xl border border-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Story */}
      <section className="py-24 px-4 bg-white border-b border-[#0B1C2C]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img src="/chint-company-history.jpg" alt="Chint Company History" className="rounded-3xl shadow-xl premium-shadow" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-[#0B1C2C] mb-8">Our <span className="text-[#C8A96A]">Legacy</span> of Power</h2>
              <p className="text-lg text-[#0B1C2C]/60 mb-8 leading-relaxed font-medium">
                CHINT Uganda has been at the forefront of electrical innovation for decades. Our commitment to high-precision engineering 
                and localized service has established us as the premier choice for utility providers, industrial complexes, and residential developers across the nation.
              </p>
              <p className="text-lg text-[#0B1C2C]/60 leading-relaxed font-medium">
                With state-of-the-art testing facilities and a global R&D backbone, we bridge the gap between complex power requirements 
                and efficient, reliable distribution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Premium Icons */}
      <section className="py-24 px-4 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1C2C] mb-4">The Pillars of <span className="text-[#C8A96A]">Excellence</span></h2>
            <div className="h-1.5 w-24 bg-[#C8A96A] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Every component is rigorously tested to meet and exceed international safety standards." },
              { icon: Target, title: "Precision Engineering", desc: "Driven by decades of research and development, our solutions are built for high-performance." },
              { icon: Globe, title: "Global Innovation", desc: "Integrating world-class technology with deep local expertise to serve Uganda's unique energy needs." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="border-none shadow-sm premium-card bg-white p-4 group hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="h-20 w-20 bg-[#F8F9FB] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0B1C2C] transition-colors duration-500">
                      <value.icon className="h-10 w-10 text-[#C8A96A] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0B1C2C] mb-4 group-hover:text-[#C8A96A] transition-colors">{value.title}</h3>
                    <p className="text-[#0B1C2C]/50 font-medium leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
