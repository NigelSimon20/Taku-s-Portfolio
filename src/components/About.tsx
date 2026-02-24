"use client";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        You Can Learn More
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="text-gray-400 text-sm">about</span>
                        <span className="text-4xl font-bold text-gray-900 relative">
                            Takunda
                            <svg
                                className="absolute -bottom-4 left-0 w-full"
                                viewBox="0 0 120 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 8 C20 2, 40 10, 60 6 C80 2, 100 10, 118 5"
                                    stroke="#7c3aed"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-2 gap-16 items-center mt-12">
                    {/* Left: Image */}
                    <div className="relative">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80"
                                alt="White keyboard on desk"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Bio */}
                    <div>
                        <p className="text-gray-600 leading-relaxed text-sm mb-6">
                            You can learn more about me, my skills, and my experience
                            here. I am a freelance designer and developer. I have been
                            working in this field for 5 years and have a lot of
                            experience in the industry.
                        </p>

                        {/* Tool Logos */}
                        <div className="flex items-center gap-6 mb-6">
                            {/* Figma */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center">
                                    <svg viewBox="0 0 38 57" className="w-5 h-5" fill="none">
                                        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
                                        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83" />
                                        <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262" />
                                        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
                                        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
                                    </svg>
                                </div>
                                <span className="text-xs text-gray-500">Figma</span>
                            </div>
                            {/* Webflow */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl shadow flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">W</span>
                                </div>
                                <span className="text-xs text-gray-500">Webflow</span>
                            </div>
                            {/* Adobe */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-10 h-10 bg-red-600 rounded-xl shadow flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">Ai</span>
                                </div>
                                <span className="text-xs text-gray-500">Adobe</span>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-sm">
                            Always ready to learn from the greatest minds of the modern
                            world. I am always looking for new opportunities to grow and
                            improve my skills. I am a quick learner and I am always
                            looking for new challenges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
