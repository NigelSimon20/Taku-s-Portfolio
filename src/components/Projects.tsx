"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const projects = [
    {
        type: "Ux/Ui Design",
        name: "Project name",
        description:
            "A seamless digital experience crafted with user-first principles and a clean, modern aesthetic.",
        image: "/img/flower.png",
    },
    {
        type: "Branding",
        name: "Project name",
        description:
            "A bold brand identity system built from the ground up — logo, palette, typography, and voice.",
        image: "/img/flower.png",
    },
    {
        type: "App Design",
        name: "Project name",
        description:
            "Mobile-first interface designed for clarity and engagement across all device sizes.",
        image: "/img/flower.png",
    },
    {
        type: "Graphics Design",
        name: "Project name",
        description:
            "Visual storytelling through thoughtful composition, color theory, and expressive imagery.",
        image: "/img/flower.png",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-[#f0edf9]">
            <div className="max-w-6xl mx-auto px-6 md:px-16">
                {/* Heading */}
                <div className="mb-16">
                    <h2 className="text-[2.8rem] md:text-[4rem] font-semibold text-[#1c3548] leading-tight">
                        You Can View
                    </h2>
                    <div className="flex items-baseline gap-4 mt-1">
                        <span className="text-[#1c3548] text-lg md:text-2xl font-medium">My</span>
                        <span className="text-[#1e6153] text-[3rem] md:text-[5rem] font-semibold relative leading-tight">
                            Projects
                            <svg
                                className="absolute -bottom-4 left-0 w-full text-[#1e6153]"
                                viewBox="0 0 260 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M2 16 C20 4, 45 20, 75 10 C100 2, 120 20, 145 12 C165 5, 185 18, 210 10 C228 4, 245 14, 258 8"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Project Slider */}
                <div className="mt-12">
                    <Swiper
                        modules={[Autoplay, A11y]}
                        spaceBetween={24}
                        slidesPerView={1}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {projects.map((project, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-white/60 hover:shadow-xl transition-shadow group h-full">
                                    {/* Image */}
                                    <div className="relative w-full h-56 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <span className="inline-block text-xs text-[#1e6153] font-medium border border-[#1e6153]/30 bg-[#1e6153]/5 rounded-full px-3 py-0.5 mb-2">
                                            {project.type}
                                        </span>
                                        <h3 className="text-base font-bold text-gray-900 mb-2">{project.name}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4">{project.description}</p>
                                        <button className="bg-[#1e6153] hover:bg-[#174d40] text-white text-xs px-4 py-2 rounded-full transition-colors flex items-center gap-1">
                                            View Project
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
