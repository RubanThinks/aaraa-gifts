"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="py-32 bg-brand-ivory">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-2xl border border-brand-brown/5 bg-white rounded-3xl overflow-hidden">
                    <div className="lg:w-1/3 p-12 lg:p-16 bg-brand-brown text-white">
                        <h2 className="text-3xl lg:text-5xl font-serif mb-10 leading-tight">Start Your <span className="italic text-brand-sandal">Gifting Journey</span></h2>
                        <p className="text-white/40 mb-16 leading-relaxed text-sm font-light">
                            From large scale corporate orders to bespoke personal hampers, tell us what you're looking for and our master curators will reach out shortly.
                        </p>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-brand-sandal">
                                    <Send size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Inquiry</p>
                                    <p className="text-sm font-serif">enquire@aaragifts.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:w-2/3 p-12 lg:p-16 bg-white">
                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="relative group">
                                    <input type="text" className="w-full bg-transparent border-b border-brand-brown/10 py-4 focus:outline-none focus:border-brand-brown transition-all text-sm font-medium placeholder:text-brand-espresso/20" placeholder="FULL NAME" />
                                </div>
                                <div className="relative group">
                                    <input type="email" className="w-full bg-transparent border-b border-brand-brown/10 py-4 focus:outline-none focus:border-brand-brown transition-all text-sm font-medium placeholder:text-brand-espresso/20" placeholder="EMAIL ADDRESS" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <select className="w-full bg-transparent border-b border-brand-brown/10 py-4 focus:outline-none focus:border-brand-brown transition-all text-[11px] tracking-widest uppercase font-semibold text-brand-espresso/60 cursor-pointer">
                                        <option>Corporate Gifting</option>
                                        <option>Wedding & Festive</option>
                                        <option>Personalized Hamper</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" className="w-full bg-transparent border-b border-brand-brown/10 py-4 focus:outline-none focus:border-brand-brown transition-all text-sm font-medium placeholder:text-brand-espresso/20" placeholder="EXPECTED QUANTITY" />
                                </div>
                            </div>
                            <div>
                                <textarea rows={4} className="w-full bg-transparent border-b border-brand-brown/10 py-4 focus:outline-none focus:border-brand-brown transition-all text-sm font-medium resize-none placeholder:text-brand-espresso/20" placeholder="TELL US MORE ABOUT YOUR REQUIREMENTS"></textarea>
                            </div>
                            <button className="px-12 py-5 bg-brand-brown text-white text-[11px] tracking-[0.3em] font-bold uppercase rounded-sm hover:bg-brand-copper transition-all duration-500 shadow-xl">
                                Send Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
