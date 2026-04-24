"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gauge, BarChart3, Activity, Settings } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteDialog } from "@/components/quote-dialog"
import { ProductDetailsDialog } from "@/components/product-details-dialog"
import { useState } from "react"

export default function InstrumentsMeterPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const instruments = [
    {
      id: 1,
      name: "Digital Energy Meters",
      description: "Accurate energy measurement and monitoring solutions",
      image: "/chint-energy-meter.jpg",
      features: ["High Accuracy", "Remote Reading", "Data Logging", "Multi-Tariff"],
      category: "Energy Meters",
      specifications: {
        "Accuracy Class": "0.5S / 1.0",
        "Voltage Range": "220V / 380V",
        "Current Range": "5A - 100A",
        Communication: "RS485, Modbus",
        Display: "LCD Backlit",
        Certification: "IEC 62053-21/22",
      },
    },
    {
      id: 2,
      name: "Power Quality Analyzers",
      description: "Advanced power quality monitoring and analysis",
      image: "/chint-power-analyzer.jpg",
      features: ["Harmonic Analysis", "Real-time Monitoring", "Event Recording", "Reporting"],
      category: "Analyzers",
      specifications: {
        Measurement: "Voltage, Current, Power, Harmonics",
        Channels: "3-Phase + Neutral",
        "Sampling Rate": "256 samples/cycle",
        Memory: "8GB Internal Storage",
        Interface: 'Touch Screen 7"',
        Standards: "IEC 61000-4-30 Class A",
      },
    },
    {
      id: 3,
      name: "Current Transformers",
      description: "Precision current measurement transformers",
      image: "/chint-current-transformer.jpg",
      features: ["High Accuracy", "Wide Range", "Compact Design", "Easy Installation"],
      category: "Transformers",
      specifications: {
        "Accuracy Class": "0.5 / 1.0",
        "Primary Current": "5A - 6000A",
        "Secondary Current": "5A / 1A",
        Burden: "2.5VA - 15VA",
        Insulation: "0.66kV - 35kV",
        Standard: "IEC 61869-2",
      },
    },
    {
      id: 4,
      name: "Voltage Transformers",
      description: "Reliable voltage measurement and protection",
      image: "/chint-voltage-transformer.jpg",
      features: ["Precision Measurement", "Overload Protection", "Long Life", "Standards Compliant"],
      category: "Transformers",
      specifications: {
        "Accuracy Class": "0.5 / 1.0 / 3P",
        "Primary Voltage": "6kV - 35kV",
        "Secondary Voltage": "100V / 110V",
        "Rated Burden": "10VA - 200VA",
        "Insulation Level": "Up to 40.5kV",
        Standard: "IEC 61869-3",
      },
    },
  ]

  const handleGetQuote = (instrument: any) => {
    setSelectedProduct(instrument)
    setIsQuoteOpen(true)
  }

  const handleViewDetails = (instrument: any) => {
    setSelectedProduct(instrument)
    setIsDetailsOpen(true)
  }

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section")
    productsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />

      {/* Hero Section - Premium Brand Gradient */}
      <section className="bg-[#0B1C2C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            >
              Instruments <span className="text-[#C8A96A]">&</span> Meters
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed"
            >
              Precision measurement and monitoring solutions engineered for the most demanding electrical infrastructures in Uganda.
            </motion.p>
            <Button
              size="lg"
              className="bg-[#C8A96A] hover:bg-[#C8A96A]/90 text-[#0B1C2C] font-bold text-lg px-10 py-7 rounded-xl transition-all hover:scale-105 shadow-xl"
              onClick={scrollToProducts}
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section - Clean Cards */}
      <section className="py-24 bg-white border-b border-[#0B1C2C]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="h-20 w-20 bg-[#F8F9FB] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8A96A] transition-colors duration-500">
                <Gauge className="h-10 w-10 text-[#0B1C2C] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0B1C2C]">Precision Meters</h3>
              <p className="text-[#0B1C2C]/60 text-sm leading-relaxed">High-accuracy digital measurement for energy and power quality.</p>
            </div>
            <div className="text-center group">
              <div className="h-20 w-20 bg-[#F8F9FB] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8A96A] transition-colors duration-500">
                <BarChart3 className="h-10 w-10 text-[#0B1C2C] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0B1C2C]">Data Analysis</h3>
              <p className="text-[#0B1C2C]/60 text-sm leading-relaxed">Advanced analytics for system optimization and efficiency tracking.</p>
            </div>
            <div className="text-center group">
              <div className="h-20 w-20 bg-[#F8F9FB] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8A96A] transition-colors duration-500">
                <Activity className="h-10 w-10 text-[#0B1C2C] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0B1C2C]">Real-time Monitoring</h3>
              <p className="text-[#0B1C2C]/60 text-sm leading-relaxed">Live system status alerts and 24/7 infrastructure visibility.</p>
            </div>
            <div className="text-center group">
              <div className="h-20 w-20 bg-[#F8F9FB] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8A96A] transition-colors duration-500">
                <Settings className="h-10 w-10 text-[#0B1C2C] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0B1C2C]">Easy Configuration</h3>
              <p className="text-[#0B1C2C]/60 text-sm leading-relaxed">Intuitive interfaces designed for rapid deployment and simple use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Premium Cards */}
      <section id="products-section" className="py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1C2C] mb-4">Measurement Catalog</h2>
            <div className="h-1.5 w-24 bg-[#C8A96A] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instruments.map((instrument, index) => (
              <Card
                key={instrument.id}
                className="border-none shadow-sm premium-card bg-white group hover:shadow-2xl transition-all duration-500"
              >
                <CardHeader className="p-0">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={instrument.image || "/placeholder.svg"}
                      alt={instrument.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-[#0B1C2C] text-[#C8A96A] border-none font-bold px-3 py-1">
                      {instrument.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-[#0B1C2C] mb-3">{instrument.name}</CardTitle>
                  <CardDescription className="mb-6 text-[#0B1C2C]/60 line-clamp-2">{instrument.description}</CardDescription>
                  
                  <div className="space-y-3 mb-8">
                    {instrument.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm font-medium text-[#0B1C2C]/70">
                        <div className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-[#F8F9FB]">
                    <Button
                      className="flex-1 bg-[#0B1C2C] hover:bg-[#1a2e44] text-white font-bold rounded-xl h-12 shadow-lg shadow-[#0B1C2C]/10"
                      onClick={() => handleGetQuote(instrument)}
                    >
                      Get Quote
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#0B1C2C]/10 text-[#0B1C2C] font-bold rounded-xl h-12 hover:bg-[#F8F9FB]"
                      onClick={() => handleViewDetails(instrument)}
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <QuoteDialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen} product={selectedProduct} />
      <ProductDetailsDialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen} product={selectedProduct} />
    </div>
  )
}

// Add motion import
import { motion } from "framer-motion"
