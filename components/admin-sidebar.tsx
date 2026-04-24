"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Users,
  Box,
  CreditCard,
  Megaphone,
  Settings,
  ShieldCheck,
  ChevronRight,
  LogOut,
  Package,
  TrendingUp,
  Mail,
  Smartphone,
  Map,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const adminNav = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    title: "CRM",
    icon: Users,
    href: "/admin/crm",
    items: [
      { title: "Leads", href: "/admin/crm/leads" },
      { title: "Pipeline", href: "/admin/crm/pipeline" },
      { title: "Customers", href: "/admin/crm/customers" },
    ],
  },
  {
    title: "Inventory",
    icon: Box,
    href: "/admin/inventory",
    items: [
      { title: "Products", href: "/admin/inventory/products" },
      { title: "Stock Levels", href: "/admin/inventory/stock" },
      { title: "Categories", href: "/admin/inventory/categories" },
    ],
  },
  {
    title: "Finance",
    icon: CreditCard,
    href: "/admin/finance",
    items: [
      { title: "Revenue", href: "/admin/finance/revenue" },
      { title: "Invoices", href: "/admin/finance/invoices" },
      { title: "Margins", href: "/admin/finance/margins" },
    ],
  },
  {
    title: "Marketing",
    icon: Megaphone,
    href: "/admin/marketing",
    items: [
      { title: "Campaigns", href: "/admin/marketing/campaigns" },
      { title: "Ads Performance", href: "/admin/marketing/ads" },
      { title: "Newsletter", href: "/admin/marketing/newsletter" },
    ],
  },
  {
    title: "Operations",
    icon: ShieldCheck,
    href: "/admin/operations",
    items: [
      { title: "Dealers", href: "/admin/operations/dealers" },
      { title: "Installers", href: "/admin/operations/installers" },
      { title: "Activity Log", href: "/admin/operations/logs" },
    ],
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-white/5 bg-[#0B1C2C] text-white">
      <SidebarHeader className="p-6 border-b border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-[#C8A96A] p-2 rounded-lg">
             <Image src="/images/chint-logo.webp" alt="Logo" width={40} height={20} className="invert brightness-0" />
          </div>
          <span className="font-black text-xl tracking-tighter group-data-[collapsible=icon]:hidden">
            CHINT <span className="text-[#C8A96A]">ADMIN</span>
          </span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/30 font-bold uppercase tracking-widest text-[10px] mb-4 group-data-[collapsible=icon]:hidden">
            Main Management
          </SidebarGroupLabel>
          <SidebarMenu>
            {adminNav.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild 
                  tooltip={item.title}
                  className={`h-12 rounded-xl transition-all ${
                    pathname === item.href 
                      ? "bg-[#C8A96A] text-[#0B1C2C] font-bold" 
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span className="font-semibold">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                
                {item.items && (
                  <SidebarMenuSub className="border-white/5 ml-6 mt-1 group-data-[collapsible=icon]:hidden">
                    {item.items.map((sub) => (
                      <SidebarMenuSubItem key={sub.title}>
                        <SidebarMenuSubButton asChild className="text-white/40 hover:text-[#C8A96A] py-2">
                          <Link href={sub.href}>{sub.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-white/30 font-bold uppercase tracking-widest text-[10px] mb-4 group-data-[collapsible=icon]:hidden">
            System Settings
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-12 rounded-xl text-white/60 hover:bg-white/5 hover:text-white">
                <Link href="/admin/settings">
                  <Settings className="h-5 w-5" />
                  <span className="font-semibold">Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6 border-t border-white/5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-12 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all">
              <LogOut className="h-5 w-5" />
              <span className="font-bold">Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
