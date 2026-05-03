"use client"

import { Search, ShoppingCart, User, Menu, Phone, MapPin, ChevronDown, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const navigationLinks = [
    { href: "/products/power-distribution", label: "Power Distribution" },
    { href: "/products/low-voltage", label: "Low Voltage" },
    { href: "/building", label: "Building" },
    { href: "/new-energy", label: "New Energy" },
    { href: "/instruments-meter", label: "Instruments & Meter" },
    { href: "/automation", label: "Automation" },
    { href: "/services", label: "Services" },
  ]

  const categories = [
    { name: "Circuit Breakers", href: "/products/low-voltage" },
    { name: "Transformers", href: "/products/power-distribution" },
    { name: "Solar Inverters", href: "/new-energy" },
    { name: "Control Panels", href: "/automation" },
    { name: "Smart Switches", href: "/building" },
  ]

  return (
    <header className="relative z-50 w-screen max-w-[100vw] overflow-x-hidden">
      {/* Top bar - Premium Utility Bar */}
      <div className="bg-[#050B14] text-white/50 py-2.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-[#C8A96A] transition-colors cursor-pointer group">
              <MapPin className="h-3 w-3 text-[#C8A96A] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Kampala Regional Hub</span>
            </div>
            <div className="hidden md:flex items-center gap-2 hover:text-[#C8A96A] transition-colors cursor-pointer group">
              <Phone className="h-3 w-3 text-[#C8A96A] group-hover:scale-110 transition-transform" />
              <span>Enterprise Support: +256 392 266 552</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/10 pr-6">
              <Facebook className="h-3 w-3 hover:text-[#C8A96A] cursor-pointer transition-colors" />
              <Twitter className="h-3 w-3 hover:text-[#C8A96A] cursor-pointer transition-colors" />
              <Linkedin className="h-3 w-3 hover:text-[#C8A96A] cursor-pointer transition-colors" />
              <Instagram className="h-3 w-3 hover:text-[#C8A96A] cursor-pointer transition-colors" />
            </div>
            <Link href="/contact" className="hover:text-white transition-colors">
              Request Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header - Brand Identity */}
      <div className="sticky top-0 w-screen max-w-[100vw] bg-white px-4 py-4 shadow-sm border-b border-[#0B1C2C]/5 sm:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6 lg:gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <Image
              src="/images/chint-logo.webp"
              alt="Chint Uganda"
              width={160}
              height={80}
              className="h-10 sm:h-14 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Search - High-Fidelity Input */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <motion.div 
              animate={{ scale: isSearchFocused ? 1.02 : 1 }}
              className="relative w-full group"
            >
              <Input 
                type="search" 
                placeholder="Search industrial solutions, part numbers, or specifications..." 
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-6 pr-16 py-7 bg-[#F8F9FB] border-2 border-transparent focus-visible:border-[#C8A96A]/30 focus-visible:ring-0 rounded-2xl transition-all font-medium text-[#0B1C2C] placeholder:text-[#0B1C2C]/30" 
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0B1C2C] hover:bg-[#1a2e44] rounded-xl h-11 w-11 shadow-lg shadow-[#0B1C2C]/20 group-hover:scale-105 transition-transform">
                <Search className="h-5 w-5 text-white" />
              </Button>
            </motion.div>
          </div>

          {/* User Actions */}
          <div className="hidden items-center gap-4 sm:flex">
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" className="rounded-xl text-[#0B1C2C] font-black uppercase text-[10px] tracking-widest hover:bg-[#F8F9FB] px-6 py-6 border border-[#0B1C2C]/5">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
            </Link>

            <Button className="relative flex h-12 w-12 items-center rounded-xl bg-[#0B1C2C] px-0 py-0 text-white shadow-xl shadow-[#0B1C2C]/20 transition-all active:scale-95 hover:bg-[#1a2e44] sm:w-auto sm:px-8 sm:py-6 sm:font-black sm:uppercase sm:tracking-widest">
              <ShoppingCart className="h-4 w-4 sm:mr-3" />
              <span className="hidden text-[10px] sm:inline">Procurement Cart</span>
              <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A96A] text-[9px] font-black text-[#0B1C2C] sm:static sm:ml-3">0</div>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation - Strategic Bar */}
      <nav className="bg-[#0B1C2C] text-white hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    className="h-[72px] bg-[#C8A96A] text-[#0B1C2C] hover:bg-[#C8A96A]/90 font-black uppercase text-[11px] tracking-widest rounded-none px-8 border-r border-black/5 group"
                  >
                    <Menu className="h-5 w-5 mr-3 transition-transform group-hover:rotate-180 duration-500" />
                    Shop Departments
                    <ChevronDown className="ml-3 h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-white border-none shadow-2xl rounded-2xl mt-1 p-2">
                  {categories.map((cat) => (
                    <DropdownMenuItem key={cat.name} asChild className="rounded-xl p-0">
                      <Link 
                        href={cat.href}
                        className="w-full flex items-center px-4 py-3 text-[#0B1C2C] font-bold hover:bg-[#F8F9FB] hover:text-[#C8A96A] transition-colors"
                      >
                        {cat.name}
                        <ChevronRight className="ml-auto h-4 w-4 opacity-20" />
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="bg-[#F8F9FB] my-2" />
                  <DropdownMenuItem asChild className="rounded-xl p-0">
                    <Link 
                      href="/products"
                      className="w-full flex items-center px-4 py-3 text-[#C8A96A] font-black uppercase text-[10px] tracking-wider"
                    >
                      Browse Full Inventory
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex items-center ml-2">
                {navigationLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-[11px] font-black uppercase tracking-widest text-white/70 hover:text-[#C8A96A] transition-all py-[27px] px-6 relative group"
                  >
                    {link.label}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-1 bg-[#C8A96A]"
                      whileHover={{ width: "100%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C8A96A] hover:text-white transition-all flex items-center"
            >
              <div className="h-1.5 w-1.5 bg-[#C8A96A] rounded-full mr-3 animate-pulse" />
              Direct Support
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Premium Experience */}
      <div className="flex w-screen max-w-[100vw] items-center justify-between gap-3 overflow-hidden border-t border-white/5 bg-[#0B1C2C] px-4 py-3 md:hidden">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-white h-12 rounded-xl bg-white/5 border border-white/10 px-6">
              <Menu className="h-5 w-5 mr-3 text-[#C8A96A]" />
              <span className="font-black uppercase text-[10px] tracking-widest">Navigator</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[320px] bg-[#0B1C2C] border-none text-white p-0 shadow-2xl">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#050B14]">
              <Image src="/images/chint-logo.webp" alt="Logo" width={100} height={40} className="invert brightness-0" />
            </div>
            <div className="flex flex-col py-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-black uppercase tracking-[0.15em] hover:text-[#C8A96A] transition-colors px-8 py-5 border-b border-white/5 flex items-center group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="w-8 h-[1px] bg-white/10 mr-4 group-hover:w-12 group-hover:bg-[#C8A96A] transition-all" />
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="absolute bottom-10 left-8 right-8">
              <Button className="w-full bg-[#C8A96A] text-[#0B1C2C] font-black uppercase text-[11px] tracking-widest py-7 rounded-2xl shadow-2xl shadow-[#C8A96A]/20">
                Contact Enterprise
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
