"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send this to an API
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our products or services? We&apos;re here to help you 
              every step of the way. Send us a message and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Phone, title: "Phone Support", info: "+234 81 2345 6789", color: "text-secondary" },
              { icon: Mail, title: "Email Address", info: "help@gpsmart.com", color: "text-primary" },
              { icon: MapPin, title: "Our Location", info: "123 Victoria Island, Lagos", color: "text-accent" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-8 rounded-[32px] text-center shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.info}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-[40px] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 bg-primary text-white">
                <h2 className="text-3xl font-heading font-black mb-6">Contact Information</h2>
                <p className="text-primary-foreground/80 mb-12 text-lg">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span>+234 81 2345 6789</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span>help@gpsmart.com</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span>123 Victoria Island, Lagos, NG</span>
                  </div>
                </div>

                <div className="mt-24">
                   <div className="flex items-center gap-4">
                        <MessageSquare className="w-6 h-6" />
                        <span className="font-bold">Live Chat Available 24/7</span>
                   </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-heading font-black mb-4 text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. One of our support representatives 
                       will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-6 py-4 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full px-6 py-4 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Subject</label>
                      <input 
                        required
                        type="text" 
                        placeholder="How can we help?"
                        className="w-full px-6 py-4 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Message</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Type your message here..."
                        className="w-full px-6 py-4 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      />
                    </div>
                    <button className="w-full bg-primary text-white py-5 rounded-2xl font-black shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all text-lg flex items-center justify-center gap-3">
                      <Send className="w-6 h-6" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
