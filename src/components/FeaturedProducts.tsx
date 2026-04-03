"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingCart, Plus, Heart } from "lucide-react";
import { products } from "@/data/mock";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("All");
  const { addToCart } = useCart();

  const filteredProducts = products.filter((p) => {
    if (activeTab === "All") return true;
    if (activeTab === "Pharmacy") return p.isPharmacy;
    if (activeTab === "Groceries") return p.category === "Groceries" || p.category === "Fresh Produce";
    if (activeTab === "Essentials") return p.category === "Personal Care" || p.category === "Household";
    return p.category === activeTab;
  }).slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">
              Featured <span className="text-secondary">Products</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Handpicked quality products from our trusted suppliers, 
              guaranteed fresh and authentic.
            </p>
          </div>
          <div className="flex gap-2 bg-muted p-1 rounded-xl">
            {["All", "Pharmacy", "Groceries", "Essentials"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                  activeTab === tab ? "bg-white dark:bg-black shadow-sm" : "hover:bg-muted-foreground/10"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative bg-card border border-border rounded-[32px] p-4 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Product Badge */}
              <div className="absolute top-6 left-6 z-10">
                {product.isPharmacy ? (
                  <span className="bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm border border-secondary/20">
                    Pharmacy
                  </span>
                ) : (
                  <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20">
                    Groceries
                  </span>
                )}
              </div>

              {/* Like Button */}
              <button className="absolute top-6 right-6 z-10 w-9 h-9 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="relative aspect-square mb-6 rounded-[24px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Micro Bounce Quick Add */}
                <AnimatePresence>
                  {hoveredProduct === product.id && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      className="absolute bottom-4 left-4 right-4 flex items-center justify-center"
                    >
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-full h-12 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all active:scale-95"
                      >
                        <Plus className="w-5 h-5" />
                        Quick Add
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Product Details */}
              <div className="px-2">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-3 h-3",
                        i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"
                      )}
                    />
                  ))}
                  <span className="text-[10px] text-muted-foreground font-bold ml-1">
                    ({product.rating})
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-foreground">
                      ₦{product.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-muted-foreground line-through">
                      ₦{(product.price * 1.2).toLocaleString()}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 transition-all"
                  >
                    <ShoppingCart className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
            <Link href="/shop" className="h-14 px-10 bg-muted hover:bg-muted-foreground/10 text-foreground rounded-2xl font-bold transition-all inline-flex items-center gap-2">
                Explore All Products
                <Plus className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </section>
  );
}
