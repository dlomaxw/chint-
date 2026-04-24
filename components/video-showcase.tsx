"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoShowcase() {
  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1558444479-c8f010524782?auto=format&fit=crop&q=80&w=2000" 
            className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="CHINT Corporate Video"
          />
          <div className="absolute inset-0 bg-[#0B1C2C]/40 group-hover:bg-[#0B1C2C]/30 transition-all flex flex-col items-center justify-center text-center p-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 bg-[#C8A96A] rounded-full flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform"
            >
              <Play className="h-10 w-10 text-[#0B1C2C] fill-[#0B1C2C]" />
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Empowering Global <br /> <span className="text-[#C8A96A]">Smart Energy</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl font-medium">
              Discover how CHINT is leading the digital energy transition and powering industrial growth across Uganda and the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
