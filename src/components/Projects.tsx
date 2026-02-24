"use client";
import Image from "next/image";

const projects = [
    {
        type: "< type of project >",
        name: "Project name",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1560330413-c97e0971b305?w=600&q=80",
    },
    {
        type: "< next project >",
        name: "Project name",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1560330413-c97e0971b305?w=600&q=80",
    },
    {
        type: "< kind of project >",
        name: "Project name",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1560330413-c97e0971b305?w=600&q=80",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        You Can View
                    </h2>
                    <div className="flex items-center justify-center gap-3 mt-1">
                        <span className="text-gray-400 text-sm">My</span>
                        <span className="text-4xl font-bold text-purple-600 relative">
                            Projects
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

                {/* Project Cards */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <span className="text-xs text-gray-400 font-mono">{project.type}</span>
                                <h3 className="text-base font-bold text-gray-900 mt-1 mb-2">{project.name}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed mb-4">{project.description}</p>
                                <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-4 py-2 rounded-full transition-colors flex items-center gap-1">
                                    View Project
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
