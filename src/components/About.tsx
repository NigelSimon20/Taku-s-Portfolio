import Image from "next/image";

// Reusable component for the tool icons
const SkillItem = ({
    icon,
    label,
    borderColor
}: {
    icon: React.ReactNode;
    label: string;
    borderColor: string;
}) => (
    <div className="flex flex-col items-center gap-3">
        <div className="h-10 flex items-center justify-center">
            {icon}
        </div>
        <span className={`text-[#333] font-medium border-b-[3px] ${borderColor} pb-1 text-sm whitespace-nowrap`}>
            {label}
        </span>
    </div>
);

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            {/* The outer container uses max-w-6xl for constraints */}
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="mb-20 flex flex-col items-center">
                    <h2 className="text-[2.8rem] md:text-[4rem] text-[#1c3548] leading-tight">
                        You Can Learn More
                    </h2>
                    <div className="flex items-baseline gap-4 mt-1">
                        <span className="text-[#1c3548] text-xl md:text-2xl font-medium">about</span>
                        <span className="text-[#1e6153] text-[3rem] md:text-[4.5rem] relative leading-tight">
                            Takunda
                            <svg
                                className="absolute -bottom-3 left-0 w-full text-[#1e6153]"
                                viewBox="0 0 200 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2 18 C30 2, 50 18, 80 8 C110 -2, 130 18, 160 8 C180 2, 190 6, 198 2"
                                    stroke="currentColor"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    {/* Left: Image */}
                    <div className="relative w-full aspect-[4/5] md:aspect-[4/3] md:h-[600px] flex-shrink-0">
                        <Image
                            src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80"
                            alt="White keyboard on desk"
                            fill
                            unoptimized
                            className="object-contain"
                        />
                    </div>

                    {/* Right: Bio */}
                    <div className="flex flex-col justify-center max-w-lg text-[#4a4a4a]">
                        <p className="leading-[1.8] text-[15px] mb-10 text-balance">
                            My name is Takunda. I am a creative ux/ui designer who
                            also has comprehensive knowledge of digital marketing.
                        </p>

                        <p className="mb-6 text-[15px] text-[#4a4a4a]">I am skilled in:</p>

                        {/* Tool Logos */}
                        <div className="flex items-center gap-10 md:gap-14 mb-10">
                            <SkillItem
                                label="figma"
                                borderColor="border-[#facc15]"
                                icon={
                                    <svg viewBox="0 0 38 57" className="h-9" fill="none" aria-hidden="true">
                                        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
                                        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83" />
                                        <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262" />
                                        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
                                        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
                                    </svg>
                                }
                            />

                            <SkillItem
                                label="webflow"
                                borderColor="border-[#fb923c]"
                                icon={
                                    <div className="w-9 h-9 bg-[#1e61f0] rounded-full flex items-center justify-center" aria-hidden="true">
                                        <span className="text-white font-bold text-lg font-serif italic pr-0.5">W</span>
                                    </div>
                                }
                            />

                            <SkillItem
                                label="adobe suite"
                                borderColor="border-[#93c5fd]"
                                icon={
                                    <svg viewBox="0 0 24 24" className="h-10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M14 0L24 24H17L14 15.5L11 24H4L14 0Z" fill="#ff0000" />
                                        <path d="M14 15.5L11 24H17L14 15.5Z" fill="#cc0000" />
                                        <path d="M4 24L8.5 13L11 24H4Z" fill="#cc0000" />
                                        <path d="M12.5 11L14 15.5H11L12.5 11Z" fill="#ffffff" />
                                    </svg>
                                }
                            />
                        </div>

                        <p className="leading-[1.8] text-[15px] text-[#4a4a4a] text-balance">
                            I draw inspiration from great things around me and
                            infuse it in my own creativity. Please take a journey in my
                            world of creation as you explore this portfolio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
