"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Truck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Decorative Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Verified Groceries & Pharmaceuticals</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight text-foreground mb-6"
            >
              Everything you need, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                all in one place.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              Your trusted partner for fresh groceries, authentic pharmacy products, 
              and daily essentials. Quality guaranteed, delivered to your doorstep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/shop" className="w-full sm:w-auto h-14 px-8 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg hover:shadow-primary/30">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pharmacy" className="w-full sm:w-auto h-14 px-8 bg-secondary/10 text-secondary border-2 border-secondary/20 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/20 transition-all">
                Upload Prescription
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image + Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-[40px] shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop"
                alt="GPS Mart Hero"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Glassmorphism Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 md:-left-12 glass p-4 rounded-2xl flex items-center gap-3 animate-float whitespace-nowrap"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                <Truck className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <p className="font-bold">Free Delivery</p>
                <p className="text-muted-foreground text-xs">Over ₦10,000</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 -right-6 md:-right-12 glass p-4 rounded-2xl flex items-center gap-3 animate-float-delayed whitespace-nowrap"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <p className="font-bold">Verified Pharmacy</p>
                <p className="text-muted-foreground text-xs">Certified Pharmacists</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
