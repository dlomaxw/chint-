"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Activity, Play, Power, ShieldCheck, Zap } from "lucide-react"

export function VideoShowcase() {
  const [isPowered, setIsPowered] = useState(true)

  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0B1C2C] shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_34%,rgba(0,118,190,0.16))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative grid min-h-[620px] items-center gap-10 px-6 py-12 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
            <div className="relative z-10 max-w-xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/75 lg:mx-0"
              >
                <Zap className="h-4 w-4 text-[#C8A96A]" />
                NXB-63 MCB
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
              >
                Empowering Global <span className="text-[#C8A96A]">Smart Energy</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/75 lg:mx-0"
              >
                Discover how CHINT is leading the digital energy transition and powering industrial growth across Uganda and the world.
              </motion.p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <button
                  type="button"
                  aria-pressed={isPowered}
                  aria-label="Toggle NXB-63 breaker animation"
                  onClick={() => setIsPowered((current) => !current)}
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-[#C8A96A] px-6 font-black text-[#0B1C2C] shadow-xl shadow-[#C8A96A]/20 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Power className="h-5 w-5" />
                  {isPowered ? "Switch Off Demo" : "Switch On Demo"}
                </button>
                <div className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 text-sm font-bold text-white/80">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  {isPowered ? "Protected Circuit Live" : "Circuit Isolated"}
                </div>
              </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-2xl [perspective:1200px]">
              <motion.div
                animate={{ rotateX: isPowered ? [6, 1, 6] : 8, rotateY: isPowered ? [-12, -4, -12] : -16, y: isPowered ? [0, -10, 0] : 0 }}
                transition={{ duration: 5.5, repeat: isPowered ? Infinity : 0, ease: "easeInOut" }}
                className="relative mx-auto aspect-[1.08/1] max-h-[520px] rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-2xl [transform-style:preserve-3d]"
              >
                <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-[#F8F9FB]/95 shadow-inner" />

                <motion.div
                  animate={{ opacity: isPowered ? [0.25, 0.8, 0.25] : 0.12 }}
                  transition={{ duration: 1.7, repeat: isPowered ? Infinity : 0, ease: "easeInOut" }}
                  className="absolute left-8 right-8 top-1/2 h-2 -translate-y-1/2 overflow-hidden rounded-full bg-[#0B1C2C]/10"
                >
                  <motion.div
                    animate={{ x: isPowered ? ["-30%", "130%"] : "-30%" }}
                    transition={{ duration: 1.35, repeat: isPowered ? Infinity : 0, ease: "easeInOut" }}
                    className="h-full w-1/3 rounded-full bg-gradient-to-r from-blue-500 via-white to-emerald-300"
                  />
                </motion.div>

                <motion.img
                  src="/chint-nxb-63-c63-4p-mcb.png"
                  alt="CHINT NXB-63 C63 4P miniature circuit breaker"
                  draggable={false}
                  animate={{ scale: isPowered ? [1, 1.025, 1] : 0.98 }}
                  transition={{ duration: 2.6, repeat: isPowered ? Infinity : 0, ease: "easeInOut" }}
                  className="relative z-10 mx-auto h-full max-h-[470px] w-auto select-none object-contain drop-shadow-2xl"
                />

                <motion.div
                  animate={{ y: isPowered ? -8 : 8, opacity: isPowered ? 1 : 0.72 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="absolute bottom-[18%] left-1/2 z-20 h-12 w-[58%] -translate-x-1/2 rounded-xl bg-blue-600/85 shadow-lg shadow-blue-600/35"
                />

                <div className="absolute left-6 top-6 z-20 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{ scale: isPowered ? [1, 1.16, 1] : 1 }}
                      transition={{ duration: 1, repeat: isPowered ? Infinity : 0 }}
                      className={`h-3 w-3 rounded-full ${isPowered ? "bg-emerald-500" : "bg-slate-400"}`}
                    />
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-[#0B1C2C]/70">
                      {isPowered ? "Live Load" : "Off Load"}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 z-20 grid gap-2 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl">
                  {[
                    ["400V", "Rated"],
                    ["6000", "Breaking"],
                    ["4P", "Protected"],
                  ].map(([value, label]) => (
                    <div key={label} className="flex items-center justify-between gap-5 text-[#0B1C2C]">
                      <span className="text-sm font-black">{value}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B1C2C]/45">{label}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  animate={{ opacity: isPowered ? [0.2, 1, 0.2] : 0.2 }}
                  transition={{ duration: 1.4, repeat: isPowered ? Infinity : 0, ease: "easeInOut" }}
                  className="absolute right-8 top-8 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-xl"
                >
                  <Activity className="h-7 w-7" />
                </motion.div>
              </motion.div>

              <div className="mt-5 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-white/60">
                <Play className="h-4 w-4 text-[#C8A96A]" />
                Interactive product animation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
