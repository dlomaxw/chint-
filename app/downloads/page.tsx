import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

const downloads = [
  { title: "Low Voltage Catalog", file: "/chint-low-voltage-products.jpg", type: "Product sheet" },
  { title: "Solar Solutions Overview", file: "/chint-solar-products.jpg", type: "Product sheet" },
  { title: "Automation Systems Overview", file: "/chint-automation-products.jpg", type: "Product sheet" },
  { title: "Services Capability Statement", file: "/chint-technical-support.jpg", type: "Service sheet" },
]

export default function DownloadsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F9FB]">
      <Header />
      <section className="bg-[#0B1C2C] px-4 py-20 text-center text-white">
        <h1 className="mb-6 text-4xl font-black sm:text-6xl">Specifications Lab</h1>
        <p className="mx-auto max-w-3xl text-lg font-medium text-white/70">
          Download current CHINT Uganda product and service reference files.
        </p>
      </section>
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {downloads.map((item) => (
            <Card key={item.title} className="border-none bg-white shadow-sm">
              <CardContent className="flex items-center justify-between gap-6 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F9FB]">
                    <FileText className="h-6 w-6 text-[#C8A96A]" />
                  </div>
                  <div>
                    <h2 className="font-black text-[#0B1C2C]">{item.title}</h2>
                    <p className="text-sm font-medium text-[#0B1C2C]/50">{item.type}</p>
                  </div>
                </div>
                <Button asChild className="rounded-xl bg-[#0B1C2C] text-white hover:bg-[#1a2e44]">
                  <a href={item.file} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
