"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock, ArrowRight, Navigation, Route } from "lucide-react"

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

const primaryLocationQuery = "Plot 147-153, 6th Street Industrial Area, Kampala, Uganda"
const primaryDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(primaryLocationQuery)}`
const primaryMapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(primaryLocationQuery)}&z=17&output=embed`

export function NearbyShops() {
  return (
    <section id="nearby-dealers" className="py-24 bg-white overflow-hidden">
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

            <Button asChild className="bg-[#0B1C2C] hover:bg-[#1a2e44] text-white px-10 py-7 rounded-xl font-bold shadow-xl shadow-[#0B1C2C]/10">
              <a href="https://www.google.com/maps/search/?api=1&query=Chint+Centre+Kampala+Uganda" target="_blank" rel="noreferrer">
                View All Locations
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border-8 border-white bg-[#0B1C2C] shadow-2xl">
              <iframe
                title="Map to CHINT Centre Kampala, Plot 147-153, 6th Street Industrial Area"
                src={primaryMapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0B1C2C]/15 via-transparent to-[#C8A96A]/20" />

              <div className="pointer-events-none absolute inset-6 [perspective:900px]">
                <motion.div
                  animate={{ rotateX: [58, 63, 58], rotateZ: [-2, 2, -2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-x-8 bottom-[24%] h-36 rounded-[45%] border border-[#C8A96A]/40 bg-[#0B1C2C]/10 shadow-2xl [transform-style:preserve-3d]"
                >
                  <motion.div
                    animate={{ x: ["-12%", "12%", "-12%"], opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[14%] top-1/2 h-2 w-[72%] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 via-white to-[#C8A96A] shadow-lg shadow-[#C8A96A]/40"
                  />
                  <div className="absolute left-[14%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-blue-500 shadow-lg" />
                  <motion.div
                    animate={{ scale: [1, 1.16, 1], y: [0, -6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-[12%] top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A96A]">
                      <MapPin className="h-6 w-6 text-white" />
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              <div className="absolute left-6 top-6 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1C2C] text-white">
                    <Route className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#C8A96A]">Real Map</p>
                    <p className="text-sm font-bold text-[#0B1C2C]">Plot 147-153, 6th Street</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/30 bg-white/90 p-6 shadow-2xl backdrop-blur">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h5 className="font-bold text-[#0B1C2C]">CHINT Centre Kampala</h5>
                    <p className="text-xs text-[#0B1C2C]/60">Industrial Area, 6th Street</p>
                  </div>
                  <Button asChild size="sm" className="bg-[#C8A96A] text-[#0B1C2C] font-bold hover:bg-[#0B1C2C] hover:text-white">
                    <a href={primaryDirectionsUrl} target="_blank" rel="noreferrer">
                      <Navigation className="mr-2 h-4 w-4" />
                      Directions
                    </a>
                  </Button>
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
