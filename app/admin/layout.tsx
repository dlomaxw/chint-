import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Search, Bell, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#F8F9FB] w-full">
        <AdminSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <div className="relative max-w-md group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0B1C2C]/40 group-focus-within:text-[#C8A96A] transition-colors" />
                <Input 
                  placeholder="Global search..." 
                  className="pl-10 bg-[#F8F9FB] border-none focus-visible:ring-1 focus-visible:ring-[#C8A96A]/30"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative rounded-xl hover:bg-[#F8F9FB]">
                <Bell className="h-5 w-5 text-[#0B1C2C]/60" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#C8A96A] rounded-full" />
              </Button>
              <div className="h-8 w-[1px] bg-border mx-2" />
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-[#0B1C2C]">Administrator</p>
                  <p className="text-xs text-[#0B1C2C]/50 uppercase tracking-widest font-medium">Chint Uganda</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#0B1C2C] flex items-center justify-center text-white font-bold">
                  A
                </div>
              </div>
            </div>
          </header>
          <main className="p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
