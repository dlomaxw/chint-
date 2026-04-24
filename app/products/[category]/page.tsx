"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { QuoteDialog } from "@/components/quote-dialog"
import { ProductDetailsDialog } from "@/components/product-details-dialog"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const productData = {
  "low-voltage": {
    title: "Low Voltage Products",
    description: "Circuit breakers, contactors, relays, and protection devices",
    products: [
      {
        name: "NB1-63 MCB 1P 20A",
        price: "UGX 15,000",
        model: "NB1-63C20",
        specs: "4.5kA breaking capacity",
        image: "/chint-mcb-1p.jpg",
        features: ["DIN rail mounting", "C-curve characteristic", "Thermal-magnetic protection", "CE certified"],
      },
      {
        name: "NB1-63 MCB 2P 32A",
        price: "UGX 28,000",
        model: "NB1-63C32",
        specs: "6kA breaking capacity",
        image: "/chint-mcb-2p.jpg",
        features: ["Double pole protection", "High breaking capacity", "Compact design", "Easy installation"],
      },
      {
        name: "NB1-63 MCB 3P 40A",
        price: "UGX 42,000",
        model: "NB1-63C40",
        specs: "10kA breaking capacity",
        image: "/chint-mcb-3p.jpg",
        features: ["Three pole protection", "Industrial grade", "Arc fault protection", "Long service life"],
      },
      {
        name: "NC1 Contactor 25A",
        price: "UGX 85,000",
        model: "NC1-2510",
        specs: "3-pole, 24V AC coil",
        image: "/chint-contactor-25a.jpg",
        features: ["Silver alloy contacts", "Low power consumption", "High switching frequency", "Auxiliary contacts"],
      },
      {
        name: "NC1 Contactor 40A",
        price: "UGX 125,000",
        model: "NC1-4010",
        specs: "3-pole, 220V AC coil",
        image: "/chint-contactor-40a.jpg",
        features: ["Heavy duty construction", "AC3 rated", "Manual override", "LED status indicator"],
      },
      {
        name: "NR2 Thermal Relay",
        price: "UGX 45,000",
        model: "NR2-25",
        specs: "16-25A adjustment range",
        image: "/chint-thermal-relay.jpg",
        features: ["Adjustable current range", "Manual/Auto reset", "Phase failure protection", "Compact size"],
      },
    ],
  },
  "power-distribution": {
    title: "Power Distribution",
    description: "Transformers, switchgear, and power transmission equipment",
    products: [
      {
        name: "Distribution Panel 12-Way",
        price: "UGX 180,000",
        model: "NDB-12",
        specs: "IP40 protection, DIN rail",
        image: "/chint-panel-12way.jpg",
        features: ["12-way distribution", "Main switch included", "DIN rail mounting", "Cable management"],
      },
      {
        name: "Load Center 24-Way",
        price: "UGX 320,000",
        model: "NLC-24",
        specs: "Main switch included",
        image: "/chint-loadcenter-24way.jpg",
        features: ["24-circuit capacity", "100A main breaker", "Ground/neutral bars", "NEMA rated"],
      },
      {
        name: "Meter Box Single Phase",
        price: "UGX 65,000",
        model: "NMB-1P",
        specs: "Polycarbonate housing",
        image: "/chint-meterbox-1p.jpg",
        features: ["Weather resistant", "Transparent cover", "Tamper proof", "Easy meter access"],
      },
      {
        name: "Changeover Switch 63A",
        price: "UGX 450,000",
        model: "NGL-63",
        specs: "Manual transfer switch",
        image: "/chint-changeover-63a.jpg",
        features: ["Manual operation", "3-position switch", "Mechanical interlock", "Generator ready"],
      },
      {
        name: "Isolator Switch 100A",
        price: "UGX 280,000",
        model: "NIS-100",
        specs: "3-pole, lockable handle",
        image: "/chint-isolator-100a.jpg",
        features: ["Lockable handle", "Visible contacts", "High breaking capacity", "Panel mounting"],
      },
    ],
  },
  "building": {
    title: "Building Automation",
    description: "Smart switches, outlets, and building control systems",
    products: [
      { name: "1-Gang Switch White", price: "UGX 12,000", model: "NEW7-1G", specs: "10A, 250V AC", image: "/chint-switch-1g.jpg", features: ["Sleek design", "Durable material", "Easy wiring", "Flame retardant"] },
      { name: "2-Gang Switch White", price: "UGX 18,000", model: "NEW7-2G", specs: "10A, 250V AC", image: "/chint-switch-2g.jpg", features: ["Dual control", "Anti-UV coating", "Soft touch", "BS standard"] },
      { name: "3-Pin Socket 13A", price: "UGX 15,000", model: "NEW7-13A", specs: "BS standard, earthed", image: "/chint-socket-13a.jpg", features: ["Safety shutter", "Copper terminals", "Standard fit", "Earthed protection"] },
      { name: "USB Socket Dual Port", price: "UGX 35,000", model: "NEW7-USB", specs: "2.4A charging capacity", image: "/chint-socket-usb.jpg", features: ["Fast charging", "Dual port", "Smart circuit", "Overload protection"] },
      { name: "Dimmer Switch 400W", price: "UGX 45,000", model: "NEW7-DIM", specs: "LED/Incandescent compatible", image: "/chint-dimmer.jpg", features: ["Smooth dimming", "Quiet operation", "Universal compatibility", "Overheat protection"] },
    ],
  },
  "solar": {
    title: "Solar & Renewable Energy",
    description: "Solar inverters, charge controllers, and renewable energy solutions",
    products: [
      { name: "Solar Inverter 3kW", price: "UGX 1,200,000", model: "CPS-3000", specs: "MPPT, Grid-tie", image: "/chint-inverter-3kw.jpg", features: ["High efficiency", "MPPT tracking", "WiFi monitoring", "IP65 rated"] },
      { name: "Solar Inverter 5kW", price: "UGX 1,800,000", model: "CPS-5000", specs: "Hybrid, Battery ready", image: "/chint-inverter-5kw.jpg", features: ["Hybrid operation", "Battery compatible", "Smart load management", "Remote upgrade"] },
      { name: "Charge Controller 40A", price: "UGX 350,000", model: "MPPT-40", specs: "12V/24V auto detect", image: "/chint-charge-controller.jpg", features: ["MPPT technology", "LCD display", "Multiple protections", "High conversion"] },
      { name: "DC Isolator 32A", price: "UGX 85,000", model: "CPS-ISO32", specs: "1000V DC rated", image: "/chint-dc-isolator.jpg", features: ["Safe disconnection", "High voltage rated", "Padlockable", "Compact design"] },
      { name: "AC Combiner Box", price: "UGX 180,000", model: "CPS-ACB", specs: "6-way, surge protection", image: "/chint-combiner-box.jpg", features: ["Built-in SPD", "Pre-wired", "Waterproof", "Easy connection"] },
    ],
  },
  "instruments": {
    title: "Measuring Instruments",
    description: "Digital meters, monitoring devices, and measurement solutions",
    products: [
      { name: "Digital Multimeter", price: "UGX 120,000", model: "DT830D", specs: "AC/DC voltage, current, resistance", image: "/chint-multimeter.jpg", features: ["Large display", "Overload protection", "Auto power off", "Data hold"] },
      { name: "Power Meter 3-Phase", price: "UGX 280,000", model: "PM-3P", specs: "LCD display, RS485", image: "/chint-powermeter-3p.jpg", features: ["Real-time monitoring", "High accuracy", "DIN rail mount", "Modbus support"] },
      { name: "Energy Meter Single Phase", price: "UGX 85,000", model: "DDS238", specs: "kWh measurement, DIN rail", image: "/chint-energymeter-1p.jpg", features: ["LCD readout", "Backlit", "Bi-directional", "Small footprint"] },
      { name: "Current Transformer 100/5A", price: "UGX 45,000", model: "CT-100", specs: "Class 1.0 accuracy", image: "/chint-ct.jpg", features: ["Precision winding", "High insulation", "Standard ratio", "Easy mounting"] },
      { name: "Voltage Meter Digital", price: "UGX 35,000", model: "DVM-96", specs: "96x96mm panel mount", image: "/chint-voltmeter.jpg", features: ["Bright LED", "Panel mount", "Wide range", "Low consumption"] },
    ],
  },
  "automation": {
    title: "Industrial Automation",
    description: "PLCs, HMIs, drives, and industrial control systems",
    products: [
      { name: "PLC 16 I/O", price: "UGX 450,000", model: "NE-PLC16", specs: "8 digital inputs, 8 outputs", image: "/chint-plc.jpg", features: ["High speed", "Expandable", "Standard protocols", "Compact size"] },
      { name: 'HMI Touch Panel 7"', price: "UGX 680,000", model: "NE-HMI7", specs: "Color TFT, Ethernet", image: "/chint-hmi.jpg", features: ["Touch interface", "Color display", "Multi-com ports", "Data logging"] },
      { name: "Variable Drive 2.2kW", price: "UGX 850,000", model: "NVF2-2.2", specs: "3-phase, vector control", image: "/chint-vfd.jpg", features: ["Energy saving", "Vector control", "Smooth start", "Built-in PID"] },
      { name: "Servo Motor 1kW", price: "UGX 1,200,000", model: "NSM-1000", specs: "High precision, encoder", image: "/chint-servo.jpg", features: ["High torque", "Precise positioning", "Fast response", "Low heat"] },
      { name: "Control Panel IP65", price: "UGX 320,000", model: "NCP-400", specs: "400x300x200mm, steel", image: "/chint-enclosure.jpg", features: ["IP65 rated", "Steel construction", "Removable plate", "Key lock"] },
    ],
  },
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false)
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const category = productData[params.category as keyof typeof productData]

  if (!category) {
    notFound()
  }

  const handleGetQuote = (product: any) => {
    setSelectedProduct(product)
    setQuoteDialogOpen(true)
  }

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product)
    setDetailsDialogOpen(true)
  }

  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <Header />

      {/* Hero Section - Premium Navy */}
      <section className="bg-[#0B1C2C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center text-[#C8A96A] hover:text-white mb-8 font-bold transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Catalog
          </Link>
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black mb-6 tracking-tight"
            >
              {category.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              {category.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {category.products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm premium-card bg-white group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-[#0B1C2C] text-[#C8A96A] border-none font-bold px-3 py-1">
                      {product.model}
                    </Badge>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-[#0B1C2C] mb-2">{product.name}</h3>
                    <p className="text-[#0B1C2C]/50 font-medium mb-4">{product.specs}</p>
                    <div className="text-2xl font-black text-[#0B1C2C] mb-6">{product.price}</div>

                    <div className="space-y-3 mb-8">
                      <h4 className="font-bold text-[#0B1C2C] text-sm uppercase tracking-wider">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm font-medium text-[#0B1C2C]/70">
                            <CheckCircle2 className="h-4 w-4 text-[#C8A96A] mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-[#F8F9FB]">
                      <Button
                        onClick={() => handleGetQuote(product)}
                        className="flex-1 bg-[#0B1C2C] hover:bg-[#1a2e44] text-white font-bold h-12 rounded-xl shadow-lg shadow-[#0B1C2C]/10 transition-transform active:scale-95"
                      >
                        Get Quote
                      </Button>
                      <Button
                        onClick={() => handleViewDetails(product)}
                        variant="outline"
                        className="flex-1 border-[#0B1C2C]/10 text-[#0B1C2C] font-bold h-12 rounded-xl hover:bg-[#F8F9FB] transition-colors"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <>
          <QuoteDialog
            open={quoteDialogOpen}
            onOpenChange={setQuoteDialogOpen}
            productName={selectedProduct.name}
            productModel={selectedProduct.model}
            productPrice={selectedProduct.price}
          />
          <ProductDetailsDialog
            open={detailsDialogOpen}
            onOpenChange={setDetailsDialogOpen}
            product={selectedProduct}
            onGetQuote={() => {
              setDetailsDialogOpen(false)
              setQuoteDialogOpen(true)
            }}
          />
        </>
      )}

      <Footer />
    </main>
  )
}
