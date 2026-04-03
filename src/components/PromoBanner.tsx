"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-64 md:h-80 rounded-[48px] overflow-hidden group border-4 border-white/20 shadow-2xl"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-xy" />
          
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

          {/* Floating Decorative Shapes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-24 h-24 bg-white/10 rounded-3xl blur-xl"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
              }}
            />
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-black uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Limited Time Offer</span>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6"
            >
              Get <span className="underline decoration-white/30 skew-x-12 inline-block">20% OFF</span> Your First Order
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="h-14 px-10 bg-white text-primary rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl transition-all group/btn active:scale-95">
                Claim My Discount
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
              </button>
              <p className="text-white/80 font-bold text-sm bg-black/10 backdrop-blur-sm px-6 h-14 flex items-center rounded-2xl border border-white/20">
                Use Code: <span className="text-white ml-2">GPS20</span>
              </p>
            </motion.div>
          </div>
          
          {/* Star Decoration */}
          <div className="absolute top-10 right-10 flex flex-col gap-4 text-white/20 group-hover:text-white/40 transition-colors duration-500">
            <Star className="w-8 h-8 fill-current" />
            <Star className="w-6 h-6 fill-current ml-8" />
            <Star className="w-10 h-10 fill-current ml-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
