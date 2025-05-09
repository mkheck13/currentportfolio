"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const navItems = [
    { label: "About", href: "#AboutMe" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#ContactMe" },
];

export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-90 backdrop-blur border-b border-gray-800">
            <nav className="container mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-teal-500">Michael Heckerman</h1>

                <ul className="hidden md:flex space-x-6 text-white text-sm sm:text-base">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                scroll={true}
                                className="hover:text-teal-400 transition-colors"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#121212] px-6 pb-4 space-y-3 shadow-md border-t border-gray-700"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                scroll={true}
                                className="block text-white hover:text-teal-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}

