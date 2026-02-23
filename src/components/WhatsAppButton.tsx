"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/919711200000" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
        >
            {/* Pulse ring animation */}
            <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#4FCE5D] rounded-full"
            />

            {/* Official WhatsApp SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="50"
                height="50"
                className="relative z-10 drop-shadow-lg"
            >
                <path
                    fill="#4FCE5D"
                    d="M15,3C8.373,3,3,8.373,3,15c0,2.321,0.655,4.482,1.791,6.34L3,27l5.811-1.635C10.686,26.393,12.793,27,15,27 c6.627,0,12-5.373,12-12S21.627,3,15,3z"
                />
                <path
                    fill="#FFFFFF"
                    d="M21.579,18.517c-0.288,0.457-0.963,0.846-1.597,0.957c-0.635,0.111-1.442,0.222-2.316-0.088 c-0.875-0.31-1.564-0.669-2.285-1.391c-0.721-0.721-1.353-1.411-1.663-2.285c-0.31-0.875-0.2-1.681-0.088-2.316 c0.111-0.635,0.5-1.309,0.957-1.597c0.457-0.288,0.957-0.457,1.244-0.457c0.288,0,0.554,0.111,0.798,0.244 c0.244,0.133,0.577,0.377,0.822,0.669c0.244,0.292,0.505,0.672,0.721,0.957c0.216,0.285,0.437,0.572,0.589,0.822 c0.152,0.251,0.323,0.548,0.323,0.846C22.036,17.561,21.867,18.06,21.579,18.517z"
                />
            </svg>
        </motion.a>
    );
};

export default WhatsAppButton;
