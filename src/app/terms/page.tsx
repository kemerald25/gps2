import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Clock, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8 text-primary">
            <Shield className="w-10 h-10" />
            <h1 className="text-4xl md:text-6xl font-heading font-black">Terms of <span className="text-foreground">Service</span></h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-12">
              Last updated: April 3, 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to GPS Mart & Pharmacy. By accessing our website and using our services, 
                you agree to be bound by the following terms and conditions. Please read them 
                carefully.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">2. Use of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are intended for personal, non-commercial use. You must be at least 
                18 years old to create an account and purchase pharmacy products.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">3. Pharmacy Products</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prescription medications require a valid prescription from a licensed 
                healthcare provider. We reserve the right to verify prescriptions before 
                dispatching orders.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">4. Delivery Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to deliver within the estimated timeframes. However, external factors 
                in Lagos traffic and logistics may impact delivery speeds.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
