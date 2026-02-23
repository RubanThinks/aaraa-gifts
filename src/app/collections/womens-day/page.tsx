"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const products = [
    { title: "The Silk Bloom Box", price: "₹4,200", img: "/assets/images/products/womens/w2.jpg" },
    { title: "Rose Quartz Wellness Kit", price: "₹3,800", img: "/assets/images/products/womens/w3.jpg" },
    { title: "Midnight Jasmine Suite", price: "₹5,500", img: "/assets/images/products/womens/w5.jpg" },
    { title: "Botanical Gold Chest", price: "₹7,200", img: "/assets/images/categories/branded.jpg" },
    { title: "Lavender & Lace Hamper", price: "₹3,500", img: "/assets/images/categories/personal.jpg" },
    { title: "Organic Tea Crate", price: "₹2,800", img: "/assets/images/categories/tshirt.jpg" },
];

export default function WomensDayPage() {
    return (
        <main className="bg-brand-ivory min-h-screen">
            <Navbar />

            {/* Header Section */}
            <div className="pt-32 pb-20 container mx-auto px-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-6 block underline decoration-brand-copper/30 underline-offset-8">Limited Edition</span>
                <h1 className="text-5xl md:text-8xl font-serif text-brand-espresso mb-8 leading-tight">Women's Day <br /> <span className="italic font-light text-brand-brown">Curations.</span></h1>
                <p className="text-brand-espresso/50 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Celebrating the extraordinary women in our lives with gifts that mirror their strength, grace, and distinction.
                </p>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-2xl bg-white">
                                <Image
                                    src={product.img}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-brand-elephant/0 group-hover:bg-brand-elephant/20 transition-all duration-700" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 glass opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <button className="w-full py-4 bg-brand-elephant text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-copper transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif text-brand-espresso mb-2 group-hover:text-brand-copper transition-colors tracking-tight">{product.title}</h3>
                            <p className="text-brand-copper font-bold text-sm tracking-wider">{product.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
