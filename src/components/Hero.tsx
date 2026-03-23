"use client";

import { useRef } from "react";

const services = [
    { name: "Ux/Ui design", icon: "📱", color: "text-teal-600" },
    { name: "System design", icon: "🖥️", color: "text-blue-500" },
    { name: "Branding", icon: "📣", color: "text-purple-500" },
    { name: "Graphics design", icon: "✏️", color: "text-orange-500" },
    { name: "Ux/Ui design", icon: "📱", color: "text-teal-600" },
    { name: "System design", icon: "🖥️", color: "text-blue-500" },
    { name: "Branding", icon: "📣", color: "text-purple-500" },
    { name: "Graphics design", icon: "✏️", color: "text-orange-500" },
    { name: "Ux/Ui design", icon: "📱", color: "text-teal-600" },
    { name: "System design", icon: "🖥️", color: "text-blue-500" },
    { name: "Branding", icon: "📣", color: "text-purple-500" },
    { name: "Graphics design", icon: "✏️", color: "text-orange-500" },
];

export default function Hero() {
    return (
        <section className="h-[91vh] mt-[9vh] flex flex-col bg-white overflow-hidden">
            {/* Main Hero Content */}
            <div className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-16 pt-[3vh] pb-[2vh] flex flex-col justify-center min-h-0 relative">

                {/* Top Row */}
                <div className="flex flex-wrap justify-between items-center w-full gap-3 text-[1.8vh] font-medium mb-[3vh] sm:mb-[4vh] shrink-0">
                    <div className="flex items-center rounded-2xl border border-gray-100 bg-gray-50/70 p-1 pl-3 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
                        <span className="text-gray-500 text-[12px] sm:text-[13px] tracking-wide mr-3 sm:mr-4 flex items-center">
                            What i can use
                        </span>
                        <div className="flex items-center gap-1.5 p-1 pr-1.5 border-l border-gray-200 pl-3">
                            <div className="w-6 h-6 sm:w-[1.6rem] sm:h-[1.6rem] bg-[#2C2C2C] text-white flex items-center justify-center rounded-md font-bold text-[10px] sm:text-[11px] hover:shadow-lg transition-transform hover:-translate-y-0.5">F</div>
                            <div className="w-6 h-6 sm:w-[1.6rem] sm:h-[1.6rem] bg-[#001D3D] text-[#33A8FF] flex items-center justify-center rounded-md font-bold text-[10px] sm:text-[11px] border border-[#00A8FF]/30 hover:shadow-lg transition-transform hover:-translate-y-0.5">Ps</div>
                            <div className="w-6 h-6 sm:w-[1.6rem] sm:h-[1.6rem] bg-[#330000] text-[#FF9A00] flex items-center justify-center rounded-md font-bold text-[10px] sm:text-[11px] border border-[#FF9A00]/30 hover:shadow-lg transition-transform hover:-translate-y-0.5">Ai</div>
                        </div>
                    </div>
                    <div className="text-gray-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                        Designing for humans
                    </div>
                </div>

                {/* Middle Row — Headline */}
                <div className="w-full mb-[2vh] sm:mb-[3vh] shrink-0">
                    <h1 className="flex flex-col w-full text-[clamp(4rem,13.5vw,11.5rem)] text-[#1c3548] leading-[0.85] tracking-[-0.04em]">
                        <span className="w-full">Innovation</span>
                        <span className="flex items-center justify-between w-full mt-[1vh] pr-1">
                            <span>Starts</span>
                            <span className="bg-[#1e6153] text-white px-[clamp(1rem,3vw,2rem)] pt-[1.5vh] pb-[2vh] rounded-2xl lg:rounded-3xl inline-flex items-center justify-center leading-none text-[clamp(3rem,10.5vw,9.5rem)] transform translate-y-[-0.5vh]">
                                Here
                            </span>
                        </span>
                    </h1>
                </div>

                {/* Bottom Row — CTA + Bio + Service Icons */}
                <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-[2vh] mt-auto">
                    <button className="bg-[#1e6153] hover:bg-[#174d40] text-white rounded-full px-[3vh] py-[1.5vh] text-[1.8vh] font-medium shadow-[0_8px_20px_rgba(30,97,83,0.3)] hover:shadow-[0_12px_25px_rgba(30,97,83,0.4)] transition-all transform hover:-translate-y-1 w-fit shrink-0">
                        Let&apos;s collaborate
                    </button>

                    <div className="flex flex-col sm:items-end gap-[1.5vh] sm:gap-[2vh]">
                        <div className="text-gray-600 text-[1.6vh] md:text-[1.8vh] max-w-[300px] leading-[1.6] sm:text-right">
                            Hello, my name is Takunda<br />
                            And I am a Ux/Ui designer.<br />
                            Let us create a masterpiece<br />
                            together!
                        </div>

                        {/* Service Icons */}
                        <div className="flex items-center gap-[2vh]">
                            {/* Branding */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                </div>
                                <span className="text-[11px] text-gray-500 font-medium">Branding</span>
                            </div>
                            {/* Graphics Design */}
                            <div className="flex flex-col items-center gap-1.5">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <span className="text-[11px] text-gray-500 font-medium">Graphics</span>
                            </div>
                            {/* App Design */}
                            <div className="flex flex-col items-center gap-1.5">
                                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#1e6153]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-[11px] text-gray-500 font-medium">App Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Marquee */}
            <div className="w-full overflow-hidden border-t border-b border-gray-100 bg-gray-50/50 py-[1.5vh] shrink-0">
                <div
                    className="flex whitespace-nowrap"
                    style={{ animation: "marquee 25s linear infinite" }}
                >
                    {[...services, ...services].map((svc, i) => (
                        <div key={i} className="flex items-center gap-2 mx-6 shrink-0">
                            <span className={`text-base font-bold ${svc.color}`}>{svc.icon}</span>
                            <span className="text-sm text-gray-500 font-medium">{svc.name}</span>
                            <span className="ml-4 text-gray-300 text-lg select-none">·</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}