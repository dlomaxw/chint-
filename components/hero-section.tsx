"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const heroImages = [
  {
    src: "/hero-facility.png",
    alt: "Chint Centre Building - Modern electrical equipment facility",
    title: "POWERING UGANDA'S ELECTRICAL FUTURE",
    subtitle: "Smart energy solutions, certified distributors, and real-time product access.",
  },
  {
    src: "/hero-power.png",
    alt: "Chint Power Distribution Equipment",
    title: "RELIABLE POWER SOLUTIONS",
    subtitle: "Industrial grade systems built for performance and durability.",
  },
  {
    src: "/hero-solar.png",
    alt: "Chint Solar Solutions",
    title: "CLEAN ENERGY FOR TOMORROW",
    subtitle: "Advanced solar inverters and panels for a sustainable future.",
  },
]

export function HeroSection() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 6000)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    return () => {
      clearInterval(interval)
    }
  }, [api])

  return (
    <section className="relative min-h-[85vh] flex items-center bg-chint-navy overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-[85vh] -ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0 h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Improved Dark Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2C]/90 via-[#0B1C2C]/60 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-white leading-[1.1]">
                {heroImages[current].title}
              </h1>
              <p className="text-xl lg:text-2xl mb-10 text-white/90 font-medium leading-relaxed max-w-2xl">
                {heroImages[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-[#C8A96A] hover:bg-[#C8A96A]/90 text-[#0B1C2C] font-bold text-lg px-8 py-7 rounded-xl transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md font-bold text-lg px-8 py-7 rounded-xl transition-all w-full sm:w-auto"
              >
                Find a Dealer
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Animated Stats Block */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <div className="text-[#C8A96A] text-3xl font-bold mb-1">500+</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Premium Products</div>
            </div>
            <div>
              <div className="text-[#C8A96A] text-3xl font-bold mb-1">100+</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Certified Dealers</div>
            </div>
            <div className="hidden md:block">
              <div className="text-[#C8A96A] text-3xl font-bold mb-1">24/7</div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">Support Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Carousel Navigation Indicators */}
      <div className="absolute bottom-10 right-10 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === current ? "bg-[#C8A96A] w-12" : "bg-white/30 w-6 hover:bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
