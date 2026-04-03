"use client";

import { motion } from "framer-motion";
import { Pill, Upload, MessageSquare, PhoneCall, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const pills = [
  { name: "Pain Relief", color: "bg-blue-500" },
  { name: "Vitamins", color: "bg-green-500" },
  { name: "First Aid", color: "bg-red-500" },
  { name: "Personal Care", color: "bg-orange-500" },
  { name: "Kids Care", color: "bg-purple-500" },
];

export default function PharmacySection() {
  return (
    <section className="py-32 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-xs mb-6">
              <Pill className="w-5 h-5 animate-bounce" />
              <span>Dedicated Pharmacy Store</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight mb-8">
              Certified Healthcare <br />
              <span className="text-secondary">Solutions</span> for Everyone.
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
              We provide authentic medications, expert pharmacist consultations, 
              and easy prescription management. Your health is our priority.
            </p>

            {/* Quick Categories Pills */}
            <div className="flex flex-wrap gap-3 mb-12">
              {pills.map((pill, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-2xl bg-muted/50 border border-border text-sm font-bold flex items-center gap-2 hover:bg-secondary/10 hover:border-secondary/30 hover:text-secondary transition-all"
                >
                  <div className={cn("w-2 h-2 rounded-full", pill.color)} />
                  {pill.name}
                </motion.button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="h-20 px-8 bg-secondary text-white rounded-[24px] font-bold flex items-center justify-between group overflow-hidden relative shadow-xl hover:shadow-secondary/30 transition-all">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-base">Upload Prescription</p>
                    <p className="text-[11px] text-white/70 font-medium">Quick & Secure</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              <button className="h-20 px-8 bg-muted hover:bg-muted-foreground/10 text-foreground rounded-[24px] font-bold flex items-center justify-between group transition-all border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-base">Consult Pharmacist</p>
                    <p className="text-[11px] text-muted-foreground font-medium">Chat with Experts</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-black overflow-hidden bg-muted">
                            <Image src={`https://i.pravatar.cc/100?u=${i+10}`} alt="doctor" width={100} height={100} />
                        </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-white dark:border-black bg-secondary text-white flex items-center justify-center text-xs font-bold">
                        +5k
                    </div>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                    <span className="text-foreground font-bold">5,000+</span> Customers trusted our pharmacy
                </p>
            </div>
          </motion.div>

          {/* Right Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 1.2, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl skew-y-3 lg:skew-y-0">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"
                alt="Pharmacy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Floating Info Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 glass p-8 rounded-[32px] border-2 border-secondary/20 shadow-2xl max-w-sm hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-secondary rounded-[18px] flex items-center justify-center text-white shadow-lg shadow-secondary/40">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-secondary tracking-widest">Available 24/7</p>
                  <p className="text-xl font-heading font-black">Emergency Line</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Need immediate medical assistance? Contact our emergency pharmacy hotline anytime.
              </p>
              <p className="text-2xl font-black text-foreground">+234 81 2345 6789</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
