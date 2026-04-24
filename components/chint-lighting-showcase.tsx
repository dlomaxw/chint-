"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Zap, Shield, Lightbulb } from "lucide-react"
import Image from "next/image"

export function ChintLightingShowcase() {
  const chintLightingProducts = [
    {
      title: "CHINT LED Downlights",
      model: "NLE-DL Series",
      description: "Premium LED downlights with superior light quality and energy efficiency",
      image: "/modern-led-downlight-ceiling-fixture-white.jpg",
      price: "From UGX 45,000",
      features: ["3000K-6500K CCT", "90+ CRI", "IP44 Rating", "5 Year Warranty"],
      badge: "Best Seller",
      savings: "Save 80% Energy",
    },
    {
      title: "CHINT Smart LED Strips",
      model: "NSL-RGB Series",
      description: "WiFi-enabled RGB LED strips with app control and voice command support",
      image: "/colorful-rgb-led-strip-lights-smart-home.jpg",
      price: "From UGX 85,000",
      features: ["16M Colors", "WiFi Control", "Music Sync", "Timer Function"],
      badge: "Smart Choice",
      savings: "Voice Control",
    },
    {
      title: "CHINT Panel Lights",
      model: "NPL-60 Series",
      description: "Ultra-thin LED panel lights perfect for offices and commercial spaces",
      image: "/thin-led-panel-light-office-ceiling-square.jpg",
      price: "From UGX 120,000",
      features: ["600x600mm", "40W Power", "4000lm Output", "Flicker-Free"],
      badge: "Commercial Grade",
      savings: "Long Lifespan",
    },
    {
      title: "CHINT Track Spotlights",
      model: "NTS-COB Series",
      description: "Adjustable COB LED track lights for accent and display lighting",
      image: "/adjustable-track-spotlight-led-commercial-black.jpg",
      price: "From UGX 65,000",
      features: ["15W/20W/30W", "24° Beam Angle", "360° Rotation", "Anti-Glare"],
      badge: "Professional",
      savings: "Precise Control",
    },
  ]

  const chintAdvantages = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All CHINT lighting products come with comprehensive warranty and quality certification",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Up to 80% energy savings compared to traditional lighting solutions",
    },
    {
      icon: Star,
      title: "Proven Performance",
      description: "Trusted by thousands of customers across Uganda for reliable lighting",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-2xl font-bold text-chint-blue">CHINT</div>
            <Lightbulb className="h-8 w-8 text-chint-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">CHINT Lighting Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our premium range of CHINT lighting products designed for efficiency, durability, and style. From
            smart home solutions to commercial-grade fixtures, we have the perfect lighting for every need.
          </p>
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {chintAdvantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-chint-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="h-8 w-8 text-chint-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Product Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {chintLightingProducts.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(product.title)}`
                    }}
                  />
                </div>
                <Badge className="absolute top-3 left-3 bg-chint-red text-white">{product.badge}</Badge>
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {product.savings}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-sm text-chint-blue font-medium">{product.model}</p>
                </div>
                <p className="text-gray-600 mb-3 text-sm">{product.description}</p>

                <div className="space-y-1 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <div className="w-1 h-1 bg-chint-blue rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-chint-blue">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>

                <Button className="w-full bg-chint-blue hover:bg-chint-blue/90 text-white" size="sm">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-chint-blue to-chint-blue/80 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/electrical-circuit-pattern.jpg')] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Switch to CHINT Lighting Today</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have upgraded to CHINT lighting solutions. Get professional
              installation, warranty support, and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-chint-blue hover:bg-gray-100">
                Request Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-chint-blue bg-transparent"
              >
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
