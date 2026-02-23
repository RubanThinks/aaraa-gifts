"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/919711200000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-[25px] right-[25px] z-[9999] w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition-all duration-300 max-[768px]:w-[55px] max-[768px]:h-[55px] max-[768px]:bottom-[20px] max-[768px]:right-[20px]"
            aria-label="Chat on WhatsApp"
        >
            <img
                src="/whatsapp-icon.svg"
                alt="WhatsApp"
                width={28}
                height={28}
                className="pointer-events-none"
            />
        </motion.a>
    );
};

export default WhatsAppButton;
