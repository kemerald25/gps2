import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import PharmacySection from "@/components/PharmacySection";

export default function PharmacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <ProductGrid 
          title="Verified <span class='text-secondary'>Pharmacy</span>"
          description="Get access to certified medications, supplements, and consulting with our licensed pharmacists from the comfort of your home."
          filterType="pharmacy"
          initialCategory="Pharmacy"
        />
        <div className="mt-24">
            <PharmacySection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
