"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Search, ShoppingBag, Truck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Browse & Select",
    description: "Explore our wide range of groceries and pharmacy products from top brands.",
    icon: Search,
    color: "bg-primary",
  },
  {
    title: "Add to Cart",
    description: "Fill your cart with all your essentials and securely shop for medications.",
    icon: ShoppingBag,
    color: "bg-secondary",
  },
  {
    title: "Fast Delivery",
    description: "Get your order delivered to your doorstep in 30 minutes or less, anywhere in Lagos.",
    icon: Truck,
    color: "bg-accent",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="py-32 bg-muted/20 relative overflow-hidden" ref={containerRef}>
      {/* Background Text Overlay */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading font-black text-foreground/5 whitespace-nowrap select-none pointer-events-none">
        SIMPLE PROCESS
      </h2>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>How it works</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">
            Get Everything You Need in <br />
            <span className="text-primary italic">3 Easy Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;ve streamlined our process to ensure you get your groceries and 
            medications with maximum speed and minimum stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-muted rounded-full">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-primary origin-left rounded-full shadow-[0_0_20px_rgba(15,157,88,0.5)]"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Circle */}
              <div className="relative mb-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={cn(
                    "w-[120px] h-[120px] rounded-[40px] flex items-center justify-center text-white shadow-2xl transition-all duration-500 relative z-10 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
                    step.color
                  )}
                >
                  <step.icon className="w-12 h-12" />
                </motion.div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-xl font-black text-foreground shadow-lg border-2 border-border z-20 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>

                {/* Pulsing Aura */}
                <div className={cn(
                  "absolute inset-0 rounded-[40px] blur-2xl opacity-20 animate-pulse transition-opacity group-hover:opacity-40",
                  step.color
                )} />
              </div>

              <h3 className="text-2xl font-heading font-black mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
