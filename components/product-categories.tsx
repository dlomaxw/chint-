"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Zap, Shield, Building2, Sun, Gauge, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Low Voltage",
    description: "Advanced circuit breakers, contactors, and high-performance protection devices.",
    link: "/products/low-voltage",
  },
  {
    title: "Power T&D",
    description: "Robust transformers and high-voltage power distribution infrastructure.",
    link: "/products/power-distribution",
  },
  {
    title: "Building",
    description: "Modern switches, smart outlets, and comprehensive building automation.",
    link: "/building",
  },
  {
    title: "New Energy",
    description: "Cutting-edge solar inverters and sustainable renewable energy solutions.",
    link: "/new-energy",
  },
  {
    title: "Instruments",
    description: "Precision measuring instruments and intelligent smart metering systems.",
    link: "/instruments-meter",
  },
  {
    title: "Automation",
    description: "Integrated industrial automation and smart control systems.",
    link: "/automation",
  },
]

function AnimatedPanelShell({
  label,
  icon,
  accent,
  children,
  action,
}: {
  label: string
  icon: ReactNode
  accent: string
  children: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="mb-8 h-[204px] overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/60 to-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#0B1C2C]/70">
          <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm ${accent}`}>
            {icon}
          </span>
          {label}
        </div>
        {action}
      </div>
      {children}
    </div>
  )
}

function StatusPill({
  active,
  onLabel,
  offLabel,
  ariaLabel,
  onClick,
}: {
  active: boolean
  onLabel: string
  offLabel: string
  ariaLabel: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-black transition-all ${
        active
          ? "bg-emerald-100 text-emerald-700 shadow-sm shadow-emerald-300/50"
          : "bg-slate-100 text-slate-500"
      }`}
    >
      {active ? onLabel : offLabel}
    </button>
  )
}

function LowVoltageAnimatedPanel() {
  const [loadOn, setLoadOn] = useState(true)
  const phases = ["L1", "L2", "L3"]

  return (
    <AnimatedPanelShell
      label="Panel"
      icon={<Zap className="h-4 w-4" />}
      accent="bg-blue-600 shadow-blue-600/30"
      action={
        <StatusPill
          active={loadOn}
          onLabel="Load On"
          offLabel="Load Off"
          ariaLabel="Toggle low voltage load"
          onClick={() => setLoadOn((current) => !current)}
        />
      }
    >
      <div className="mt-4 grid grid-cols-[1fr_78px] gap-4">
        <div className="rounded-2xl bg-[#0B1C2C] p-3 shadow-inner">
          <div className="grid grid-cols-3 gap-2">
            {phases.map((phase, index) => (
              <button
                key={phase}
                type="button"
                aria-pressed={loadOn}
                aria-label={`Toggle low voltage breaker ${phase}`}
                onClick={() => setLoadOn((current) => !current)}
                className="rounded-xl bg-white/10 p-2 text-center transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <span className="block text-[10px] font-black text-white/70">{phase}</span>
                <span className="mt-2 flex h-14 items-center justify-center rounded-lg bg-white/90 px-1">
                  <motion.span
                    animate={{ y: loadOn ? -8 : 8 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22, delay: index * 0.03 }}
                    className={`block h-8 w-5 rounded-full shadow-sm transition-colors ${
                      loadOn ? "bg-blue-600" : "bg-slate-400"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{
                x: loadOn ? ["-20%", "110%"] : "-20%",
                opacity: loadOn ? [0.15, 1, 0.15] : 0.15,
              }}
              transition={{ duration: 1.35, repeat: loadOn ? Infinity : 0, ease: "easeInOut" }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-400 via-white to-emerald-300"
            />
          </div>
        </div>

        <PanelIndicator active={loadOn} activeLabel="Live" idleLabel="Safe" icon={<Zap className="h-6 w-6" />} />
      </div>
    </AnimatedPanelShell>
  )
}

function PanelIndicator({
  active,
  activeLabel,
  idleLabel,
  icon,
}: {
  active: boolean
  activeLabel: string
  idleLabel: string
  icon: ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white shadow-inner">
      <motion.div
        animate={{
          scale: active ? [1, 1.08, 1] : 1,
          boxShadow: active
            ? [
                "0 0 0 rgba(16,185,129,0)",
                "0 0 28px rgba(16,185,129,0.45)",
                "0 0 0 rgba(16,185,129,0)",
              ]
            : "0 0 0 rgba(15,23,42,0)",
        }}
        transition={{ duration: 1.4, repeat: active ? Infinity : 0, ease: "easeInOut" }}
        className={`flex h-12 w-12 items-center justify-center rounded-full ${
          active ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"
        }`}
      >
        {icon}
      </motion.div>
      <span className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#0B1C2C]/45">
        {active ? activeLabel : idleLabel}
      </span>
    </div>
  )
}

function PowerTDAnimatedPanel() {
  return (
    <AnimatedPanelShell label="Grid" icon={<Shield className="h-4 w-4" />} accent="bg-amber-500 shadow-amber-500/30">
      <div className="mt-4 rounded-2xl bg-[#0B1C2C] p-4 shadow-inner">
        <div className="grid grid-cols-[70px_1fr_70px] items-end gap-3">
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -4, 0], rotateY: [0, 10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-14 w-10 rounded-xl bg-white/90 shadow-sm"
            >
              <div className="mx-auto mt-2 h-9 w-1.5 rounded-full bg-amber-500" />
            </motion.div>
            <div className="mt-2 h-4 w-14 rounded-md bg-white/15" />
          </div>
          <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ x: ["-30%", "120%"], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-amber-400 via-white to-blue-400"
            />
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600"
            >
              <Shield className="h-7 w-7" />
            </motion.div>
            <span className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-white/55">Protected</span>
          </div>
        </div>
      </div>
    </AnimatedPanelShell>
  )
}

function BuildingAnimatedPanel() {
  const [lightOn, setLightOn] = useState(true)

  return (
    <AnimatedPanelShell
      label="Smart"
      icon={<Building2 className="h-4 w-4" />}
      accent="bg-[#0B1C2C] shadow-[#0B1C2C]/25"
      action={
        <StatusPill
          active={lightOn}
          onLabel="Light On"
          offLabel="Light Off"
          ariaLabel="Toggle smart building light"
          onClick={() => setLightOn((current) => !current)}
        />
      }
    >
      <div className="mt-4 grid grid-cols-[1fr_78px] gap-4">
        <button
          type="button"
          aria-pressed={lightOn}
          aria-label="Toggle wall switch"
          onClick={() => setLightOn((current) => !current)}
          className="rounded-2xl bg-white p-4 shadow-inner ring-1 ring-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <div className="grid grid-cols-2 gap-3">
            {[0, 1].map((item) => (
              <span key={item} className="flex h-20 items-center justify-center rounded-xl bg-slate-100 shadow-inner">
                <motion.span
                  animate={{ y: lightOn ? -9 : 9 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22, delay: item * 0.05 }}
                  className={`h-12 w-8 rounded-lg shadow-sm ${lightOn ? "bg-cyan-500" : "bg-slate-400"}`}
                />
              </span>
            ))}
          </div>
        </button>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0B1C2C] shadow-inner">
          <motion.div
            animate={{
              opacity: lightOn ? [0.75, 1, 0.75] : 0.28,
              boxShadow: lightOn
                ? [
                    "0 0 0 rgba(34,211,238,0)",
                    "0 0 32px rgba(34,211,238,0.55)",
                    "0 0 0 rgba(34,211,238,0)",
                  ]
                : "none",
            }}
            transition={{ duration: 1.4, repeat: lightOn ? Infinity : 0, ease: "easeInOut" }}
            className={`h-12 w-12 rounded-full ${lightOn ? "bg-cyan-200" : "bg-slate-600"}`}
          />
          <span className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-white/55">
            {lightOn ? "Online" : "Idle"}
          </span>
        </div>
      </div>
    </AnimatedPanelShell>
  )
}

function NewEnergyAnimatedPanel() {
  return (
    <AnimatedPanelShell label="Solar" icon={<Sun className="h-4 w-4" />} accent="bg-emerald-500 shadow-emerald-500/30">
      <div className="mt-4 grid grid-cols-[1fr_86px] gap-4">
        <div className="rounded-2xl bg-[#0B1C2C] p-4 shadow-inner">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                animate={{ y: [0, -3, 0], rotateX: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: item * 0.15 }}
                className="h-16 rounded-xl bg-gradient-to-br from-emerald-300 to-blue-500 p-1 shadow-sm"
              >
                <div className="h-full rounded-lg border border-white/30" />
              </motion.div>
            ))}
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ x: ["-25%", "115%"] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-emerald-400 via-white to-yellow-300"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-white shadow-inner">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.7, repeat: Infinity, ease: "easeInOut" },
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-yellow-500"
          >
            <Sun className="h-7 w-7" />
          </motion.div>
          <span className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#0B1C2C]/45">Charging</span>
        </div>
      </div>
    </AnimatedPanelShell>
  )
}

function InstrumentsAnimatedPanel() {
  return (
    <AnimatedPanelShell label="Meter" icon={<Gauge className="h-4 w-4" />} accent="bg-[#C8A96A] shadow-[#C8A96A]/30">
      <div className="mt-4 grid grid-cols-[106px_1fr] gap-4">
        <div className="relative flex h-[124px] items-center justify-center rounded-2xl bg-white shadow-inner">
          <Gauge className="h-16 w-16 text-[#C8A96A]" />
          <motion.span
            animate={{ rotate: [-38, 42, -16, 36, -38] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 h-1 w-11 origin-left rounded-full bg-[#0B1C2C]"
          />
        </div>
        <div className="rounded-2xl bg-[#0B1C2C] p-4 shadow-inner">
          {[76, 48, 88].map((width, index) => (
            <div key={width} className="mb-3 last:mb-0">
              <div className="mb-1 flex justify-between text-[10px] font-black uppercase tracking-[0.12em] text-white/55">
                <span>{["V", "A", "Hz"][index]}</span>
                <span>{[240, 18, 50][index]}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ width: [`${width - 18}%`, `${width}%`, `${width - 8}%`] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.16 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#C8A96A] to-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPanelShell>
  )
}

function AutomationAnimatedPanel() {
  return (
    <AnimatedPanelShell label="Control" icon={<Settings className="h-4 w-4" />} accent="bg-[#0B1C2C] shadow-[#0B1C2C]/25">
      <div className="mt-4 grid grid-cols-[1fr_96px] gap-4">
        <div className="rounded-2xl bg-[#0B1C2C] p-4 shadow-inner">
          <div className="grid grid-cols-3 items-center gap-3">
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                animate={{ rotate: item % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 5 + item, repeat: Infinity, ease: "linear" }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white"
              >
                <Settings className="h-8 w-8" />
              </motion.div>
            ))}
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ x: ["-20%", "110%"], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-400 via-white to-[#C8A96A]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-white shadow-inner">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.92, 1, 0.92] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: item * 0.22 }}
              className="mb-2 h-3 w-10 rounded-full bg-blue-500 last:mb-0"
            />
          ))}
          <span className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#0B1C2C]/45">Auto</span>
        </div>
      </div>
    </AnimatedPanelShell>
  )
}

function CategoryAnimatedPanel({ title }: { title: string }) {
  switch (title) {
    case "Low Voltage":
      return <LowVoltageAnimatedPanel />
    case "Power T&D":
      return <PowerTDAnimatedPanel />
    case "Building":
      return <BuildingAnimatedPanel />
    case "New Energy":
      return <NewEnergyAnimatedPanel />
    case "Instruments":
      return <InstrumentsAnimatedPanel />
    case "Automation":
      return <AutomationAnimatedPanel />
    default:
      return null
  }
}

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
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-white">
                <CardContent className="p-8 flex flex-col h-full">
                  <CategoryAnimatedPanel title={category.title} />
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
