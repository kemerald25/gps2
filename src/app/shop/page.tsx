import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <ProductGrid 
          title="Our Full <span class='text-primary'>Catalog</span>"
          description="Browse our extensive collection of premium groceries, fresh produce, and health essentials, all delivered straight to your door in Lagos."
        />
        <div className="mt-24">
            <PromoBanner />
        </div>
      </div>
      <Footer />
    </main>
  );
}
