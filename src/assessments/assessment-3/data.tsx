import { DollarSign, TrendingUp } from "lucide-react";
import type { Product } from "./types";

export const productSortOptions = [
  {
    value: "price-low",
    label: "Price: Low to High",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    value: "price-high",
    label: "Price: High to Low",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    value: "a-z",
    label: "A to Z",
    icon: <TrendingUp className="h-4 w-4" />,
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    description:
      "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and premium sound quality.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: { rate: 4.8, count: 2345 },
  },
  {
    id: 2,
    title: "Ultra-Thin Laptop - 15 inch",
    price: 899.99,
    description:
      "Lightweight and powerful laptop perfect for professionals and students. Features latest processor and 16GB RAM.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    rating: { rate: 4.6, count: 1890 },
  },
  {
    id: 3,
    title: "Premium Leather Backpack",
    price: 149.99,
    description:
      "Stylish and durable genuine leather backpack with multiple compartments. Perfect for travel and daily use.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: { rate: 4.7, count: 1567 },
  },
  {
    id: 4,
    title: "Stainless Steel Water Bottle",
    price: 34.99,
    description:
      "Eco-friendly insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. 1L capacity.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e9?w=500&h=500&fit=crop",
    rating: { rate: 4.9, count: 3421 },
  },
  {
    id: 5,
    title: "4K Smart Television 55 inch",
    price: 599.99,
    description:
      "Ultra HD 4K Smart TV with built-in streaming apps, HDR support, and voice control. 120Hz refresh rate.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    rating: { rate: 4.5, count: 987 },
  },
  {
    id: 6,
    title: "Wireless Charging Pad",
    price: 29.99,
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices. Non-slip rubber base.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1591290619098-b5b38d46a4c6?w=500&h=500&fit=crop",
    rating: { rate: 4.4, count: 2156 },
  },
  {
    id: 7,
    title: "Bamboo Cutting Board Set",
    price: 44.99,
    description:
      "Set of 3 durable bamboo cutting boards with food-grade finish. Includes storage container.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop",
    rating: { rate: 4.6, count: 1234 },
  },
  {
    id: 8,
    title: "Professional Coffee Maker",
    price: 129.99,
    description:
      "Programmable coffee maker with temperature control. Brews 12 cups and has a thermal carafe.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&h=500&fit=crop",
    rating: { rate: 4.7, count: 1876 },
  },
  {
    id: 9,
    title: "Portable Bluetooth Speaker",
    price: 79.99,
    description:
      "360-degree sound with waterproof design. 20-hour battery life and connects to 2 devices.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133da26d?w=500&h=500&fit=crop",
    rating: { rate: 4.8, count: 2789 },
  },
  {
    id: 10,
    title: "Yoga Mat with Carrying Strap",
    price: 39.99,
    description:
      "Non-slip eco-friendly yoga mat with alignment marks. 6mm thickness for comfort and support.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    rating: { rate: 4.5, count: 1645 },
  },
  {
    id: 11,
    title: "Mechanical Keyboard RGB",
    price: 149.99,
    description:
      "Gaming mechanical keyboard with custom switches and programmable RGB lighting. Aluminum frame.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1587829191301-4c3ee4eb4314?w=500&h=500&fit=crop",
    rating: { rate: 4.7, count: 2456 },
  },
  {
    id: 12,
    title: "Running Shoes - Pro Edition",
    price: 149.99,
    description:
      "Advanced cushioning technology for maximum comfort. Lightweight breathable mesh upper.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: { rate: 4.6, count: 3421 },
  },
  {
    id: 13,
    title: "Desk Lamp with USB Port",
    price: 49.99,
    description:
      "LED desk lamp with adjustable brightness, color temperature control, and integrated USB charging port.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=500&h=500&fit=crop",
    rating: { rate: 4.8, count: 987 },
  },
  {
    id: 14,
    title: "Wireless Gaming Mouse",
    price: 69.99,
    description:
      "High precision gaming mouse with customizable buttons and adjustable DPI settings. 100-hour battery.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    rating: { rate: 4.5, count: 1876 },
  },
  {
    id: 15,
    title: "Portable Power Bank 30000mAh",
    price: 59.99,
    description:
      "Fast charging power bank with dual USB-C ports and LED display. Charges devices 5-7 times.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    rating: { rate: 4.7, count: 2234 },
  },
  {
    id: 16,
    title: "Stainless Steel Kitchen Knife Set",
    price: 89.99,
    description:
      "Set of 5 professional kitchen knives with comfortable grip handles and protective blade guards.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5b1e6dd4e51?w=500&h=500&fit=crop",
    rating: { rate: 4.8, count: 1567 },
  },
  {
    id: 17,
    title: "Smart Watch Pro",
    price: 299.99,
    description:
      "AMOLED display smartwatch with heart rate monitor, GPS, and 7-day battery life.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: { rate: 4.6, count: 2890 },
  },
  {
    id: 18,
    title: "Organic Cotton Pillow",
    price: 54.99,
    description:
      "Hypoallergenic organic cotton pillow with memory foam core. Machine washable cover.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1584622180039-94f0b707dc4a?w=500&h=500&fit=crop",
    rating: { rate: 4.7, count: 1234 },
  },
  {
    id: 19,
    title: "Webcam 4K Pro",
    price: 129.99,
    description:
      "4K resolution webcam with built-in microphone and auto focus. Perfect for streaming and video calls.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1598655072163-57f382b70a6f?w=500&h=500&fit=crop",
    rating: { rate: 4.5, count: 1098 },
  },
  {
    id: 20,
    title: "Fitness Tracker Band",
    price: 99.99,
    description:
      "Waterproof fitness tracker with sleep monitoring, step counter, and calorie burn tracking.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b3ff6ca56?w=500&h=500&fit=crop",
    rating: { rate: 4.6, count: 2123 },
  },
];
