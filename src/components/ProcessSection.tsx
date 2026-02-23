"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, PenTool, Package, Send, Sparkles } from 'lucide-react';

const steps = [
    {
        icon: <Palette className="w-6 h-6" />,
        number: "01",
        title: "Curation & Design",
        desc: "We select products that complement each other in aesthetics, quality, and story."
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        number: "02",
        title: "Personalization",
        desc: "Custom notes, branded packaging, and unique themes tailored to your specific needs."
    },
    {
        icon: <Package className="w-6 h-6" />,
        number: "03",
        title: "Artisanal Packing",
        desc: "Each box is hand-packed with meticulous attention to detail and premium materials."
    },
    {
        icon: <Send className="w-6 h-6" />,
        number: "04",
        title: "Safe Delivery",
        desc: "Reliable logistics ensuring your gift reaches its destination in pristine condition."
    }
];

const ProcessSection = () => {
    return (
        <section className="py-40 bg-brand-espresso text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <Sparkles className="text-brand-gold w-5 h-5" />
                        <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">The Artisanal Journey</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[0.85] tracking-tighter">
                        Crafting the <br />
                        <span className="italic font-light text-stroke opacity-40">Extraordinary</span>
                    </h2>
                    <p className="text-white/40 text-lg font-light leading-relaxed">
                        We don't just send boxes; we deliver experiences. Our meticulous process ensures that every gift is a masterpiece of curation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="p-12 hover:bg-white/[0.02] transition-colors duration-700 relative group"
                        >
                            <span className="text-sm font-bold text-brand-gold/40 tracking-[0.3em] mb-12 block group-hover:text-brand-gold transition-colors">
                                STEP {step.number}
                            </span>

                            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-brand-gold mb-10 group-hover:scale-110 group-hover:border-brand-gold transition-all duration-700">
                                {step.icon}
                            </div>

                            <h3 className="text-2xl font-serif mb-6 group-hover:text-brand-gold transition-colors">{step.title}</h3>
                            <p className="text-white/30 text-sm font-light leading-relaxed group-hover:text-white/50 transition-colors">
                                {step.desc}
                            </p>

                            {/* Fancy numbering in background */}
                            <span className="absolute top-10 right-10 text-8xl font-serif italic text-white/[0.03] pointer-events-none group-hover:text-brand-gold/[0.05] transition-colors">
                                {step.number}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <div className="mt-40 text-center">
                    <div className="section-divider mb-20" />
                    <p className="text-3xl md:text-5xl font-serif italic text-white/80 max-w-4xl mx-auto leading-tight">
                        "Gifting is an art form. We are the curators of your most <span className="text-brand-gold underline decoration-brand-gold/30 underline-offset-8">precious moments</span>."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;

