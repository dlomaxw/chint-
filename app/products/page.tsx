"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"

const productCategories = [
  {
    title: "Low Voltage Products",
    description: "Circuit breakers, contactors, relays, and protection devices",
    image: "/chint-low-voltage-products.jpg",
    slug: "low-voltage",
    products: [
      { name: "NB1-63 MCB 1P 20A", price: "UGX 15,000", model: "NB1-63C20", specs: "4.5kA breaking capacity" },
      { name: "NB1-63 MCB 2P 32A", price: "UGX 28,000", model: "NB1-63C32", specs: "6kA breaking capacity" },
      { name: "NB1-63 MCB 3P 40A", price: "UGX 42,000", model: "NB1-63C40", specs: "10kA breaking capacity" },
      { name: "NC1 Contactor 25A", price: "UGX 85,000", model: "NC1-2510", specs: "3-pole, 24V AC coil" },
      { name: "NC1 Contactor 40A", price: "UGX 125,000", model: "NC1-4010", specs: "3-pole, 220V AC coil" },
      { name: "NR2 Thermal Relay", price: "UGX 45,000", model: "NR2-25", specs: "16-25A adjustment range" },
    ],
  },
  {
    title: "Power Distribution",
    description: "Transformers, switchgear, and power transmission equipment",
    image: "/chint-circuit-breakers-electrical-panel-equipment.jpg",
    slug: "power-distribution",
    products: [
      { name: "Distribution Panel 12-Way", price: "UGX 180,000", model: "NDB-12", specs: "IP40 protection, DIN rail" },
      { name: "Load Center 24-Way", price: "UGX 320,000", model: "NLC-24", specs: "Main switch included" },
      { name: "Meter Box Single Phase", price: "UGX 65,000", model: "NMB-1P", specs: "Polycarbonate housing" },
      { name: "Changeover Switch 63A", price: "UGX 450,000", model: "NGL-63", specs: "Manual transfer switch" },
      { name: "Isolator Switch 100A", price: "UGX 280,000", model: "NIS-100", specs: "3-pole, lockable handle" },
    ],
  },
  {
    title: "Building Automation",
    description: "Smart switches, outlets, and building control systems",
    image: "/chint-building-products.jpg",
    slug: "building",
    products: [
      { name: "1-Gang Switch White", price: "UGX 12,000", model: "NEW7-1G", specs: "10A, 250V AC" },
      { name: "2-Gang Switch White", price: "UGX 18,000", model: "NEW7-2G", specs: "10A, 250V AC" },
      { name: "3-Pin Socket 13A", price: "UGX 15,000", model: "NEW7-13A", specs: "BS standard, earthed" },
      { name: "USB Socket Dual Port", price: "UGX 35,000", model: "NEW7-USB", specs: "2.4A charging capacity" },
      { name: "Dimmer Switch 400W", price: "UGX 45,000", model: "NEW7-DIM", specs: "LED/Incandescent compatible" },
    ],
  },
  {
    title: "Solar & Renewable Energy",
    description: "Solar inverters, charge controllers, and renewable energy solutions",
    image: "/chint-solar-products.jpg",
    slug: "solar",
    products: [
      { name: "Solar Inverter 3kW", price: "UGX 1,200,000", model: "CPS-3000", specs: "MPPT, Grid-tie" },
      { name: "Solar Inverter 5kW", price: "UGX 1,800,000", model: "CPS-5000", specs: "Hybrid, Battery ready" },
      { name: "Charge Controller 40A", price: "UGX 350,000", model: "MPPT-40", specs: "12V/24V auto detect" },
      { name: "DC Isolator 32A", price: "UGX 85,000", model: "CPS-ISO32", specs: "1000V DC rated" },
      { name: "AC Combiner Box", price: "UGX 180,000", model: "CPS-ACB", specs: "6-way, surge protection" },
    ],
  },
  {
    title: "Measuring Instruments",
    description: "Digital meters, monitoring devices, and measurement solutions",
    image: "/chint-measuring-instruments.jpg",
    slug: "instruments",
    products: [
      {
        name: "Digital Multimeter",
        price: "UGX 120,000",
        model: "DT830D",
        specs: "AC/DC voltage, current, resistance",
      },
      { name: "Power Meter 3-Phase", price: "UGX 280,000", model: "PM-3P", specs: "LCD display, RS485" },
      { name: "Energy Meter Single Phase", price: "UGX 85,000", model: "DDS238", specs: "kWh measurement, DIN rail" },
      { name: "Current Transformer 100/5A", price: "UGX 45,000", model: "CT-100", specs: "Class 1.0 accuracy" },
      { name: "Voltage Meter Digital", price: "UGX 35,000", model: "DVM-96", specs: "96x96mm panel mount" },
    ],
  },
  {
    title: "Industrial Automation",
    description: "PLCs, HMIs, drives, and industrial control systems",
    image: "/chint-automation-products.jpg",
    slug: "automation",
    products: [
      { name: "PLC 16 I/O", price: "UGX 450,000", model: "NE-PLC16", specs: "8 digital inputs, 8 outputs" },
      { name: 'HMI Touch Panel 7"', price: "UGX 680,000", model: "NE-HMI7", specs: "Color TFT, Ethernet" },
      { name: "Variable Drive 2.2kW", price: "UGX 850,000", model: "NVF2-2.2", specs: "3-phase, vector control" },
      { name: "Servo Motor 1kW", price: "UGX 1,200,000", model: "NSM-1000", specs: "High precision, encoder" },
      { name: "Control Panel IP65", price: "UGX 320,000", model: "NCP-400", specs: "400x300x200mm, steel" },
    ],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0B1C2C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            Product <span className="text-[#C8A96A]">Catalog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our comprehensive range of high-performance electrical solutions for residential, commercial, and industrial sectors.
          </motion.p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-sm premium-card group bg-white hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-black mb-4 text-[#0B1C2C] group-hover:text-[#C8A96A] transition-colors">{category.title}</h3>
                          <p className="text-[#0B1C2C]/50 font-medium mb-8 line-clamp-2">{category.description}</p>
                          
                          <div className="space-y-4 mb-8">
                            {category.products.slice(0, 3).map((product, idx) => (
                              <div key={idx} className="flex items-start group/item">
                                <div className="h-5 w-5 rounded-full bg-[#F8F9FB] flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-[#C8A96A] transition-colors">
                                  <ChevronRight className="h-3 w-3 text-[#0B1C2C] group-hover/item:text-white" />
                                </div>
                                <div>
                                  <div className="font-bold text-[#0B1C2C] text-sm">{product.name}</div>
                                  <div className="text-xs text-[#0B1C2C]/40 font-bold uppercase tracking-wider">
                                    {product.model}
                                  </div>
                                </div>
                              </div>
                            ))}
                            {category.products.length > 3 && (
                              <div className="text-xs text-[#C8A96A] font-black uppercase tracking-widest pl-8">
                                +{category.products.length - 3} More specialized units
                              </div>
                            )}
                          </div>
                        </div>
                        <Link href={
                          category.slug === "building" ? "/building" :
                          category.slug === "solar" ? "/new-energy" :
                          category.slug === "instruments" ? "/instruments-meter" :
                          category.slug === "automation" ? "/automation" :
                          `/products/${category.slug}`
                        }>
                          <Button className="w-full bg-[#0B1C2C] hover:bg-[#1a2e44] text-white font-bold h-12 rounded-xl shadow-lg shadow-[#0B1C2C]/10 transition-all group/btn">
                            Explore Department
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
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
