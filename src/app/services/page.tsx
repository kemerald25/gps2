import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Pill, Truck, ShieldCheck, HeartPulse, Sparkles, MessageSquare } from "lucide-react";

const serviceData = [
  {
    icon: Pill,
    title: "Prescription Management",
    description: "Manage your medications, get timely refills, and consult with our licensed pharmacists online."
  },
  {
    icon: MessageSquare,
    title: "Tele-Health Consultation",
    description: "Speak with professional healthcare providers for minor ailments and medical advice from home."
  },
  {
    icon: Truck,
    title: "Ultra-Fast Delivery",
    description: "Get your essential supplies, from groceries to medications, delivered to your door in 4 hours or less."
  },
  {
    icon: ShieldCheck,
    title: "Health Screenings",
    description: "Regular checkups and vital signs monitoring at our physical walk-in centers across Lagos."
  },
  {
    icon: Sparkles,
    title: "Personalized Grooming",
    description: "Curated beauty and personal care products tailored to your skin type and preferences."
  },
  {
    icon: HeartPulse,
    title: "Wellness Programs",
    description: "Join our fitness and nutrition challenges led by experts to improve your overall health."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-7xl font-heading font-black mb-8 leading-tight">
             Comprehensive <span className="text-primary italic">Health</span> Solutions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            GPS Mart & Pharmacy offers more than just shopping. We&apos;re your 
            full-service health and lifestyle partner, providing technology-driven 
            services to keep you your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, i) => (
            <div key={i} className="bg-card border border-border p-12 rounded-[48px] shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-black mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
