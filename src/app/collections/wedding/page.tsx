"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const weddingProducts = [
    { title: "The Royal Brass Chest", price: "Starting ₹8,500", img: "/assets/images/products/wedding/wed1.jpg" },
    { title: "Silver Inlay Thali Set", price: "Starting ₹12,000", img: "/assets/images/products/wedding/wed3.jpg" },
    { title: "Moroccan Tea Lantern Suite", price: "Starting ₹6,200", img: "/assets/images/products/wedding/wed4.jpg" },
    { title: "Zardozi Handcrafted Pouch", price: "Starting ₹2,500", img: "/assets/images/products/wedding/wed5.jpg" },
    { title: "Heritage Sweet Box", price: "Starting ₹1,800", img: "/assets/images/products/wedding/wed6.jpg" },
    { title: "Copper Hammered Tumblers", price: "Starting ₹3,200", img: "/assets/images/categories/wedding.jpg" },
];

export default function WeddingPage() {
    return (
        <main className="bg-brand-ivory min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-6 block underline decoration-brand-copper/30 underline-offset-8">The Heritage Collection</span>
                <h1 className="text-5xl md:text-8xl font-serif text-brand-espresso mb-8 leading-tight">Wedding Return <br /> <span className="italic font-light text-brand-brown">Gratitude.</span></h1>
                <p className="text-brand-espresso/50 text-xl max-w-2xl mx-auto font-light leading-relaxed italic">
                    "Tokens of eternal remembrance for the guests who graced your most cherished day."
                </p>
            </div>

            <div className="container mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {weddingProducts.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-square overflow-hidden mb-10 bg-white border border-brand-brown/5">
                                <Image
                                    src={product.img}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    unoptimized
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 glass-brown translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-[10px] uppercase tracking-widest text-brand-brown font-bold mb-2">Request Catalog</p>
                                    <h4 className="text-xl font-serif text-brand-espresso">Bulk Order Inquiries</h4>
                                </div>
                            </div>
                            <h3 className="text-3xl font-serif text-brand-espresso mb-3 tracking-tight">{product.title}</h3>
                            <p className="text-brand-copper italic text-base">{product.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
