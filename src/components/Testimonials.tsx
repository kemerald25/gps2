"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/mock";

export default function Testimonials() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-10 left-10 text-[20vw] font-black text-primary/5 select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="absolute bottom-10 right-10 text-[20vw] font-black text-primary/5 select-none pointer-events-none rotate-180">
        &ldquo;
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Customer Testimonials</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">
            Hear From Our <span className="text-primary italic">Happy Customers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Join thousands of satisfied Nigerians 
            who trust GPS Mart for their daily essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-[40px] p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between overflow-hidden group"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <Quote className="absolute -top-4 -right-4 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                <p className="text-lg text-foreground font-medium leading-relaxed mb-8 relative z-10 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-border/50 pt-8 mt-auto">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-semibold text-muted-foreground italic">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Statistics section under testimonials */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
            {[
                { label: "Active Users", value: "2.5M+" },
                { label: "Cities Covered", value: "15+" },
                { label: "Daily Orders", value: "10K+" },
                { label: "Happy Faces", value: "99%" },
            ].map((stat, i) => (
                <div key={i}>
                    <h3 className="text-4xl md:text-5xl font-heading font-black text-primary mb-2 line-clamp-1">{stat.value}</h3>
                    <p className="text-sm font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
