"use client";

const techStack = [
    { name: "Web Design", icon: "🌐", color: "text-red-500" },
    { name: "Photoshop", icon: "🎨", color: "text-orange-500" },
    { name: "Figma", icon: "✦", color: "text-purple-500" },
    { name: "Blender", icon: "⬡", color: "text-blue-500" },
    { name: "Illustrator", icon: "Ai", color: "text-orange-600" },
    { name: "After Effects", icon: "Ae", color: "text-purple-600" },
    { name: "Lightroom", icon: "Lr", color: "text-blue-600" },
    { name: "Web Design", icon: "🌐", color: "text-red-500" },
    { name: "Photoshop", icon: "🎨", color: "text-orange-500" },
    { name: "Figma", icon: "✦", color: "text-purple-500" },
    { name: "Blender", icon: "⬡", color: "text-blue-500" },
    { name: "Illustrator", icon: "Ai", color: "text-orange-600" },
    { name: "After Effects", icon: "Ae", color: "text-purple-600" },
    { name: "Lightroom", icon: "Lr", color: "text-blue-600" },
];

export default function Hero() {
    return (
        <section className="min-h-screen pt-20 flex flex-col">
            {/* Main Hero Content */}
            <div className="flex-1 max-w-6xl mx-auto px-6 flex items-center w-full">
                <div className="grid grid-cols-2 gap-16 items-center w-full py-16">
                    {/* Left Column */}
                    <div>
                        {/* Badge */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gray-100 rounded-lg px-3 py-1.5 flex items-center gap-2">
                                <div className="w-5 h-5 bg-purple-600 rounded-sm flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">Y</span>
                                </div>
                                <span className="text-xs text-gray-600 font-medium">Your Name</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Social icons */}
                                <a href="#" className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-7 h-7 bg-pink-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-6xl font-bold leading-tight text-gray-900 mb-6">
                            Innovation
                            <br />
                            Starts{" "}
                            <span className="text-purple-600 relative">
                                Here
                                <span className="absolute -right-6 top-0 text-gray-400 text-2xl">▸</span>
                            </span>
                        </h1>

                        {/* CTA Button */}
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-lg shadow-purple-200">
                            Get In Touch
                        </button>
                    </div>

                    {/* Right Column */}
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                            Freelance Information
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Hello, my name is Takunda. I am a freelance designer
                            and developer. I have been working in this field for
                            5 years and have a lot of experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech Stack Marquee */}
            <div className="border-t border-gray-100 py-4 overflow-hidden bg-white">
                <div className="flex animate-marquee whitespace-nowrap">
                    {techStack.map((tech, i) => (
                        <div key={i} className="flex items-center gap-2 mx-6 shrink-0">
                            <span className={`text-sm font-bold ${tech.color}`}>{tech.icon}</span>
                            <span className="text-xs text-gray-500 font-medium">{tech.name}</span>
                            <span className="text-gray-200 ml-4">|</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
