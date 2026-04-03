import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Pill, ShoppingCart, Truck, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-7xl font-heading font-black mb-8 leading-tight">
            Our Mission is to <span className="text-primary italic">Simplify</span> Your Wellness
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            GPS Mart & Pharmacy was born from a simple idea: making quality groceries 
            and essential pharmacy products accessible to every home in Lagos, Nigeria. 
            We combine technology with care to deliver health and happiness.
          </p>
        </div>

        <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden mb-24 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1578916171728-4668dbe80e1f?q=80&w=2000&auto=format&fit=crop"
            alt="GPS Mart Store"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-12 left-12">
            <h2 className="text-white text-4xl font-heading font-black">Since 2018</h2>
            <p className="text-white/80 font-medium">Serving the Lagos community with pride.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-4xl font-heading font-black mb-8">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a team of dedicated pharmacists, nutritionists, and logistics experts 
              working together to provide a seamless shopping experience. We understand that 
              your health and time are precious, which is why we&apos;ve built a platform that 
              brings the store to you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5,000 verified products across groceries and pharmacy categories, 
              we ensure that everything you receive meets the highest standards of safety 
              and freshness.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Pill, label: "5k+ Meds", color: "bg-secondary/10 text-secondary" },
              { icon: ShoppingCart, label: "10k+ Groceries", color: "bg-primary/10 text-primary" },
              { icon: Truck, label: "Fast Delivery", color: "bg-accent/10 text-accent" },
              { icon: ShieldCheck, label: "100% Verified", color: "bg-green-100 text-green-600" },
            ].map((item, i) => (
              <div key={i} className={`${item.color} p-8 rounded-[32px] flex flex-col items-center justify-center text-center shadow-sm`}>
                <item.icon className="w-10 h-10 mb-4" />
                <span className="font-heading font-black text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 rounded-[48px] p-8 md:p-16 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">Our <span className="text-primary">Core Values</span></h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              These principles guide everything we do, from how we source our products
              to the way we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: HeartPulse, 
                title: "Health First", 
                description: "Your wellness is our ultimate priority. Every product we sell is strictly vetted for quality and safety." 
              },
              { 
                icon: Sparkles, 
                title: "Quality Obsessed", 
                description: "We don&apos;t settle for &apos;good enough&apos;. We source the freshest produce and most effective medications available." 
              },
              { 
                icon: ShieldCheck, 
                title: "Trust & Transparency", 
                description: "We build lasting relationships through honesty about our sourcing, pricing, and services." 
              },
            ].map((value, i) => (
              <div key={i} className="bg-background p-10 rounded-[40px] shadow-sm border border-border group hover:shadow-xl transition-all h-full">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-black mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
