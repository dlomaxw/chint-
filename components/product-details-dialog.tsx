"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X } from "lucide-react"

interface ProductDetailsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: {
    name: string
    price: string
    model: string
    specs: string
    image: string
    features: string[]
  } | null
  onGetQuote: () => void
}

export function ProductDetailsDialog({ open, onOpenChange, product, onGetQuote }: ProductDetailsDialogProps) {
  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-none shadow-2xl rounded-3xl p-0">
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <Badge className="absolute top-6 right-6 bg-[#C8A96A] text-[#0B1C2C] border-none font-black px-4 py-1.5 rounded-lg shadow-xl">
              {product.model}
            </Badge>
            <div className="absolute bottom-6 left-8 right-8">
              <h2 className="text-3xl font-black text-white mb-1">{product.name}</h2>
              <p className="text-white/70 font-medium tracking-wide">Premium Electrical Series</p>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="p-6 bg-[#F8F9FB] rounded-2xl border border-[#0B1C2C]/5">
                <h3 className="text-xs font-black text-[#0B1C2C]/40 uppercase tracking-widest mb-2">Model Identifier</h3>
                <p className="text-lg font-black text-[#0B1C2C]">{product.model}</p>
              </div>
              <div className="p-6 bg-[#F8F9FB] rounded-2xl border border-[#0B1C2C]/5">
                <h3 className="text-xs font-black text-[#0B1C2C]/40 uppercase tracking-widest mb-2">Market Valuation</h3>
                <p className="text-2xl font-black text-[#C8A96A]">{product.price}</p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-black text-[#0B1C2C] uppercase tracking-widest mb-4 flex items-center">
                <div className="h-1.5 w-8 bg-[#C8A96A] rounded-full mr-3" />
                Technical Specifications
              </h3>
              <p className="text-[#0B1C2C]/60 font-medium leading-relaxed bg-[#F8F9FB] p-6 rounded-2xl border border-[#0B1C2C]/5">
                {product.specs}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-black text-[#0B1C2C] uppercase tracking-widest mb-6 flex items-center">
                <div className="h-1.5 w-8 bg-[#C8A96A] rounded-full mr-3" />
                Superior Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white border border-[#0B1C2C]/5 rounded-xl shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#C8A96A] mr-4 shrink-0" />
                    <span className="text-[#0B1C2C] font-bold text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-8 border-t border-[#F8F9FB]">
              <Button 
                variant="ghost" 
                onClick={() => onOpenChange(false)} 
                className="flex-1 h-14 rounded-xl font-bold text-[#0B1C2C] hover:bg-[#F8F9FB]"
              >
                Return to Catalog
              </Button>
              <Button
                onClick={() => {
                  onOpenChange(false)
                  onGetQuote()
                }}
                className="flex-1 h-14 bg-[#0B1C2C] hover:bg-[#1a2e44] text-white font-black rounded-xl shadow-xl shadow-[#0B1C2C]/10 transition-transform active:scale-95"
              >
                Initiate Quote Request
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
