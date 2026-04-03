"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Pill, User, Coffee, Leaf, ArrowRight } from "lucide-react";
import { categories } from "@/data/mock";
import { cn } from "@/lib/utils";

const iconMap = {
  ShoppingCart,
  Pill,
  User,
  Coffee,
  Leaf,
};

export default function Categories() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">
              Explore Our <span className="text-primary">Categories</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find everything you need, from fresh groceries to certified medications 
              and daily home essentials.
            </p>
          </div>
          <Link 
            href="/shop" 
            className="flex items-center gap-2 text-primary font-bold group hover:underline underline-offset-4"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const href = category.name === "Pharmacy" ? "/pharmacy" : category.name === "Groceries" ? "/groceries" : `/shop?category=${category.name}`;
            
            return (
              <Link key={category.id} href={href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative h-48 bg-card rounded-[32px] p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden border border-border"
                >
                  {/* Background Decoration */}
                  <div 
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: category.color }}
                  />

                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-[10deg]"
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="font-heading font-bold text-lg group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">120+ Products</p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
