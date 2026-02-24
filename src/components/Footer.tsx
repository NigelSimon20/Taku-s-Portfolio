"use client";
import { useState } from "react";
import Link from "next/link";

const quickLinks = ["Home", "About", "Work", "Resume", "Contact Me"];

export default function Footer() {
    const [email, setEmail] = useState("");

    return (
        <footer className="bg-[#0d0d1a] text-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-3 gap-12 mb-12">
                    {/* Left: Logo + Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg tracking-widest mb-4">TAKUNDA</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            A freelance designer and developer creating beautiful digital experiences.
                        </p>
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Get In Touch"
                                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button className="w-9 h-9 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors shrink-0">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Center: Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm tracking-wider text-gray-300 mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <Link
                                        href="#"
                                        className="text-gray-400 text-sm hover:text-white transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Contact */}
                    <div>
                        <h4 className="font-semibold text-sm tracking-wider text-gray-300 mb-5">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                hello@takunda.com
                            </li>
                            <li className="flex items-start gap-2 text-gray-400 text-sm">
                                <svg className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                123 Main Street, City, State 12345
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex items-center justify-between">
                    <p className="text-gray-500 text-xs">
                        Copyright 2025 by Takunda
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                    >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
