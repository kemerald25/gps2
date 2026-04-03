import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck } from "lucide-react";

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8 text-accent">
            <Truck className="w-10 h-10" />
            <h1 className="text-4xl md:text-6xl font-heading font-black">Shipping <span className="text-foreground">Info</span></h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-12">
              Fast and reliable delivery across Lagos and beyond.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Delivery Timeframes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Standard delivery within Lagos usually takes 2-4 hours for groceries and 
                pharmacy items. Interstate deliveries take 2-5 business days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Delivery Rates</h2>
              <p className="text-muted-foreground leading-relaxed">
                Free shipping for orders over ₦25,000 within Lagos. Orders below that 
                value attract a flat delivery fee of ₦1,500.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once your order is dispatched, you will receive an SMS and email with 
                tracking information and real-time updates.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
