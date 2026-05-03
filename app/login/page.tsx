"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Lock, Mail, ShieldCheck } from "lucide-react"

export default function LoginPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F9FB]">
      <Header />
      <section className="bg-[#0B1C2C] px-4 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/70">
              <ShieldCheck className="h-4 w-4 text-[#C8A96A]" />
              Secure Portal
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl">CHINT Uganda Account Access</h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-white/65">
              Access procurement requests, installer registration updates, dealer support, and saved project inquiries.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-[#0B1C2C] shadow-2xl">
            <h2 className="mb-2 text-2xl font-black">Sign in</h2>
            <p className="mb-8 text-sm font-medium text-[#0B1C2C]/55">Use your registered business email.</p>
            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1C2C]/35" />
                  <Input id="email" type="email" required className="h-12 rounded-xl bg-[#F8F9FB] pl-11" placeholder="name@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1C2C]/35" />
                  <Input id="password" type="password" required className="h-12 rounded-xl bg-[#F8F9FB] pl-11" placeholder="Your password" />
                </div>
              </div>
              <Button type="submit" className="h-12 w-full rounded-xl bg-[#0B1C2C] font-bold text-white hover:bg-[#1a2e44]">
                Continue
              </Button>
            </form>
            <div className="mt-6 rounded-2xl bg-[#F8F9FB] p-4 text-sm text-[#0B1C2C]/60">
              Need installer or dealer access? <Link href="/contact" className="font-bold text-[#0B1C2C] underline">Request account setup</Link>.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
