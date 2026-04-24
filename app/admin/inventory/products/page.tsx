"use client"

import { useEffect, useState } from "react"
import { getInventory } from "@/lib/api/inventory"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Package, Search, Filter, Plus, FileDown } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function InventoryProductsPage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await getInventory()
      setProducts(data)
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B1C2C] mb-2">Inventory Management</h1>
          <p className="text-[#0B1C2C]/60">Manage your product catalog and real-time stock levels.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-[#0B1C2C]/10">
            <FileDown className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button className="bg-[#0B1C2C] hover:bg-[#1a2e44] text-white rounded-xl font-bold">
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>

      <Card className="premium-card bg-white border-none shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#F8F9FB] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0B1C2C]/40 group-focus-within:text-[#C8A96A]" />
            <Input placeholder="Search SKU, name or category..." className="pl-10 bg-[#F8F9FB] border-none rounded-xl" />
          </div>
          <Button variant="ghost" className="rounded-xl text-[#0B1C2C]/60">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-[#F8F9FB]">
              <TableRow className="border-none">
                <TableHead className="font-bold text-[#0B1C2C] py-5">Product</TableHead>
                <TableHead className="font-bold text-[#0B1C2C]">SKU / ID</TableHead>
                <TableHead className="font-bold text-[#0B1C2C]">Category</TableHead>
                <TableHead className="font-bold text-[#0B1C2C]">Price</TableHead>
                <TableHead className="font-bold text-[#0B1C2C]">Stock Status</TableHead>
                <TableHead className="text-right font-bold text-[#0B1C2C]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                [1, 2, 3, 4, 5].map((i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-10 w-40" /></TableCell>
                    <TableCell><Skeleton className="h-10 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-10 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-10 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-10 w-24" /></TableCell>
                    <TableCell className="text-right"><Skeleton className="h-10 w-10 ml-auto" /></TableCell>
                  </TableRow>
                ))
              ) : products.length > 0 ? (
                products.map((product) => (
                  <TableRow key={product.name} className="hover:bg-[#F8F9FB] transition-colors">
                    <TableCell className="font-bold text-[#0B1C2C] py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#F8F9FB] rounded-lg flex items-center justify-center">
                          <Package className="h-5 w-5 text-[#0B1C2C]/30" />
                        </div>
                        {product.item_name}
                      </div>
                    </TableCell>
                    <TableCell className="text-[#0B1C2C]/60">{product.name}</TableCell>
                    <TableCell>
                       <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                         {product.item_group}
                       </span>
                    </TableCell>
                    <TableCell className="font-black text-[#0B1C2C]">
                      UGX {product.standard_rate?.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-sm font-medium text-emerald-600">In Stock</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" className="text-[#C8A96A] font-bold">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-20">
                    <div className="flex flex-col items-center gap-3 opacity-30">
                      <Package className="h-12 w-12" />
                      <p className="font-bold">No products found in ERPNext.</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
