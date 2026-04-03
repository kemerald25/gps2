"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="mb-12">
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl md:text-6xl font-heading font-black mt-4">
            Your <span className="text-primary">Cart</span>
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Looks like you haven't added anything to your cart yet. 
              Explore our products and find something you love!
            </p>
            <Link 
              href="/shop" 
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-8 space-y-6">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-card border border-border rounded-[32px] hover:shadow-xl transition-all"
                >
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl font-heading font-bold mb-1">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.category}</p>
                    <div className="text-2xl font-black text-primary">
                      ₦{item.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-col items-center sm:items-end gap-4">
                    <div className="flex items-center bg-muted rounded-xl p-1 gap-4">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-background transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-background transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-4">
              <div className="bg-card border border-border rounded-[32px] p-8 sticky top-32 shadow-xl">
                <h2 className="text-2xl font-heading font-bold mb-8">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-bold text-foreground">₦{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-green-500 font-bold">Free</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>Tax (7.5%)</span>
                    <span className="font-bold text-foreground">₦{(cartTotal * 0.075).toLocaleString()}</span>
                  </div>
                  <div className="h-px bg-border my-4" />
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-heading font-bold">Total</span>
                    <span className="text-3xl font-black text-primary">₦{(cartTotal * 1.075).toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all mb-4">
                  Proceed to Checkout
                </button>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-black">
                  Secure Checkout Guaranteed
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
