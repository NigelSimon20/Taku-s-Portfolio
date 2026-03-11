"use client";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent!");
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">You Can</h2>
                    <div className="inline-block relative mt-1">
                        <span className="text-4xl font-bold text-teal-700">Contact me</span>
                        {/* Wavy underline */}
                        <svg
                            className="absolute -bottom-5 left-0 w-full"
                            viewBox="0 0 180 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 10 C20 3, 40 14, 60 8 C80 2, 100 14, 120 8 C140 2, 160 14, 178 8"
                                stroke="#0f766e"
                                strokeWidth="3"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </div>
                </div>

                {/* Two-column layout */}
                <div className="flex gap-12 items-start mt-16">

                    {/* Left: Contact Info */}
                    <div className="flex flex-col gap-8 w-72 shrink-0 pt-4">
                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9.75A6.75 6.75 0 0116.5 9.75c0 4.5-6.75 10.5-6.75 10.5S3 14.25 3 9.75z" />
                                    <circle cx="9.75" cy="9.75" r="2.25" stroke="currentColor" strokeWidth={1.8} />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm mb-0.5">My Location</p>
                                <p className="text-sm text-gray-500 leading-snug">
                                    2589 Nehanda Street Dz2 harare<br />Zimbabwe
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5.5A1.5 1.5 0 014.5 4h2.28a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.29 1.07L7.1 10.4a11.04 11.04 0 005.5 5.5l1.35-1.41a1 1 0 011.07-.29l3.3 1.1a1 1 0 01.68.95V17.5A1.5 1.5 0 0117.5 19C10.044 19 4 12.956 4 5.5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm mb-0.5">Phone Number</p>
                                <p className="text-sm text-gray-500">(+263) 717 479076</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={1.8} />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm mb-0.5">Email Address</p>
                                <p className="text-sm text-gray-500">charindapanzetakunda@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form card */}
                    <div className="relative flex-1 bg-white rounded-2xl shadow-md border border-gray-100 p-8 overflow-hidden">
                        {/* Decorative purple quarter-circle top-right */}
                        <div
                            className="absolute -top-2 -right-2 w-20 h-20 bg-purple-600 rounded-bl-full pointer-events-none"
                        />

                        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition"
                            />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition"
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Your Phone"
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition"
                            />
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows={4}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-sm font-semibold transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Dotted decoration bottom-left of form */}
                <div className="flex justify-end mt-0 -mt-8 pr-4 pointer-events-none select-none">
                </div>

            </div>
        </section>
    );
}
