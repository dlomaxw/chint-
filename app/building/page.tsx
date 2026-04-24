"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Lightbulb, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BuildingPage() {
  const buildingProducts = [
    {
      id: 1,
      name: "Smart Building Control",
      description: "Integrated building automation and control solutions for commercial spaces.",
      image: "/chint-building-control.jpg",
      features: ["Energy Management", "HVAC Control", "Lighting Control", "Security Integration"],
      category: "Automation",
    },
    {
      id: 2,
      name: "LED Lighting Solutions",
      description: "Energy-efficient LED lighting systems for modern urban buildings.",
      image: "/chint-led-commercial.jpg",
      features: ["Energy Saving", "Long Lifespan", "Smart Controls", "Various Designs"],
      category: "Lighting",
    },
    {
      id: 3,
      name: "Fire Safety Systems",
      description: "Comprehensive fire detection and early warning alarm systems.",
      image: "/chint-fire-safety.jpg",
      features: ["Early Detection", "Automatic Alerts", "Emergency Lighting", "Compliance Ready"],
      category: "Safety",
    },
    {
      id: 4,
      name: "Power Distribution Panels",
      description: "Reliable power distribution for high-rise and industrial building infrastructure.",
      image: "/chint-building-panels.jpg",
      features: ["High Capacity", "Modular Design", "Safety Features", "Easy Maintenance"],
      category: "Power",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0B1C2C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            >
              Building <span className="text-[#C8A96A]">Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed"
            >
              Engineering the smart, safe, and efficient infrastructure of tomorrow's urban landscape in Uganda.
            </motion.p>
            <Link href="/products">
              <Button size="lg" className="bg-[#C8A96A] hover:bg-[#C8A96A]/90 text-[#0B1C2C] font-bold text-lg px-10 py-7 rounded-xl transition-all hover:scale-105 shadow-xl">
                Explore Components
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white border-b border-[#0B1C2C]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Building2, title: "Smart Buildings", desc: "AI-driven system control" },
              { icon: Lightbulb, title: "LED Lighting", desc: "Energy-efficient illumination" },
              { icon: Shield, title: "Safety Systems", desc: "Fire & security integration" },
              { icon: Zap, title: "Power Distribution", desc: "Reliable electrical grids" },
            ].map((feat, idx) => (
              <div key={idx} className="text-center group">
                <div className="h-20 w-20 bg-[#F8F9FB] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8A96A] transition-colors duration-500">
                  <feat.icon className="h-10 w-10 text-[#0B1C2C] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0B1C2C]">{feat.title}</h3>
                <p className="text-[#0B1C2C]/60 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1C2C] mb-4">Building Catalog</h2>
            <div className="h-1.5 w-24 bg-[#C8A96A] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm premium-card bg-white group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 right-4 bg-[#0B1C2C] text-[#C8A96A] border-none font-bold px-3 py-1">
                        {product.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <CardTitle className="text-2xl font-black text-[#0B1C2C] mb-3">{product.name}</CardTitle>
                    <CardDescription className="mb-6 text-[#0B1C2C]/60 line-clamp-2">{product.description}</CardDescription>
                    
                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm font-medium text-[#0B1C2C]/70">
                          <CheckCircle2 className="h-4 w-4 text-[#C8A96A] mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Link href="/contact" className="block">
                      <Button className="w-full bg-[#0B1C2C] hover:bg-[#1a2e44] text-white font-bold h-12 rounded-xl shadow-lg shadow-[#0B1C2C]/10 transition-all group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
