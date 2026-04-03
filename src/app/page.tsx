import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PharmacySection from "@/components/PharmacySection";
import PromoBanner from "@/components/PromoBanner";
import HowItWorks from "@/components/HowItWorks";
import AppDownloadSection from "@/components/AppDownloadSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <PharmacySection />
        <PromoBanner />
        <HowItWorks />
        <AppDownloadSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

