"use client";
import { useState } from "react";

const contactInfo = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: "My Location",
        value: "123 Main Street\nCity, State 12345",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: "Phone Number",
        value: "+1 (555) 123-4567",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: "Email Address",
        value: "hello@takunda.com",
    },
];

export default function Contact() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent!");
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#7c3aed"
                        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-15.9,88.5,-0.9C87,14.2,81.4,28.4,73.2,41.1C65,53.8,54.2,65,41.2,72.3C28.2,79.6,13,83,-1.8,85.8C-16.6,88.6,-33.2,90.8,-46.2,84.5C-59.2,78.2,-68.6,63.4,-75.3,48C-82,32.6,-86,16.3,-85.5,0.3C-85,-15.7,-80,-31.4,-71.5,-44.5C-63,-57.6,-51,-68.1,-37.5,-75.6C-24,-83.1,-9,-87.6,3.5,-93.2C16,-98.8,30.6,-83.6,44.7,-76.4Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        You Can
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="text-4xl font-bold text-teal-500 relative">
                            Contact me
                            <svg
                                className="absolute -bottom-4 left-0 w-full"
                                viewBox="0 0 140 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 8 C25 2, 50 10, 70 6 C90 2, 115 10, 138 5"
                                    stroke="#14b8a6"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-2 gap-16 mt-12">
                    {/* Left: Contact Info */}
                    <div className="space-y-6">
                        {contactInfo.map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                                        {item.label}
                                    </p>
                                    <p className="text-sm text-gray-700 whitespace-pre-line">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs text-gray-500 mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-gray-500 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Your Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows={5}
                                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-purple-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
