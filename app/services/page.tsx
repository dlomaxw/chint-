"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, Users, BookOpen, Phone, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "Technical Support",
      description: "24/7 technical assistance and expert troubleshooting for all CHINT installations.",
      image: "/chint-technical-support.jpg",
      features: ["24/7 Availability", "Expert Engineers", "Remote Diagnostics", "Quick Response"],
      category: "Support",
    },
    {
      id: 2,
      name: "Installation Services",
      description: "Professional commissioning and setup of power distribution and automation systems.",
      image: "/chint-installation.jpg",
      features: ["Certified Technicians", "Quality Assurance", "Safety Compliance", "Documentation"],
      category: "Installation",
    },
    {
      id: 3,
      name: "Training Programs",
      description: "Comprehensive technical training for electrical professionals and field engineers.",
      image: "/chint-training.jpg",
      features: ["Hands-on Training", "Certification", "Online Courses", "Custom Programs"],
      category: "Training",
    },
    {
      id: 4,
      name: "Maintenance",
      description: "Preventive and corrective maintenance solutions to ensure long-term reliability.",
      image: "/chint-maintenance.jpg",
      features: ["Scheduled Audits", "Emergency Repairs", "Spare Parts", "Performance Reports"],
      category: "Maintenance",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0B1C2C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            >
              Professional <span className="text-[#C8A96A]">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed"
            >
              Enterprise-grade support and engineering services to maximize the performance of your electrical infrastructure.
            </motion.p>
            <Button size="lg" className="bg-[#C8A96A] hover:bg-[#C8A96A]/90 text-[#0B1C2C] font-bold text-lg px-10 py-7 rounded-xl transition-all hover:scale-105 shadow-xl">
              Connect with Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 bg-white border-b border-[#0B1C2C]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Wrench, title: "Expert Service", desc: "Professional field technicians" },
              { icon: Users, title: "Dedicated Team", desc: "Experienced CHINT professionals" },
              { icon: BookOpen, title: "Training", desc: "Technical knowledge transfer" },
              { icon: Phone, title: "24/7 Support", desc: "Always available assistance" },
            ].map((feat, idx) => (
              <div key={idx} className="text-center group">
                <div className="h-20 w-20 bg-[#F8F9FB] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8A96A] transition-colors duration-500">
                  <feat.icon className="h-10 w-10 text-[#0B1C2C] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0B1C2C]">{feat.title}</h3>
                <p className="text-[#0B1C2C]/60 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1C2C] mb-4">Our Service Portfolio</h2>
            <div className="h-1.5 w-24 bg-[#C8A96A] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm premium-card bg-white group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 right-4 bg-[#0B1C2C] text-[#C8A96A] border-none font-bold px-3 py-1">
                        {service.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <CardTitle className="text-2xl font-black text-[#0B1C2C] mb-3">{service.name}</CardTitle>
                    <CardDescription className="mb-6 text-[#0B1C2C]/60 line-clamp-2">{service.description}</CardDescription>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm font-medium text-[#0B1C2C]/70">
                          <CheckCircle2 className="h-4 w-4 text-[#C8A96A] mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-[#0B1C2C] hover:bg-[#1a2e44] text-white font-bold h-12 rounded-xl shadow-lg shadow-[#0B1C2C]/10 transition-all group/btn">
                      Request Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
