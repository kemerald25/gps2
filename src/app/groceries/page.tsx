import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import Categories from "@/components/Categories";

export default function GroceriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <ProductGrid 
          title="Fresh <span class='text-primary'>Groceries</span>"
          description="Everything you need, from daily essentials and pantry staples to fresh fruit and vegetables, delivered right to your home in Lagos."
          filterType="groceries"
          initialCategory="Groceries"
        />
        <div className="mt-24">
            <Categories />
        </div>
      </div>
      <Footer />
    </main>
  );
}
