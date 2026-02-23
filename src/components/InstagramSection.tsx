"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

const instaImages = [
    "/assets/images/insta/insta1.jpg",
    "/assets/images/insta/insta2.jpg",
    "/assets/images/insta/insta3.jpg",
    "/assets/images/insta/insta4.jpg",
    "/assets/images/insta/insta6.jpg",
    "/assets/images/insta/2.jpg"
];

const InstagramSection = () => {
    return (
        <section className="py-40 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-20">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-copper font-bold mb-4 block">Follow Us</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-brand-brown mb-0">@aaraagifts <span className="italic text-brand-copper">Studio</span></h2>
                    </div>
                    <Link
                        href="https://www.instagram.com/aaraagifts"
                        target="_blank"
                        className="mt-8 md:mt-0 flex items-center gap-4 px-10 py-4 border border-brand-brown/10 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-brand-brown hover:text-white transition-all duration-500 rounded-sm"
                    >
                        <Instagram size={16} />
                        View on Instagram
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {instaImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src={img}
                                alt="Aaraa Gifting Instance"
                                fill
                                className="object-cover transition-all duration-1000 group-hover:scale-110"
                                unoptimized
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <Instagram className="text-white w-6 h-6 z-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
