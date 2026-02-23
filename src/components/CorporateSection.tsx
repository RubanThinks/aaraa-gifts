"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Laptop, Coffee } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: <Briefcase className="w-5 h-5" />,
        title: "Custom Branding",
        desc: "Integrated logos, color-matched ribbons, and custom greeting cards."
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: "Large Scale Execution",
        desc: "Capacity to handle volume orders with consistent artisanal quality."
    },
    {
        icon: <Laptop className="w-5 h-5" />,
        title: "Employee Appreciation",
        desc: "Tailored onboarding kits and milestone gifts for your team."
    },
    {
        icon: <Coffee className="w-5 h-5" />,
        title: "Event Gifting",
        desc: "Curated hampers for conferences, launches, and corporate retreats."
    }
];

const CorporateSection = () => {
    return (
        <section className="py-40 bg-brand-ivory">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="relative aspect-square lg:aspect-auto lg:h-[80vh] rounded-3xl overflow-hidden"
                    >
                        <Image
                            src="/assets/images/insta/insta6.jpg"
                            alt="Corporate Gifting Service"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="glass p-12 rounded-3xl text-center max-w-sm">
                                <h3 className="text-3xl font-serif text-brand-brown mb-4">Elevate Your Brand</h3>
                                <p className="text-brand-espresso/60 text-sm font-light">Join 500+ companies that trust Aara for their gifting needs.</p>
                            </div>
                        </div>
                    </motion.div>

                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-copper font-bold mb-6 block">Corporate Excellence</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-brand-brown mb-12 leading-tight">Partners in <br /><span className="italic text-brand-copper">Memorable</span> Impressions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {features.map((f, i) => (
                                <div key={i} className="group">
                                    <div className="text-brand-copper mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {f.icon}
                                    </div>
                                    <h4 className="text-xl font-serif text-brand-brown mb-3 uppercase tracking-wider">{f.title}</h4>
                                    <p className="text-brand-espresso/40 text-sm leading-relaxed font-light">{f.desc}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/aaraa-catalogue.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-12 py-5 bg-brand-brown text-white text-[11px] tracking-[0.3em] font-bold uppercase rounded-sm hover:bg-brand-copper transition-all duration-500 inline-block"
                        >
                            Download Catalogue
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateSection;
