"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const trendingItems = [
  {
    title: "Circuit Breakers",
    image: "/chint-circuit-breakers.jpg",
    description: "High-quality protection devices",
  },
  {
    title: "Transformers",
    image: "/chint-circuit-breakers-electrical-panel-equipment.jpg",
    description: "Power distribution transformers",
  },
  {
    title: "Solar Inverters",
    image: "/chint-solar-inverters.jpg",
    description: "Renewable energy solutions",
  },
  {
    title: "Control Panels",
    image: "/chint-building-automation.jpg",
    description: "Industrial control systems",
  },
  {
    title: "Smart Meters",
    image: "/chint-smart-meters.jpg",
    description: "Advanced metering solutions",
  },
]

export function TrendingCategories() {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">Trending Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trendingItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=160&width=300&text=${encodeURIComponent(item.title)}`
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
