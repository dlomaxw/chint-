import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ShowroomSection() {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/chint-showroom-interior.jpg"
              alt="Visit our Chint Uganda Showroom"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">Visit a Showroom</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Experience our complete range of electrical equipment and power distribution solutions in person. Our
              expert team is ready to help you find the right products for your project needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
