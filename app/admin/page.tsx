"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, Package, TrendingUp, CreditCard, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

const kpiData = [
  {
    title: "Total Leads",
    value: "1,284",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Inventory Value",
    value: "UGX 4.2B",
    change: "-2.4%",
    trend: "down",
    icon: Package,
    color: "bg-amber-500",
  },
  {
    title: "Monthly Sales",
    value: "UGX 850M",
    change: "+18.2%",
    trend: "up",
    icon: TrendingUp,
    color: "bg-emerald-500",
  },
  {
    title: "Active Dealers",
    value: "156",
    change: "+4",
    trend: "up",
    icon: Activity,
    color: "bg-purple-500",
  },
]

const chartData = [
  { name: "Jan", revenue: 400, leads: 240 },
  { name: "Feb", revenue: 300, leads: 139 },
  { name: "Mar", revenue: 200, leads: 980 },
  { name: "Apr", revenue: 278, leads: 390 },
  { name: "May", revenue: 189, leads: 480 },
  { name: "Jun", revenue: 239, leads: 380 },
  { name: "Jul", revenue: 349, leads: 430 },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black text-[#0B1C2C] mb-2">Welcome Back, Admin</h1>
        <p className="text-[#0B1C2C]/60">Here is what's happening with CHINT Uganda today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, i) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none shadow-sm premium-card bg-white p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${kpi.color} bg-opacity-10`}>
                  <kpi.icon className={`h-6 w-6 ${kpi.color.replace('bg-', 'text-')}`} />
                </div>
                <div className={`flex items-center text-xs font-bold ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {kpi.change}
                  {kpi.trend === 'up' ? <ArrowUpRight className="h-3 w-3 ml-1" /> : <ArrowDownRight className="h-3 w-3 ml-1" />}
                </div>
              </div>
              <p className="text-sm font-medium text-[#0B1C2C]/50 mb-1">{kpi.title}</p>
              <h3 className="text-2xl font-black text-[#0B1C2C]">{kpi.value}</h3>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm premium-card bg-white p-6">
          <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-[#0B1C2C]">Revenue Overview</CardTitle>
              <p className="text-sm text-[#0B1C2C]/40">Monthly performance metrics</p>
            </div>
            <Button variant="outline" size="sm" className="rounded-lg">Download Report</Button>
          </CardHeader>
          <div className="flex h-[350px] w-full items-end gap-4 rounded-2xl bg-[#F8F9FB] p-6">
            {chartData.map((item) => (
              <div key={item.name} className="flex h-full flex-1 flex-col justify-end gap-3">
                <div className="relative flex flex-1 items-end rounded-full bg-white">
                  <div
                    className="w-full rounded-full bg-gradient-to-t from-[#0B1C2C] to-[#C8A96A]"
                    style={{ height: `${Math.max(22, item.revenue / 4)}%` }}
                    title={`${item.name}: UGX ${item.revenue}M`}
                  />
                </div>
                <span className="text-center text-xs font-bold text-[#0B1C2C]/45">{item.name}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-none shadow-sm premium-card bg-white p-6">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-xl font-bold text-[#0B1C2C]">Lead Funnel</CardTitle>
            <p className="text-sm text-[#0B1C2C]/40">Conversion by month</p>
          </CardHeader>
          <div className="flex h-[350px] flex-col justify-between rounded-2xl bg-[#F8F9FB] p-6">
            {chartData.map((item) => (
              <div key={item.name} className="grid grid-cols-[2.5rem_1fr_3rem] items-center gap-3">
                <span className="text-xs font-bold text-[#0B1C2C]/45">{item.name}</span>
                <div className="h-3 overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-[#0B1C2C]"
                    style={{ width: `${Math.min(100, Math.max(12, item.leads / 10))}%` }}
                    title={`${item.leads} leads`}
                  />
                </div>
                <span className="text-right text-xs font-black text-[#0B1C2C]">{item.leads}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-none shadow-sm premium-card bg-white p-6">
        <CardHeader className="p-0 mb-8">
          <CardTitle className="text-xl font-bold text-[#0B1C2C]">Recent Activity</CardTitle>
          <p className="text-sm text-[#0B1C2C]/40">Latest updates from ERPNext and CRM</p>
        </CardHeader>
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between py-4 border-b border-[#F8F9FB] last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center">
                  <Activity className="h-5 w-5 text-[#0B1C2C]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B1C2C]">New Lead: John S. (Kampala)</p>
                  <p className="text-xs text-[#0B1C2C]/40">2 hours ago via Web Form</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-[#C8A96A] font-bold">View Details</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
