"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Zap, Shield, Building2, Sun, Gauge, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Low Voltage",
    icon: <Zap className="h-10 w-10" />,
    description: "Advanced circuit breakers, contactors, and high-performance protection devices.",
    link: "/products/low-voltage",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Power T&D",
    icon: <Shield className="h-10 w-10" />,
    description: "Robust transformers and high-voltage power distribution infrastructure.",
    link: "/products/power-distribution",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Building",
    icon: <Building2 className="h-10 w-10" />,
    description: "Modern switches, smart outlets, and comprehensive building automation.",
    link: "/building",
    color: "bg-[#F8F9FB] text-[#0B1C2C]",
  },
  {
    title: "New Energy",
    icon: <Sun className="h-10 w-10" />,
    description: "Cutting-edge solar inverters and sustainable renewable energy solutions.",
    link: "/new-energy",
    color: "bg-[#F8F9FB] text-[#10B981]",
  },
  {
    title: "Instruments",
    icon: <Gauge className="h-10 w-10" />,
    description: "Precision measuring instruments and intelligent smart metering systems.",
    link: "/instruments-meter",
    color: "bg-[#F8F9FB] text-[#C8A96A]",
  },
  {
    title: "Automation",
    icon: <Settings className="h-10 w-10" />,
    description: "Integrated industrial automation and smart control systems.",
    link: "/automation",
    color: "bg-[#F8F9FB] text-[#0B1C2C]",
  },
]

export function ProductCategories() {
  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-[#0B1C2C] mb-6"
          >
            Shop All Departments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#0B1C2C]/60"
          >
            Explore our comprehensive range of high-performance electrical equipment and smart energy solutions tailored for every sector.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-white">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className={`w-20 h-20 rounded-2xl ${category.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1C2C] mb-4 group-hover:text-[#C8A96A] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-[#0B1C2C]/60 mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-[#F8F9FB]">
                    <Link href={category.link} className="flex items-center text-[#0B1C2C] font-bold group-hover:gap-2 transition-all">
                      Explore Category
                      <ArrowRight className="ml-2 h-4 w-4 text-[#C8A96A]" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/products">
            <Button 
              variant="outline" 
              className="border-2 border-[#0B1C2C] text-[#0B1C2C] font-bold px-10 py-6 rounded-xl hover:bg-[#0B1C2C] hover:text-white transition-all"
            >
              View Full Catalogue
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
