"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const products = [
    { id: "wd-4", title: "The Silk Bloom Box", img: "/assets/images/products/womens/w2.jpg" },
    { id: "wd-5", title: "Rose Quartz Wellness Kit", img: "/assets/images/products/womens/w3.jpg" },
    { id: "wd-6", title: "Midnight Jasmine Suite", img: "/assets/images/products/womens/w5.jpg" },
    { id: "wd-1", title: "Botanical Gold Chest", img: "/assets/images/insta/2.jpg" },
    { id: "wd-2", title: "Lavender & Lace Hamper", img: "/assets/images/insta/3.jpg" },
    { id: "wd-3", title: "Organic Tea Crate", img: "/assets/images/insta/4.jpg" },
];

export default function WomensDayPage() {
    const { addToCart } = useCart();

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
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-2xl bg-white shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                <Link href={`/products/${product.id}`}>
                                    <Image
                                        src={product.img}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/10 transition-all duration-700" />
                                </Link>

                                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="w-full py-4 bg-white/90 backdrop-blur-sm text-brand-brown text-[10px] uppercase font-bold tracking-widest hover:bg-brand-brown hover:text-white transition-colors flex items-center justify-center gap-3 shadow-sm mb-1"
                                    >
                                        View Details <ChevronRight size={14} />
                                    </Link>
                                    <button
                                        onClick={() => addToCart({
                                            id: product.id,
                                            title: product.title,
                                            img: product.img
                                        })}
                                        className="w-full py-4 bg-brand-maroon text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-brown transition-colors flex items-center justify-center gap-3 shadow-xl"
                                    >
                                        <ShoppingBag size={14} />
                                        Add to Hamper
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <Link href={`/products/${product.id}`}>
                                    <h3 className="text-2xl font-serif text-brand-brown mb-2 group-hover:text-brand-copper transition-colors tracking-tight">{product.title}</h3>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
