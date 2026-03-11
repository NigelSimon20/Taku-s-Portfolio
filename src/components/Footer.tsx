"use client";
import Link from "next/link";

const quickLinks = [
    { label: "Hero", href: "#hero" },
    { label: "About me", href: "#about" },
    { label: "What i can do", href: "#skills" },
    { label: "My work", href: "#projects" },
    { label: "Contact me", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0b1120] text-white pt-14 pb-0 relative">
            <div className="max-w-6xl mx-auto px-8">

                {/* Main grid: 3 columns */}
                <div className="grid grid-cols-3 gap-12 pb-12">

                    {/* Col 1 — Logo + Resume button */}
                    <div className="flex flex-col gap-10">
                        {/* TAKUNDA logo — uses the Gabriel Weiss Friends font */}
                        <span
                            className="text-white text-xl tracking-widest"
                            style={{ fontFamily: "'GABRWFFR', sans-serif", letterSpacing: "0.25em" }}
                        >
                            T.A.K.U.N.D.A
                        </span>

                        {/* Resume pill button */}
                        <div className="flex items-center gap-3 bg-[#141d2f] rounded-full px-6 py-3 w-fit">
                            <span className="text-gray-300 text-sm">Click here for resume</span>
                            <a
                                href="#"
                                className="w-9 h-9 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shrink-0 transition-colors"
                            >
                                <svg className="w-4 h-4 text-white rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Col 2 — Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-base mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-base mb-5">Contact</h4>
                        <ul className="space-y-4">
                            {/* Phone */}
                            <li className="flex items-center gap-3 text-gray-300 text-sm">
                                <span className="w-7 h-7 bg-purple-600 rounded-md flex items-center justify-center shrink-0">
                                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                                    </svg>
                                </span>
                                +263 717 479 076
                            </li>

                            {/* Email */}
                            <li className="flex items-center gap-3 text-gray-300 text-sm">
                                <span className="w-7 h-7 bg-purple-600 rounded-md flex items-center justify-center shrink-0">
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={2} />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6" />
                                    </svg>
                                </span>
                                Charindapanzetakunda@gmail.com
                            </li>

                            {/* LinkedIn */}
                            <li className="flex items-center gap-3 text-gray-300 text-sm">
                                <span className="w-7 h-7 bg-purple-600 rounded-md flex items-center justify-center shrink-0">
                                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </span>
                                www.linkedin.com/in/takunda-b346a52ab
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Bottom bar */}
                <div className="flex items-center justify-between py-5">
                    <p className="text-gray-500 text-xs">Copyright @2024 Takue_thebrain</p>

                    {/* Back to top — white pill */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex flex-col items-center gap-1 bg-white text-purple-600 rounded-t-2xl px-6 pt-3 pb-4 -mb-0 hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        <span className="text-xs font-medium">Back to top</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
