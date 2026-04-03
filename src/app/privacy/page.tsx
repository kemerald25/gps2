import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8 text-secondary">
            <Lock className="w-10 h-10" />
            <h1 className="text-4xl md:text-6xl font-heading font-black">Privacy <span className="text-foreground">Policy</span></h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-12">
              Last updated: April 3, 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">1. Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly, such as your name, 
                address, and medical history when you create an account and place 
                orders.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">2. Information Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement robust security measures to protect your personal and 
                medical information. All medical data is stored separately and 
                encrypted using industry-standard protocols.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">3. Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed">
                We never sell your personal information. We only share data with 
                essential service providers, such as payment processors and 
                delivery couriers.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
