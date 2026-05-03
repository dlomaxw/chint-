"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, ShieldCheck, ShoppingCart, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "NM8N Series MCCB",
    category: "Low Voltage",
    price: "UGX 450,000",
    image: "/electrical-installation-project-with-modern-equipm.jpg",
    href: "/products/low-voltage",
    specs: ["MCCB", "Industrial protection"],
    isNew: true,
  },
  {
    id: 2,
    name: "Smart Energy Meter",
    category: "Instruments",
    price: "UGX 120,000",
    image: "/chint-smart-meters.jpg",
    href: "/instruments-meter",
    specs: ["Digital readings", "Smart monitoring"],
    isNew: false,
  },
  {
    id: 3,
    name: "Solar Inverter 5KW",
    category: "New Energy",
    price: "UGX 2,800,000",
    image: "/chint-solar-inverters.jpg",
    href: "/new-energy",
    specs: ["5KW capacity", "Solar-ready"],
    isNew: true,
  },
  {
    id: 4,
    name: "Air Circuit Breaker",
    category: "Power T&D",
    price: "UGX 1,200,000",
    image: "/electrical-control-panels-industrial-automation.jpg",
    href: "/products/power-distribution",
    specs: ["Power distribution", "Panel protection"],
    isNew: false,
  },
]

export function FeaturedProducts() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F8F9FB] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F8F9FB] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#0B1C2C]/60"
            >
              <Sparkles className="h-4 w-4 text-[#C8A96A]" />
              Engineered picks
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black text-[#0B1C2C] mb-6 leading-tight"
            >
              Featured <span className="text-[#C8A96A]">Solutions</span>
            </motion.h2>
            <p className="text-lg text-[#0B1C2C]/60 leading-relaxed">
              Discover high-demand CHINT products for protection, metering, solar power, and industrial distribution, ready for homes, projects, and business sites.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <div className="rounded-2xl border border-[#F8F9FB] bg-[#F8F9FB] px-5 py-4">
              <div className="flex items-center gap-3 text-[#0B1C2C]">
                <ShieldCheck className="h-5 w-5 text-[#C8A96A]" />
                <span className="text-sm font-black">Genuine CHINT stock</span>
              </div>
            </div>
            <Button asChild variant="ghost" className="text-[#0B1C2C] font-bold text-lg hover:bg-transparent hover:text-[#C8A96A] group transition-all">
              <Link href="/products">
                Browse All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-[1.75rem] border border-[#F8F9FB] bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Link href={product.href} className="block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F8F9FB]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C]/70 via-transparent to-transparent opacity-70" />

                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-[#C8A96A] text-[#0B1C2C] font-bold rounded-lg border-none">
                      NEW ARRIVAL
                    </Badge>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 grid gap-2">
                    {product.specs.map((spec) => (
                      <span key={spec} className="inline-flex w-max items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0B1C2C] shadow-sm">
                        <Zap className="h-3 w-3 text-[#C8A96A]" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <div className="p-4">
                <span className="text-xs font-bold text-[#C8A96A] uppercase tracking-widest mb-2 block">{product.category}</span>
                <h3 className="text-xl font-bold text-[#0B1C2C] mb-2 group-hover:text-[#C8A96A] transition-colors">{product.name}</h3>
                <p className="text-lg font-black text-[#0B1C2C] mb-5">{product.price}</p>

                <div className="grid grid-cols-2 gap-3">
                  <Button asChild size="sm" className="bg-[#0B1C2C] text-white hover:bg-[#C8A96A] hover:text-[#0B1C2C]">
                    <Link href="/contact">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Quote
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="border-[#0B1C2C]/10 text-[#0B1C2C] hover:bg-[#F8F9FB]">
                    <Link href={product.href}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
