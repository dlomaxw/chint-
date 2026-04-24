"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const shops = [
  {
    name: "CHINT Centre Kampala",
    address: "Plot 147-153, 6th Street Industrial Area, Kampala",
    phone: "+256 392 266 552",
    hours: "8:00 AM - 5:30 PM",
  },
  {
    name: "Industrial Hub Outlet",
    address: "Kibira Road, Industrial Area, Kampala",
    phone: "+256 392 266 500",
    hours: "8:30 AM - 5:00 PM",
  }
]

export function NearbyShops() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1C2C] mb-8 leading-tight">
              Find a <span className="text-[#C8A96A]">CHINT Partner</span> Near You
            </h2>
            <p className="text-lg text-[#0B1C2C]/60 mb-10 leading-relaxed">
              Our extensive network of certified dealers and distribution centers across Uganda ensures you have immediate access to genuine CHINT products and expert technical support.
            </p>
            
            <div className="space-y-6 mb-12">
              {shops.map((shop, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#F8F9FB] hover:border-[#C8A96A]/30 transition-all group">
                  <h4 className="text-xl font-bold text-[#0B1C2C] mb-3 group-hover:text-[#C8A96A] transition-colors">{shop.name}</h4>
                  <div className="space-y-2 text-sm text-[#0B1C2C]/60">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-[#C8A96A]" />
                      <span>{shop.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-[#C8A96A]" />
                      <span>{shop.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-[#C8A96A]" />
                      <span>{shop.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#0B1C2C] hover:bg-[#1a2e44] text-white px-10 py-7 rounded-xl font-bold shadow-xl shadow-[#0B1C2C]/10">
              View All Locations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mock Map Preview with Premium Styling */}
            <div className="aspect-square bg-[#E5E7EB] rounded-3xl overflow-hidden relative shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale opacity-50"
                alt="Map Background"
              />
              <div className="absolute inset-0 bg-[#0B1C2C]/10 mix-blend-multiply" />
              
              {/* Map Pins */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 p-3 bg-white rounded-full shadow-2xl"
              >
                <div className="bg-[#C8A96A] p-2 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </motion.div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-[#0B1C2C]">CHINT Centre Kampala</h5>
                    <p className="text-xs text-[#0B1C2C]/60">Industrial Area, 6th Street</p>
                  </div>
                  <Button size="sm" className="bg-[#C8A96A] text-[#0B1C2C] font-bold">Directions</Button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C8A96A]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#0B1C2C]/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
