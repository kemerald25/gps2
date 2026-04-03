"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Plus, Heart, Search, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/mock";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/types";

interface ProductGridProps {
  initialCategory?: string;
  title?: string;
  description?: string;
  filterType?: "all" | "pharmacy" | "groceries";
}

export default function ProductGrid({ 
  initialCategory = "All", 
  title = "Shop Our Products",
  description = "Discover the best quality groceries and pharmacy essentials.",
  filterType = "all"
}: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const { addToCart } = useCart();

  const categories = filterType === "pharmacy" 
    ? ["Pharmacy", "Medications", "Supplements", "First Aid"]
    : filterType === "groceries"
    ? ["Groceries", "Fresh Produce", "Beverages", "Dairy", "Meat"]
    : ["All", "Groceries", "Pharmacy", "Personal Care", "Beverages", "Fresh Produce", "Baby Products", "Household"];

  const filteredProducts = products.filter((product) => {
    const matchesFilterType = 
      filterType === "all" || 
      (filterType === "pharmacy" && product.isPharmacy) || 
      (filterType === "groceries" && !product.isPharmacy);
    
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilterType && matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
        <div className="max-w-2xl">
          <h2 
            className="text-4xl md:text-6xl font-heading font-black mb-6"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="relative group flex-grow sm:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-4 bg-muted border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-4 bg-muted border border-border rounded-2xl font-bold hover:bg-border transition-all">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-8 py-3 rounded-2xl text-sm font-bold transition-all whitespace-nowrap border-2",
              activeCategory === cat 
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105" 
                : "bg-background border-border text-muted-foreground hover:border-primary/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative bg-card border border-border rounded-[40px] p-5 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-6 left-6 z-10 flex gap-2">
                {product.isPharmacy && (
                    <span className="bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm border border-secondary/20">
                    Pharmacy
                    </span>
                )}
                <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20">
                  {product.category}
                </span>
              </div>

              <button className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center text-muted-foreground hover:text-red-500 transition-all hover:scale-110 active:scale-95">
                <Heart className="w-5 h-5" />
              </button>

              <div className="relative aspect-square mb-6 rounded-[32px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
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
                        className="w-full h-14 bg-primary text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                      >
                        <Plus className="w-5 h-5" />
                        Quick Add
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"
                      )}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground font-black ml-1">
                    ({product.rating})
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-foreground">
                      ₦{product.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium line-through">
                      ₦{(product.price * 1.2).toLocaleString()}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-lg hover:rotate-[15deg] transition-all"
                  >
                    <ShoppingCart className="w-7 h-7" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-heading font-bold mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
        </div>
      )}
    </section>
  );
}
