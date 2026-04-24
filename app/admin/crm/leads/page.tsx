"use client"

import { useEffect, useState } from "react"
import { getLeads } from "@/lib/api/leads"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Mail, Phone, MoreHorizontal, LayoutGrid, List } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'list' | 'kanban'>('list')

  useEffect(() => {
    async function load() {
      const data = await getLeads()
      setLeads(data)
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B1C2C] mb-2">Lead Management</h1>
          <p className="text-[#0B1C2C]/60">Track and nurture your sales pipeline from ERPNext.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border">
          <Button 
            variant={view === 'list' ? 'default' : 'ghost'} 
            size="sm" 
            onClick={() => setView('list')}
            className={`rounded-lg ${view === 'list' ? 'bg-[#0B1C2C] text-white' : 'text-[#0B1C2C]/40'}`}
          >
            <List className="h-4 w-4 mr-2" /> List
          </Button>
          <Button 
            variant={view === 'kanban' ? 'default' : 'ghost'} 
            size="sm" 
            onClick={() => setView('kanban')}
            className={`rounded-lg ${view === 'kanban' ? 'bg-[#0B1C2C] text-white' : 'text-[#0B1C2C]/40'}`}
          >
            <LayoutGrid className="h-4 w-4 mr-2" /> Kanban
          </Button>
        </div>
      </div>

      <Card className="premium-card bg-white border-none shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-[#F8F9FB]">
              <TableRow className="border-none">
                <TableHead className="font-bold text-[#0B1C2C] py-5">Lead Name</TableHead>
                <TableHead className="font-bold text-[#0B1C2C]">Status</TableHead>
                <TableHead className="font-bold text-[#0B1C2C]">Contact Info</TableHead>
                <TableHead className="font-bold text-[#0B1C2C]">Last Activity</TableHead>
                <TableHead className="text-right font-bold text-[#0B1C2C]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                [1, 2, 3].map((i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-10 w-48" /></TableCell>
                    <TableCell><Skeleton className="h-10 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-10 w-40" /></TableCell>
                    <TableCell><Skeleton className="h-10 w-32" /></TableCell>
                    <TableCell className="text-right"><Skeleton className="h-10 w-10 ml-auto" /></TableCell>
                  </TableRow>
                ))
              ) : leads.length > 0 ? (
                leads.map((lead) => (
                  <TableRow key={lead.name} className="hover:bg-[#F8F9FB] transition-colors">
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0B1C2C] text-white flex items-center justify-center font-bold">
                          {lead.lead_name?.charAt(0)}
                        </div>
                        <span className="font-bold text-[#0B1C2C]">{lead.lead_name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`rounded-lg font-bold border-none px-3 py-1 ${
                        lead.status === 'Open' ? 'bg-emerald-100 text-emerald-700' : 
                        lead.status === 'Interested' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-[#0B1C2C]/60">
                          <Mail className="h-3 w-3" /> {lead.email_id || 'N/A'}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#0B1C2C]/60">
                          <Phone className="h-3 w-3" /> {lead.mobile_no || 'N/A'}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-[#0B1C2C]/40 italic">
                      Today, 10:45 AM
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="rounded-xl">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-20">
                    <div className="flex flex-col items-center gap-3 opacity-30">
                      <Users className="h-12 w-12" />
                      <p className="font-bold">No leads found in ERPNext.</p>
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
