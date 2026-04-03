import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export default function BabyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <ProductGrid 
          title="Baby <span class='text-primary'>Products</span>"
          description="Everything your little one needs, from diapers and formula to skincare and toys. Trusted brands for your bundle of joy."
          initialCategory="Baby Products"
        />
      </div>
      <Footer />
    </main>
  );
}
