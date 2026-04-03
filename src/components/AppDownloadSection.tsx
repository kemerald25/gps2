"use client";

import { motion } from "framer-motion";
import { Smartphone, Apple, PlayCircle, Star, ShieldCheck, Zap } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section className="py-32 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-6">
              <Smartphone className="w-5 h-5" />
              <span>Mobile First Experience</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight mb-8">
              Download the <br />
              <span className="text-primary italic">GPS Mart App</span> Today.
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
              Get the full GPS Mart experience on your mobile device. 
              Track your orders in real-time, get exclusive app-only deals, 
              and consult with pharmacists on the go.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Star, title: "4.9/5 Rating", desc: "Top-rated on App Stores" },
                { icon: ShieldCheck, title: "100% Secure", desc: "Encrypted Transactions" },
                { icon: Zap, title: "Fast Delivery", desc: "Real-time Tracking" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/10 border border-border">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto h-16 px-8 bg-black text-white rounded-2xl flex items-center gap-4 hover:scale-105 transition-all group border border-white/10 active:scale-95">
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-xs text-white/70 font-medium">Download on the</p>
                  <p className="text-xl font-heading font-bold -mt-1 group-hover:text-primary transition-colors">App Store</p>
                </div>
              </button>

              <button className="w-full sm:w-auto h-16 px-8 bg-black text-white rounded-2xl flex items-center gap-4 hover:scale-105 transition-all group border border-white/10 active:scale-95">
                <PlayCircle className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-xs text-white/70 font-medium">Get it on</p>
                  <p className="text-xl font-heading font-bold -mt-1 group-hover:text-primary transition-colors">Google Play</p>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center perspective-1000"
          >
            {/* Phone Body Mockup (SVG/CSS) */}
            <div className="relative w-[300px] h-[600px] bg-black rounded-[50px] p-4 shadow-[0_50px_100px_rgba(0,0,0,0.3)] border-8 border-muted/50 transform group-hover:rotate-y-12 transition-transform duration-1000">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[20px] z-20" />
              <div className="relative w-full h-full bg-background rounded-[35px] overflow-hidden">
                {/* App UI Simulation */}
                <div className="p-6">
                  <div className="w-full h-12 bg-muted rounded-xl mb-6 flex items-center px-4">
                    <div className="w-4 h-4 bg-primary rounded-full mr-2" />
                    <div className="w-24 h-2 bg-muted-foreground/30 rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="aspect-square bg-muted rounded-2xl animate-pulse" />
                    ))}
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="w-full h-24 bg-primary/10 rounded-2xl border border-primary/20 p-4">
                        <div className="w-20 h-3 bg-primary rounded-full mb-2" />
                        <div className="w-40 h-2 bg-primary/30 rounded-full" />
                    </div>
                    <div className="w-full h-32 bg-secondary/10 rounded-2xl border border-secondary/20 p-4">
                        <div className="w-24 h-3 bg-secondary rounded-full mb-2" />
                        <div className="w-48 h-2 bg-secondary/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
