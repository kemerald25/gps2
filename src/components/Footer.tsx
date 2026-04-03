"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send, Pill, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "./icons/BrandIcons";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Shop", href: "/shop" },
      { name: "Pharmacy", href: "/pharmacy" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Categories",
    links: [
      { name: "Groceries", href: "/groceries" },
      { name: "Medications", href: "/pharmacy" },
      { name: "Personal Care", href: "/personal-care" },
      { name: "Baby Products", href: "/baby" },
      { name: "Household", href: "/household" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Return Policy", href: "/returns" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                <Pill className="w-7 h-7" />
              </div>
              <span className="text-3xl font-heading font-black text-foreground">
                GPS<span className="text-primary italic">Mart</span>
              </span>
            </Link>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
              Your one-stop destination for quality groceries, verified pharmacy 
              products, and daily essentials. Everything you need, all in one place.
            </p>

            {/* Newsletter */}
            <div className="relative group max-w-md">
              <h4 className="text-xl font-heading font-black mb-4 flex items-center gap-2">
                Join our <span className="text-primary underline decoration-primary/30">Newsletter</span>
                <Send className="w-5 h-5 text-primary animate-pulse" />
              </h4>
              <div className="flex gap-3 h-16 p-2 bg-background border-2 border-border rounded-2xl focus-within:border-primary transition-all">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-transparent border-none focus:ring-0 text-sm font-medium w-full px-4"
                />
                <button className="h-full aspect-square bg-primary text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-primary/30">
                  <Send className="w-6 h-6" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 font-medium">
                We'll never share your email with third parties.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-heading font-black mb-8 relative">
                  {section.title}
                  <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary font-medium flex items-center gap-2 transition-colors group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 translate-x-[-4px] group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-10 border-y border-border/50 mb-10">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center border border-border group-hover:border-primary transition-colors text-primary shadow-sm group-hover:shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="font-heading font-black text-foreground">Our Location</p>
              <p className="text-sm text-muted-foreground">123 Victoria Island, Lagos, Nigeria</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center border border-border group-hover:border-secondary transition-colors text-secondary shadow-sm group-hover:shadow-md">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-heading font-black text-foreground">Phone Support</p>
              <p className="text-sm text-muted-foreground">+234 81 2345 6789</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center border border-border group-hover:border-accent transition-colors text-accent shadow-sm group-hover:shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="font-heading font-black text-foreground">Email Address</p>
              <p className="text-sm text-muted-foreground">help@gpsmart.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
          <p className="text-sm font-medium text-muted-foreground">
            © {new Date().getFullYear()} GPS Mart & Pharmacy. All rights reserved. Built with ❤️ in Lagos.
          </p>

          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-12 h-12 bg-white dark:bg-black rounded-2xl border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
