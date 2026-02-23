"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Zap, Heart } from 'lucide-react';

const trustPoints = [
    { title: "Artisan Quality", desc: "Curating only from the most premium, high-end makers worldwide.", icon: <Shield className="w-6 h-6" /> },
    { title: "Bespoke Branding", desc: "Customized color palettes and branding for corporate identity.", icon: <Heart className="w-6 h-6" /> },
    { title: "Secure Delivery", desc: "Trained logistics handlers ensure pristine box delivery every time.", icon: <Zap className="w-6 h-6" /> },
];

const TrustSections = () => {
    return (
        <section className="py-40 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Visual Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
                    {trustPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-brand-ivory p-16 rounded-3xl text-center group border border-transparent hover:border-brand-copper/10 transition-all duration-500"
                        >
                            <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center text-brand-copper mb-10 mx-auto group-hover:scale-110 group-hover:bg-brand-copper group-hover:text-white transition-all duration-700">
                                {point.icon}
                            </div>
                            <h3 className="text-2xl font-serif mb-6 text-brand-brown uppercase tracking-wider">{point.title}</h3>
                            <p className="text-brand-espresso/40 leading-relaxed text-base font-light max-w-xs mx-auto">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Impact Statement */}
                <div className="max-w-5xl mx-auto text-center">
                    <div className="flex justify-center gap-2 text-brand-copper mb-12">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} fill="#C67139" className="w-5 h-5" />)}
                    </div>
                    <blockquote className="text-4xl md:text-7xl font-serif text-brand-brown leading-tight mb-16 italic font-bold">
                        "They don't just deliver gifts; they deliver a feeling of absolute <span className="text-brand-copper underline decoration-1 underline-offset-8">exclusivity</span> and care."
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-[1px] bg-brand-copper mb-8" />
                        <p className="text-xs uppercase tracking-[0.6em] text-brand-brown font-bold">Ananya Sharma, Founder Signature Events</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSections;
