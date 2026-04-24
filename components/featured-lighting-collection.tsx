"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FeaturedLightingCollection() {
  const featuredLights = [
    {
      title: "Triple Globe Floor Lamp",
      description: "Elegant brass floor lamp with three white globe shades",
      image: "/elegant-brass-floor-lamp-three-white-globe-shades.jpg",
      price: "From UGX 450,000",
      category: "Floor Lamps",
      badge: "Premium",
    },
    {
      title: "Brass Ceiling Flush Mount",
      description: "Luxury ceiling light with glass rod detailing",
      image: "/luxury-brass-ceiling-flush-mount-glass-rods.jpg",
      price: "From UGX 380,000",
      category: "Ceiling Lights",
      badge: "Luxury",
    },
    {
      title: "Arc Floor Lamp",
      description: "Modern black arc lamp with adjustable spherical shade",
      image: "/modern-black-arc-floor-lamp-spherical-shade.jpg",
      price: "From UGX 320,000",
      category: "Floor Lamps",
      badge: "Modern",
    },
    {
      title: "Arc Lamp with Shelf",
      description: "Functional arc lamp with integrated side table",
      image: "/arc-floor-lamp-with-integrated-side-table-shelf.jpg",
      price: "From UGX 420,000",
      category: "Floor Lamps",
      badge: "Functional",
    },
    {
      title: "Modern Ceiling Chandelier",
      description: "Contemporary brass chandelier with multiple globe lights",
      image: "/contemporary-brass-chandelier-multiple-globe-light.jpg",
      price: "From UGX 550,000",
      category: "Chandeliers",
      badge: "Statement",
    },
    {
      title: "Interlocking Ring Ceiling Light",
      description: "Artistic ceiling light with modern ring design",
      image: "/artistic-ceiling-light-interlocking-rings-modern.jpg",
      price: "From UGX 480,000",
      category: "Ceiling Lights",
      badge: "Designer",
    },
    {
      title: "Simple Ceiling Flush Mount",
      description: "Minimalist white round ceiling light for any space",
      image: "/minimalist-white-round-ceiling-flush-mount-light-f.jpg",
      price: "From UGX 85,000",
      category: "Ceiling Lights",
      badge: "Best Value",
    },
    {
      title: "Triple Pendant Floor Lamp",
      description: "Industrial-style floor lamp with glass pendant shades",
      image: "/industrial-style-floor-lamp-three-glass-pendant-sh.jpg",
      price: "From UGX 520,000",
      category: "Floor Lamps",
      badge: "Industrial",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Lighting Collection</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our curated selection of premium lighting fixtures. From elegant floor lamps to stunning ceiling
            lights, find the perfect illumination for your space.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredLights.map((product, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-smooth overflow-hidden border-0 shadow-lg hover:-translate-y-2 animate-fade-in-up animate-delay-${Math.min(index * 100, 600)}`}
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chint-blue/0 to-transparent group-hover:from-chint-blue/10 transition-smooth" />
                </div>
                <Badge className="absolute top-3 left-3 bg-chint-blue text-white shadow-lg">{product.badge}</Badge>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700 shadow-md">
                  {product.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-chint-blue transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-chint-blue">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>

                <Link href="/products">
                  <Button
                    className="w-full bg-chint-blue hover:bg-chint-blue-dark text-white transition-smooth hover:shadow-lg"
                    size="sm"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-chint-blue to-chint-blue-light rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Illuminate Your Space with Style</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Browse our complete lighting catalog or visit our showroom to see these beautiful fixtures in person. Our
            lighting experts are ready to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-chint-blue hover:bg-gray-100 transition-smooth hover:scale-105 hover:shadow-lg"
              >
                View Full Catalog
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-chint-blue bg-transparent transition-smooth hover:scale-105"
              >
                Visit Showroom
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
