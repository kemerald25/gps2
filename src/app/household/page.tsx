import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export default function HouseholdPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <ProductGrid 
          title="Household <span class='text-primary'>Essentials</span>"
          description="Stock up on cleaning supplies, laundry detergents, and everyday home needs from brands you trust."
          initialCategory="Household"
        />
      </div>
      <Footer />
    </main>
  );
}
