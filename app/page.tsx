import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProducts } from "@/components/featured-products"
import { NearbyShops } from "@/components/nearby-shops"
import { VideoShowcase } from "@/components/video-showcase"
import { InstallerRegistration } from "@/components/installer-registration"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <Header />
      <HeroSection />
      
      {/* Product Categories Section */}
      <ProductCategories />

      {/* Featured Products Showcase */}
      <FeaturedProducts />

      {/* Corporate Video / Brand Story */}
      <VideoShowcase />

      {/* Nearby Dealer Map / Store Finder */}
      <NearbyShops />

      {/* Installer Partnership CTA */}
      <InstallerRegistration />

      <Footer />
    </main>
  )
}
