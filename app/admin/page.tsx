"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, Package, TrendingUp, CreditCard, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts"
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
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C8A96A" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#C8A96A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#C8A96A" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="border-none shadow-sm premium-card bg-white p-6">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-xl font-bold text-[#0B1C2C]">Lead Funnel</CardTitle>
            <p className="text-sm text-[#0B1C2C]/40">Conversion by month</p>
          </CardHeader>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: '#F8F9FB' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="leads" fill="#0B1C2C" radius={[6, 6, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
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
