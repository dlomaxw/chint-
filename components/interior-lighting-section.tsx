"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Home, Building2, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function InteriorLightingSection() {
  const lightingProducts = [
    {
      title: "LED Panel Lights",
      description: "Energy-efficient ceiling panels perfect for offices and commercial spaces",
      image: "/thin-led-panel-light-office-ceiling-square.jpg",
      features: ["Energy Saving", "Long Lifespan", "Uniform Light Distribution"],
    },
    {
      title: "Smart Home Lighting",
      description: "Intelligent lighting solutions with app control and automation",
      image: "/colorful-rgb-led-strip-lights-smart-home.jpg",
      features: ["App Control", "Voice Command", "Scheduling"],
    },
    {
      title: "Track Lighting Systems",
      description: "Flexible track lighting for retail and residential applications",
      image: "/adjustable-track-spotlight-led-commercial-black.jpg",
      features: ["Adjustable Direction", "Multiple Fixtures", "Easy Installation"],
    },
    {
      title: "Decorative Fixtures",
      description: "Stylish pendant lights and chandeliers for interior design",
      image: "/elegant-crystal-chandelier-pendant-light-decorative.jpg",
      features: ["Designer Styles", "Premium Materials", "Custom Options"],
    },
  ]

  const applications = [
    {
      icon: Home,
      title: "Residential",
      description: "Complete lighting solutions for homes and apartments",
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Professional lighting for offices, retail, and hospitality",
    },
    {
      icon: Zap,
      title: "Industrial",
      description: "Heavy-duty lighting for warehouses and manufacturing",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="h-8 w-8 text-chint-blue" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Interior Lighting Solutions</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your spaces with our comprehensive range of interior lighting products. From energy-efficient LED
            solutions to smart home automation, we provide lighting that combines functionality with style.
          </p>
        </div>

        {/* Applications */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {applications.map((app, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <app.icon className="h-12 w-12 text-chint-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {lightingProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
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
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="space-y-1 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-chint-blue rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-chint-blue group-hover:text-white transition-colors bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-chint-blue rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Illuminate Your Space?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our lighting experts are ready to help you design the perfect interior lighting solution. Get professional
            consultation and custom recommendations for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-chint-blue hover:bg-gray-100">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-chint-blue bg-transparent"
              >
                View Lighting Catalog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
