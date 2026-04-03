import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RefreshCw, CheckCircle, XCircle } from "lucide-react";

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8 text-red-500">
            <RefreshCw className="w-10 h-10" />
            <h1 className="text-4xl md:text-6xl font-heading font-black">Return <span className="text-foreground">Policy</span></h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-12">
              Hassle-free returns and refunds for your convenience.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Items can be returned within 48 hours of delivery if they are 
                unopened, unused, and in their original packaging. 
                Grocery items must be returned within 6 hours due to their perishable nature.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground text-red-500">Exceptions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pharmacy products, especially prescription medications, cannot be 
                returned once they have left our facility. Personal care items 
                and baby products are also ineligible for return for hygiene reasons.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">Refund Process</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once we receive your return, we will inspect the item and notify 
                you of the status of your refund. If approved, the refund will be 
                processed back to your original payment method within 5-10 
                business days.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
