"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Package, Hash, Tag, Building2, User, Phone, Mail, ClipboardList } from "lucide-react"

interface QuoteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  productName: string
  productModel: string
  productPrice: string
}

export function QuoteDialog({ open, onOpenChange, productName, productModel, productPrice }: QuoteDialogProps) {
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle")
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "1",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("saving")
    setError("")

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "quote", productName, productModel, productPrice }),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Could not submit quote request.")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        quantity: "1",
        message: "",
      })
      setTimeout(() => {
        onOpenChange(false)
        setStatus("idle")
      }, 1200)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit quote request.")
      setStatus("error")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-none shadow-2xl rounded-3xl p-0">
        <div className="bg-[#0B1C2C] p-8 text-white">
          <DialogTitle className="text-3xl font-black mb-2 flex items-center">
            <ClipboardList className="mr-3 h-8 w-8 text-[#C8A96A]" />
            Request a <span className="text-[#C8A96A] ml-2">Quote</span>
          </DialogTitle>
          <DialogDescription className="text-white/60 font-medium">
            Fill out the formal inquiry form for {productName}.
          </DialogDescription>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Summary Block */}
          <div className="bg-[#F8F9FB] p-6 rounded-2xl border border-[#0B1C2C]/5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Package className="h-4 w-4 text-[#C8A96A]" />
              <div>
                <div className="text-[10px] font-black text-[#0B1C2C]/40 uppercase tracking-widest">Product</div>
                <div className="text-sm font-bold text-[#0B1C2C] truncate">{productName}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Hash className="h-4 w-4 text-[#C8A96A]" />
              <div>
                <div className="text-[10px] font-black text-[#0B1C2C]/40 uppercase tracking-widest">Model</div>
                <div className="text-sm font-bold text-[#0B1C2C]">{productModel}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tag className="h-4 w-4 text-[#C8A96A]" />
              <div>
                <div className="text-[10px] font-black text-[#0B1C2C]/40 uppercase tracking-widest">Value</div>
                <div className="text-sm font-bold text-[#0B1C2C]">{productPrice}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-black text-[#0B1C2C] uppercase tracking-widest ml-1">Full Name *</Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0B1C2C]/30" />
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Official Name"
                  className="pl-12 bg-[#F8F9FB] border-none py-6 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-black text-[#0B1C2C] uppercase tracking-widest ml-1">Work Email *</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0B1C2C]/30" />
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@company.com"
                  className="pl-12 bg-[#F8F9FB] border-none py-6 rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-black text-[#0B1C2C] uppercase tracking-widest ml-1">Contact Number *</Label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0B1C2C]/30" />
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+256 ..."
                  className="pl-12 bg-[#F8F9FB] border-none py-6 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-xs font-black text-[#0B1C2C] uppercase tracking-widest ml-1">Company Name</Label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0B1C2C]/30" />
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Enterprise Ltd"
                  className="pl-12 bg-[#F8F9FB] border-none py-6 rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-xs font-black text-[#0B1C2C] uppercase tracking-widest ml-1">Project Quantity *</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              required
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="bg-[#F8F9FB] border-none py-6 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-black text-[#0B1C2C] uppercase tracking-widest ml-1">Specific Requirements</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Detail your project needs here..."
              rows={4}
              className="bg-[#F8F9FB] border-none rounded-xl"
            />
          </div>

          <div className="flex gap-4 pt-6 border-t border-[#F8F9FB]">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => onOpenChange(false)} 
              className="flex-1 h-14 rounded-xl font-bold text-[#0B1C2C] hover:bg-[#F8F9FB]"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={status === "saving"}
              className="flex-1 h-14 bg-[#0B1C2C] hover:bg-[#1a2e44] text-white font-black rounded-xl shadow-xl shadow-[#0B1C2C]/10 transition-all group"
            >
              <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              {status === "saving" ? "Submitting..." : "Submit Formal Quote"}
            </Button>
          </div>
          {status === "success" && (
            <p className="rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
              Quote request saved. The admin team can now review it in lead management.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
