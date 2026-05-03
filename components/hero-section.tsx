"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BadgeCheck, CircuitBoard, Lightbulb, MapPin, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroAsset = "/chint-switch-premium-quality.jpg"

const floatingChips = [
  { label: "Premium Switches", className: "left-2 top-8 lg:-left-8 lg:top-16", icon: Sparkles },
  { label: "Safe Install", className: "right-2 top-24 lg:-right-8 lg:top-28", icon: ShieldCheck },
  { label: "Electric Chain", className: "left-4 bottom-20 lg:-left-10 lg:bottom-28", icon: CircuitBoard },
  { label: "CHINT Quality", className: "right-4 bottom-8 lg:-right-6 lg:bottom-16", icon: BadgeCheck },
]

const switchHotspots = [
  { id: "two-gang", label: "White wall switch", className: "left-[15%] top-[58%] h-[12%] w-[18%]" },
  { id: "three-gang", label: "Champagne three gang switch", className: "left-[36%] top-[57%] h-[13%] w-[18%]" },
  { id: "panel", label: "Flat premium switch", className: "left-[57%] top-[57%] h-[13%] w-[16%]" },
  { id: "glass", label: "Glass frame switch", className: "left-[78%] top-[57%] h-[14%] w-[17%]" },
]

function SwitchHeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null)
  const [lightOn, setLightOn] = useState(false)
  const [activeSwitch, setActiveSwitch] = useState("three-gang")
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [10, 0, -8])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [-14, 8, 14])
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [32, -38])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [1, 1, 1] : [0.94, 1.04, 0.98])
  const productY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [24, -24])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.45, 1], prefersReducedMotion ? [0.22, 0.22, 0.22] : [0.16, 0.38, 0.2])

  const toggleSwitch = (switchId: string) => {
    setActiveSwitch(switchId)
    setLightOn((value) => (activeSwitch === switchId ? !value : true))
  }

  return (
    <div ref={visualRef} className="relative mx-auto w-full max-w-[620px] lg:max-w-none" aria-label="CHINT premium switch visual">
      <motion.div
        className="absolute inset-8 rounded-full bg-[#2DAAE1]/25 blur-[72px]"
        style={{ opacity: glowOpacity }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -inset-10 rounded-full bg-[#FFE7A3] blur-[84px]"
        animate={{ opacity: lightOn ? 0.68 : 0.05, scale: lightOn ? 1.04 : 0.92 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -inset-4 rounded-[2rem] border border-white/10"
        style={{ rotateX, rotateY, y, scale, transformPerspective: 1200 }}
        aria-hidden="true"
      />

      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white p-3 shadow-[0_36px_110px_rgba(0,0,0,0.38)] lg:p-4"
        style={{
          rotateX,
          rotateY,
          y,
          scale,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: lightOn
              ? "linear-gradient(120deg, rgba(255,238,177,0.32) 0%, rgba(45,170,225,0.18) 45%, rgba(255,255,255,0.12) 70%)"
              : "linear-gradient(120deg, transparent 0%, rgba(45,170,225,0.18) 45%, transparent 62%)",
          }}
          transition={{ duration: 0.35 }}
          aria-hidden="true"
        />
        <div className="relative overflow-hidden rounded-[1.45rem] bg-white">
          <motion.div
            className="pointer-events-none absolute left-[10%] top-[14%] z-10 flex items-center gap-2 rounded-full border border-[#0B5FA5]/10 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#0B5FA5] shadow-lg backdrop-blur-sm"
            animate={{ y: lightOn && !prefersReducedMotion ? [0, -4, 0] : 0 }}
            transition={{ duration: 1.8, repeat: lightOn ? Infinity : 0, ease: "easeInOut" }}
          >
            <Lightbulb className={`h-4 w-4 ${lightOn ? "text-[#E6A700]" : "text-[#0B5FA5]/45"}`} />
            Light {lightOn ? "On" : "Off"}
          </motion.div>
          <Image
            src={heroAsset}
            alt="CHINT Uganda premium quality switch product range"
            width={1079}
            height={1079}
            priority
            className="h-auto w-full object-cover"
          />
          <motion.div
            className="pointer-events-none absolute inset-x-[8%] bottom-[20%] h-[17%] rounded-full bg-[#0B5FA5]/10 blur-2xl"
            style={{ y: productY }}
            aria-hidden="true"
          />
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 bg-[#FFF3BF] mix-blend-multiply"
            animate={{ opacity: lightOn ? 0.3 : 0 }}
            transition={{ duration: 0.35 }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-20">
            {switchHotspots.map((hotspot) => {
              const isActive = activeSwitch === hotspot.id
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  aria-pressed={lightOn && isActive}
                  aria-label={`${hotspot.label}: turn light ${lightOn && isActive ? "off" : "on"}`}
                  onClick={() => toggleSwitch(hotspot.id)}
                  className={`absolute ${hotspot.className} rounded-xl border transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2DAAE1]/40 ${
                    isActive && lightOn
                      ? "border-[#E6A700]/80 bg-[#FFE7A3]/20 shadow-[0_0_30px_rgba(230,167,0,0.42)]"
                      : "border-[#0B5FA5]/0 bg-transparent hover:border-[#0B5FA5]/25 hover:bg-[#0B5FA5]/5"
                  }`}
                >
                  <span className="sr-only">{hotspot.label}</span>
                  <span
                    className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all ${
                      isActive && lightOn ? "bg-[#E6A700] shadow-[0_0_18px_rgba(230,167,0,0.9)]" : "bg-[#0B5FA5]/0"
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingChips.map((chip, index) => {
          const Icon = chip.icon
          return (
            <motion.div
              key={chip.label}
              className={`absolute ${chip.className} flex items-center gap-2 rounded-2xl border border-white/15 bg-[#071321]/72 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-2xl backdrop-blur-md`}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, index % 2 === 0 ? -12 : 12, 0],
                      rotate: [0, index % 2 === 0 ? 1.5 : -1.5, 0],
                    }
              }
              transition={{ duration: 4.8 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon className="h-4 w-4 text-[#2DAAE1]" />
              {chip.label}
            </motion.div>
          )
        })}
      </div>
      <div className="mt-5 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setLightOn((value) => !value)}
          className="inline-flex items-center gap-3 rounded-full border border-[#0B5FA5]/15 bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#0B5FA5] shadow-sm"
          aria-pressed={lightOn}
        >
          <Lightbulb className={`h-4 w-4 ${lightOn ? "text-[#E6A700]" : "text-[#0B5FA5]"}`} />
          Tap to turn light {lightOn ? "off" : "on"}
        </button>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FBFF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(45,170,225,0.22),transparent_32%),linear-gradient(135deg,#FFFFFF_0%,#F4FAFF_47%,#EAF4FA_100%)]" />
      <div className="absolute left-0 top-0 h-full w-[42%] bg-[#0B5FA5]/[0.06]" />
      <div className="container relative z-10 mx-auto grid min-h-[85vh] items-center gap-7 px-4 py-10 sm:gap-10 sm:py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(440px,1fr)] lg:gap-12 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0B5FA5]/15 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#0B5FA5] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#E30613]" />
            CHINT Uganda Switches
          </div>

          <h1 className="mb-5 max-w-[22rem] text-4xl font-black leading-[1.02] tracking-normal text-[#0B5FA5] sm:max-w-none sm:text-5xl lg:text-7xl">
            Switch to Premium Quality
          </h1>
          <p className="mb-7 max-w-[22rem] text-base font-medium leading-relaxed text-[#0B1C2C]/70 sm:max-w-2xl sm:text-lg lg:text-2xl">
            Get reliable, safe, and stylish switches for your home or business at CHINT Uganda.
          </p>

          <div className="flex w-full max-w-[calc(100vw-2rem)] flex-col gap-4 sm:flex-row lg:max-w-none">
            <Link href="/products" className="block w-[calc(100vw-3rem)] max-w-[340px] sm:inline-flex sm:w-auto sm:max-w-none">
              <Button
                size="lg"
                className="w-full rounded-xl bg-[#0B5FA5] px-8 py-7 text-lg font-bold text-white shadow-xl shadow-[#0B5FA5]/20 transition-all hover:scale-[1.02] hover:bg-[#084E88] sm:w-auto"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" className="block w-[calc(100vw-3rem)] max-w-[340px] sm:inline-flex sm:w-auto sm:max-w-none">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-xl border-[#0B5FA5]/20 bg-white px-8 py-7 text-lg font-bold text-[#0B5FA5] shadow-sm transition-all hover:bg-[#EAF4FA] sm:w-auto"
              >
                Find a Dealer
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-14 hidden max-w-xl grid-cols-2 gap-5 border-t border-[#0B5FA5]/10 pt-8 md:grid md:grid-cols-3">
            <div>
              <div className="mb-1 text-3xl font-black text-[#0B5FA5]">500+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B1C2C]/50">Premium Products</div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-black text-[#0B5FA5]">100+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B1C2C]/50">Certified Dealers</div>
            </div>
            <div className="hidden md:block">
              <div className="mb-1 text-3xl font-black text-[#0B5FA5]">24/7</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B1C2C]/50">Support Coverage</div>
            </div>
          </div>
        </motion.div>

        <SwitchHeroVisual />
      </div>
    </section>
  )
}
