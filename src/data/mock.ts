import { Product, Category, Testimonial } from "@/types";

export const categories: Category[] = [
  { id: "1", name: "Groceries", icon: "ShoppingCart", color: "#0F9D58" },
  { id: "2", name: "Pharmacy", icon: "Pill", color: "#2563EB" },
  { id: "3", name: "Personal Care", icon: "User", color: "#F59E0B" },
  { id: "4", name: "Beverages", icon: "Coffee", color: "#F43F5E" },
  { id: "5", name: "Fresh Produce", icon: "Leaf", color: "#10B981" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Organic Bananas",
    price: 1200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=500&auto=format&fit=crop",
    category: "Fresh Produce",
  },
  {
    id: "p2",
    name: "Paracetamol 500mg",
    price: 500,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500&auto=format&fit=crop",
    category: "Pharmacy",
    isPharmacy: true,
  },
  {
    id: "p3",
    name: "Fresh Whole Milk",
    price: 1500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=500&auto=format&fit=crop",
    category: "Beverages",
  },
  {
    id: "p4",
    name: "Vitamin C Supplements",
    price: 3500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=500&auto=format&fit=crop",
    category: "Pharmacy",
    isPharmacy: true,
  },
  {
    id: "p5",
    name: "Premium Basmati Rice",
    price: 12500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500&auto=format&fit=crop",
    category: "Groceries",
  },
  {
    id: "p6",
    name: "Moisturizing Lotion",
    price: 4200,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop",
    category: "Personal Care",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aisha Bello",
    role: "Regular Customer",
    content: "GPS Mart has revolutionized my grocery shopping. The fresh produce is always top-notch and the delivery is incredibly fast!",
    avatar: "https://i.pravatar.cc/150?u=aisha",
  },
  {
    id: "t2",
    name: "Chidi Okafor",
    role: "Health Enthusiast",
    content: "The pharmacy section is so convenient. I can consult a pharmacist and get my medications delivered without any stress.",
    avatar: "https://i.pravatar.cc/150?u=chidi",
  },
  {
    id: "t3",
    name: "Sarah Williams",
    role: "Busy Mom",
    content: "Everything I need in one place! It saves me so much time. Highly recommend for any family in Lagos.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
];
