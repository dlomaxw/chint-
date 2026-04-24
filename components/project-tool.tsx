import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Building, Factory, Home, Wrench, Settings } from "lucide-react"
import Link from "next/link"

const projectTypes = [
  { icon: Building, label: "Commercial", id: "commercial" },
  { icon: Factory, label: "Industrial", id: "industrial" },
  { icon: Home, label: "Residential", id: "residential" },
  { icon: Zap, label: "Power Plant", id: "power" },
  { icon: Wrench, label: "Maintenance", id: "maintenance" },
  { icon: Settings, label: "Automation", id: "automation" },
]

export function ProjectTool() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/electrical-installation-project-with-modern-equipm.jpg"
              alt="Project Planning"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Project Tool</CardTitle>
              <p className="text-primary-foreground/90">
                Find the right products, organize by room, and create a personalized shopping experience.
              </p>
              <Link href="/services">
                <Button variant="secondary" size="sm" className="w-fit">
                  Learn More →
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Create a Project</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">Which project type are you working on?</p>
                  <div className="grid grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <Button
                        key={type.id}
                        variant="secondary"
                        size="sm"
                        className="flex flex-col items-center gap-2 h-auto py-3"
                      >
                        <type.icon className="h-6 w-6" />
                        <span className="text-xs">{type.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/80 mb-2">What is your project's name?</p>
                  <div className="flex gap-2">
                    <Input placeholder="Project Name" className="bg-primary-foreground text-foreground" />
                    <Button variant="secondary">Create</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
