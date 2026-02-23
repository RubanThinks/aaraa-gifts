"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Weight, Package, PenTool, Globe, Truck } from 'lucide-react';

const specs = [
    {
        icon: <Ruler className="w-5 h-5" />,
        title: "Precision Sizing",
        desc: "Bespoke box dimensions ranging from 15x15x10cm to 45x45x20cm, engineered for perfect snug fitment.",
        tech: "Tolerance: ±0.5mm"
    },
    {
        icon: <Weight className="w-5 h-5" />,
        title: "Load Weightage",
        desc: "Reinforced structural integrity designed to handle weights up to 12kg without compromising base tension.",
        tech: "3-Ply Rigid Board"
    },
    {
        icon: <PenTool className="w-5 h-5" />,
        title: "Branding Specs",
        desc: "Thermal foil stamping and CO2 laser engraving techniques for permanent, high-definition identity.",
        tech: "1200 DPI Precision"
    },
    {
        icon: <Globe className="w-5 h-5" />,
        title: "Provenanced Materials",
        desc: "Sustainably sourced 280GSM organic papers and untreated sandalwood accents from certified forests.",
        tech: "FSC Certified"
    },
    {
        icon: <Package className="w-5 h-5" />,
        title: "Preservation Tech",
        desc: "Moisture-sealed interior linings and shock-absorbent cushioning to preserve delicate contents.",
        tech: "Anti-humidity Barrier"
    },
    {
        icon: <Truck className="w-5 h-5" />,
        title: "Logistics Sync",
        desc: "Real-time temperature monitoring and 'Fragile-X' handling protocols for interstate transit.",
        tech: "Full Insurance Cover"
    }
];

const TechnicalDetails = () => {
    return (
        <section className="py-40 bg-brand-brown text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-32">
                    <span className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-6 block">Technical Excellence</span>
                    <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[0.95] tracking-tight">The Science <br /> <span className="italic text-brand-copper">of Perfection.</span></h2>
                    <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl">
                        At Aaraa, we bridge the gap between artisanal beauty and technical engineering. Every gift is a result of balanced weightages and precise material science.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {specs.map((spec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full border border-brand-copper/30 flex items-center justify-center text-brand-copper group-hover:bg-brand-copper group-hover:text-brand-brown transition-all duration-500 flex-shrink-0">
                                    {spec.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif mb-3 tracking-wide">{spec.title}</h4>
                                    <p className="text-white/40 text-sm font-light leading-relaxed mb-4">
                                        {spec.desc}
                                    </p>
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-brand-copper font-bold px-3 py-1 border border-brand-copper/20 rounded-full">
                                        {spec.tech}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalDetails;
