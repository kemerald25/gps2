import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export default function PersonalCarePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <ProductGrid 
          title="Personal <span class='text-primary'>Care</span>"
          description="A curated selection of high-quality beauty, skincare, and hygiene products to keep you feeling and looking your best."
          initialCategory="Personal Care"
        />
      </div>
      <Footer />
    </main>
  );
}
