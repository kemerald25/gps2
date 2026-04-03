import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle, Star, ShoppingCart, Truck, ShieldCheck } from "lucide-react";

const faqData = [
  {
    icon: ShoppingCart,
    question: "How do I place an order?",
    answer: "You can browse our products, add them to your cart, and proceed to checkout. We accept credit/debit cards and bank transfers."
  },
  {
    icon: Truck,
    question: "Do you offer same-day delivery?",
    answer: "Yes, we offer same-day delivery for all orders placed before 3 PM within Lagos. Most orders are delivered within 4 hours."
  },
  {
    icon: ShieldCheck,
    question: "Is my medical information secure?",
    answer: "Absolutely. We use bank-grade encryption to protect all your personal and medical data. Only authorized pharmacists have access to your prescriptions."
  },
  {
    icon: Star,
    question: "How can I contact a pharmacist?",
    answer: "You can use our live chat feature or call our support line to speak with a licensed pharmacist for consultations."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 text-primary">
            <HelpCircle className="w-12 h-12" />
            <h1 className="text-4xl md:text-6xl font-heading font-black">Frequently Asked <span className="text-foreground">Questions</span></h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about GPS Mart & Pharmacy. Can't find 
            the answer you're looking for? Reach out to our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((faq, i) => (
            <div key={i} className="bg-card border border-border p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all h-full">
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-8 text-primary">
                <faq.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-black mb-4">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
