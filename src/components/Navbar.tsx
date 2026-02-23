"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: "WOMEN'S DAY GIFTS",
            href: "/collections/womens-day",
            sublinks: ["Signature Boxes", "Floral Hampers", "Wellness Kits", "Natural Soy Candles"]
        },
        {
            name: "WEDDING RETURN GIFTS",
            href: "/collections/wedding",
            sublinks: ["Brass Artifacts", "Silver Platters", "Ethnic Hamper Sets", "Luxury Wedding Sweets"]
        },
        {
            name: "MAKE YOUR OWN HAMPER",
            href: "/collections/custom",
            sublinks: ["Select Box Size", "Choose Lining", "Curate Items", "Personalized Note"]
        },
        {
            name: "CORPORATE STUDIO",
            href: "/corporate",
            sublinks: ["Gift Combos", "Handbook & Pen Sets", "Premium Pens", "Flasks & Bags"]
        },
        { name: "OUR STORY", href: "/about" },
        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 left-0 right-0 z-[100] w-full bg-brand-maroon border-b border-white/5">
            {/* Announcement Bar - Slimmer */}
            <div className="bg-brand-brown/90 text-white py-1 overflow-hidden h-7 flex items-center border-b border-white/5">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="mx-8 text-[8px] font-bold uppercase tracking-[0.4em] flex items-center">
                            Curating Extraordinary Moments <span className="w-1 h-1 bg-brand-rosegold/50 rounded-full ml-12" />
                            Global Luxury Shipping Available <span className="w-1 h-1 bg-brand-rosegold/50 rounded-full ml-12" />
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Navbar - Ultra Compact */}
            <div className={`transition-all duration-300 ${isScrolled ? 'py-0.5' : 'py-1'}`}>
                <div className="container mx-auto px-6 grid grid-cols-3 items-center min-h-[50px]">

                    {/* Left: Search Bar */}
                    <div className="flex items-center">
                        <div className="relative group/search">
                            <input
                                type="text"
                                placeholder="Search studio..."
                                className="bg-transparent border-b border-white/20 py-0.5 pl-6 pr-4 text-[8.5px] w-28 focus:outline-none focus:w-40 focus:border-brand-gold transition-all duration-500 text-white"
                            />
                            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-white/50" size={10} />
                        </div>
                    </div>

                    {/* Center: Logo - Scaled UP by 50% */}
                    <div className="flex justify-center py-1">
                        <Link href="/" className="relative group/logo">
                            <div className={`relative transition-all duration-500 ${isScrolled ? 'h-24 w-48' : 'h-[120px] w-[240px] lg:h-[150px] lg:w-[300px]'}`}>
                                <Image
                                    src="/aaraa-logo-transparent.png"
                                    alt="Aara Gifting"
                                    fill
                                    className="object-contain"
                                    priority
                                    unoptimized
                                    onError={() => setLogoError(true)}
                                />
                                {logoError && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-brown text-center">
                                        <span className="text-2xl font-serif font-bold tracking-widest leading-none text-white">AARA</span>
                                        <span className="text-[6px] uppercase tracking-[0.4em] font-bold text-brand-gold">Luxury Studio</span>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>

                    {/* Right: Icons */}
                    <div className="flex items-center justify-end space-x-3 text-white">
                        <div className="hidden lg:flex items-center space-x-4">
                            <Heart className="hover:text-brand-brown cursor-pointer transition-colors" size={14} />
                            <User className="hover:text-brand-brown cursor-pointer transition-colors" size={14} />
                            <div className="relative cursor-pointer group/bag">
                                <ShoppingBag className="group-hover/bag:text-brand-brown transition-colors" size={14} />
                                <span className="absolute -top-1 -right-1 bg-brand-brown text-white text-[6px] font-bold w-3 h-3 rounded-full flex items-center justify-center">0</span>
                            </div>
                        </div>
                        {/* Mobile Toggle */}
                        <button className="lg:hidden p-1 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation Links - Tighter Spacing */}
                <nav className={`hidden lg:flex justify-center space-x-6 mt-1 relative z-50 transition-all duration-500 ${isScrolled ? 'mt-0 pb-1' : 'mt-0 pb-2'}`}>
                    {navLinks.map((link, i) => (
                        <div
                            key={i}
                            className="relative"
                            onMouseEnter={() => setActiveSubmenu(i)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                        >
                            <Link
                                href={link.href}
                                className="text-[8.5px] font-bold text-white/80 hover:text-brand-gold tracking-[0.15em] transition-colors relative block py-1"
                            >
                                {link.name}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
                            </Link>

                            {/* Dropdown Menu - Rosegold accented */}
                            <AnimatePresence>
                                {activeSubmenu === i && link.sublinks && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-3 z-50"
                                    >
                                        <div className="bg-white border border-brand-gold rounded-sm py-3 overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-rosegold via-brand-brown to-brand-rosegold" />
                                            {link.sublinks.map((sub, j) => (
                                                <Link
                                                    key={j}
                                                    href={link.href}
                                                    className="block px-6 py-2.5 text-[8.5px] text-brand-espresso/60 hover:text-brand-brown hover:bg-brand-rosegold/20 tracking-[0.15em] transition-all uppercase font-bold"
                                                >
                                                    {sub}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-brand-ivory z-[150] p-10 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-xl font-serif text-brand-brown tracking-widest">AARA</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-brown">
                                <X size={28} />
                            </button>
                        </div>
                        <div className="space-y-8">
                            {navLinks.map((link, i) => (
                                <div key={i} className="flex flex-col space-y-4">
                                    <Link
                                        key={i}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-serif text-brand-brown uppercase tracking-wider"
                                    >
                                        {link.name}
                                    </Link>
                                    {link.sublinks && (
                                        <div className="grid grid-cols-1 gap-4 pl-4 border-l border-brand-brown/10">
                                            {link.sublinks.map((sub, j) => (
                                                <Link
                                                    key={j}
                                                    href={link.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-brand-brown/40 text-xs uppercase tracking-widest"
                                                >
                                                    {sub}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
