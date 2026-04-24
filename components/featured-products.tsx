"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "NM8N Series MCCB",
    category: "Low Voltage",
    price: "UGX 450,000",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600",
    isNew: true,
  },
  {
    id: 2,
    name: "Smart Energy Meter",
    category: "Instruments",
    price: "UGX 120,000",
    image: "https://images.unsplash.com/photo-1590121752254-795f28ef51d0?auto=format&fit=crop&q=80&w=600",
    isNew: false,
  },
  {
    id: 3,
    name: "Solar Inverter 5KW",
    category: "New Energy",
    price: "UGX 2,800,000",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600",
    isNew: true,
  },
  {
    id: 4,
    name: "Air Circuit Breaker",
    category: "Power T&D",
    price: "UGX 1,200,000",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600",
    isNew: false,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-[#0B1C2C] mb-6"
            >
              Featured <span className="text-[#C8A96A]">Solutions</span>
            </motion.h2>
            <p className="text-lg text-[#0B1C2C]/60">
              Discover our most sought-after products, engineered for reliability and high performance in demanding electrical environments.
            </p>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="text-[#0B1C2C] font-bold text-lg hover:bg-transparent hover:text-[#C8A96A] group transition-all">
              Browse All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-[#F8F9FB] rounded-2xl overflow-hidden mb-6 premium-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-[#C8A96A] text-[#0B1C2C] font-bold rounded-lg border-none">
                    NEW ARRIVAL
                  </Badge>
                )}

                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-[#0B1C2C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <Button size="icon" className="bg-white hover:bg-[#C8A96A] text-[#0B1C2C] rounded-full h-12 w-12 shadow-2xl transition-transform hover:scale-110">
                      <ShoppingCart className="h-5 w-5" />
                   </Button>
                   <Button size="icon" className="bg-white hover:bg-[#C8A96A] text-[#0B1C2C] rounded-full h-12 w-12 shadow-2xl transition-transform hover:scale-110">
                      <Eye className="h-5 w-5" />
                   </Button>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-[#C8A96A] uppercase tracking-widest mb-2 block">{product.category}</span>
                <h3 className="text-xl font-bold text-[#0B1C2C] mb-2 group-hover:text-[#C8A96A] transition-colors">{product.name}</h3>
                <p className="text-lg font-black text-[#0B1C2C]">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
