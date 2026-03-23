"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm py-4">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

                {/* Mobile: Logo */}
                <span className="font-gabriel text-2xl tracking-widest text-gray-900 md:hidden whitespace-nowrap">
                    T<span className="text-[#FF4238]">.</span>A<span className="text-[#17B6E5]">.</span>K
                    <span className="text-[#F9C300]">.</span>U<span className="text-[#FF4238]">.</span>
                    N<span className="text-[#F9C300]">.</span>D<span className="text-[#17B6E5]">.</span>A
                </span>

                {/* Left: Nav Links (desktop only) */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="font-varela text-md text-black hover:text-[#1e6153] transition-colors">
                        About
                    </Link>
                    <Link href="#projects" className="font-varela text-md text-black hover:text-[#1e6153] transition-colors">
                        Projects
                    </Link>
                    <Link href="#contact" className="font-varela text-md text-black hover:text-[#1e6153] transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Center: Logo (desktop only) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <span className="font-gabriel text-2xl tracking-widest text-gray-900 whitespace-nowrap">
                        T<span className="text-[#FF4238]">.</span>A<span className="text-[#17B6E5]">.</span>K
                        <span className="text-[#F9C300]">.</span>U<span className="text-[#FF4238]">.</span>
                        N<span className="text-[#F9C300]">.</span>D<span className="text-[#17B6E5]">.</span>A
                    </span>
                </div>

                {/* Right: Resume + LinkedIn / Menu */}
                <div className="flex items-center gap-3">
                    <Link
                        href="#"
                        className="hidden md:block font-varela text-md text-gray-600 hover:text-[#1e6153] transition-colors mr-[30px]"
                    >
                        Resume
                    </Link>

                    {/* LinkedIn (desktop only) */}
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex w-10 h-10 bg-gray-900 rounded items-center justify-center hover:bg-[#1e6153] transition-colors"
                    >
                        <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5h-3v-10h2.9v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v6.5z" />
                        </svg>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col justify-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`h-0.5 w-6 bg-gray-900 transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-gray-900 transition-opacity duration-300 ${open ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-gray-900 transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pb-6 flex flex-col gap-4 font-varela text-gray-700">
                    <Link onClick={() => setOpen(false)} href="#about" className="hover:text-[#1e6153] transition">
                        About
                    </Link>
                    <Link onClick={() => setOpen(false)} href="#projects" className="hover:text-[#1e6153] transition">
                        Projects
                    </Link>
                    <Link onClick={() => setOpen(false)} href="#contact" className="hover:text-[#1e6153] transition">
                        Contact
                    </Link>
                    <Link onClick={() => setOpen(false)} href="#" className="hover:text-[#1e6153] transition">
                        Resume
                    </Link>
                </div>
            </div>
        </nav>
    );
}