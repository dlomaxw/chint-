"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sun, Battery, Zap, Leaf, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NewEnergyPage() {
  const energyProducts = [
    {
      id: 1,
      name: "Solar Inverters",
      description: "High-efficiency solar power inverters for residential and commercial use in Uganda.",
      image: "/chint-solar-inverters.jpg",
      features: ["MPPT Technology", "Grid-Tie Capability", "Remote Monitoring", "Weather Resistant"],
      category: "Solar",
    },
    {
      id: 2,
      name: "Energy Storage",
      description: "Advanced battery storage solutions for reliable renewable energy access.",
      image: "/chint-battery-storage.jpg",
      features: ["Lithium Technology", "Smart Management", "Long Cycle Life", "Scalable Design"],
      category: "Storage",
    },
    {
      id: 3,
      name: "EV Charging Stations",
      description: "Electric vehicle charging infrastructure for the emerging e-mobility sector.",
      image: "/chint-ev-chargers.jpg",
      features: ["Fast Charging", "Smart Payment", "Remote Control", "Weather Proof"],
      category: "EV Charging",
    },
    {
      id: 4,
      name: "Wind Power Systems",
      description: "Small to medium wind turbine solutions for decentralized power generation.",
      image: "/chint-wind-power.jpg",
      features: ["Low Wind Speed", "Quiet Operation", "Grid Connection", "Maintenance Free"],
      category: "Wind",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />

      {/* Hero Section - Eco Brand Gradient */}
      <section className="bg-gradient-to-br from-[#0B1C2C] to-[#064E3B] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            >
              New Energy <span className="text-[#10B981]">Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed"
            >
              Leading the transition to sustainable and renewable power technologies for a greener Ugandan future.
            </motion.p>
            <Link href="/products">
              <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg px-10 py-7 rounded-xl transition-all hover:scale-105 shadow-xl">
                Explore Sustainable Tech
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Eco Advantages */}
      <section className="py-24 bg-white border-b border-[#0B1C2C]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Sun, title: "Solar Power", desc: "Harness the sun's energy", color: "text-yellow-500" },
              { icon: Battery, title: "Energy Storage", desc: "Store power for later", color: "text-emerald-500" },
              { icon: Zap, title: "EV Charging", desc: "E-mobility infrastructure", color: "text-blue-500" },
              { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable operations", color: "text-green-600" },
            ].map((feat, idx) => (
              <div key={idx} className="text-center group">
                <div className="h-20 w-20 bg-[#F8F9FB] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#10B981] transition-colors duration-500">
                  <feat.icon className={`h-10 w-10 ${feat.color} group-hover:text-white transition-colors duration-500`} />
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
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1C2C] mb-4">Renewable Catalog</h2>
            <div className="h-1.5 w-24 bg-[#10B981] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {energyProducts.map((product, index) => (
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
                      <Badge className="absolute top-4 right-4 bg-[#10B981] text-white border-none font-bold px-3 py-1">
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
                          <CheckCircle2 className="h-4 w-4 text-[#10B981] mr-3" />
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
