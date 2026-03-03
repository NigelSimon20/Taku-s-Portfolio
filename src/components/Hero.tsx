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
            <div className="flex-1 max-[1248px]:max-w-[70%] max-[1024px]:max-w-[80%] max-[768px]:max-w-full w-full mx-auto px-[15%] pt-[15vh] max-[1024px]:pt-[10vh] flex flex-col items-center">

                {/* Top Row */}
                <div className="flex justify-between items-center w-[90%] md:w-[80%] lg:w-[70%] text-sm font-medium mb-[4vh]">
                    <div className="flex items-center rounded-2xl border border-gray-100 bg-gray-50/70 p-1 pl-3 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
                        <span className="text-gray-500 text-[13px] tracking-wide mr-4 items-center flex">What i can use</span>
                        <div className="flex items-center gap-1.5 p-1 pr-1.5 border-l border-gray-200 pl-3">
                            <div className="w-[1.6rem] h-[1.6rem] bg-[#2C2C2C] text-white flex items-center justify-center rounded-md font-bold text-[11px] hover:shadow-lg transition-transform hover:-translate-y-0.5">F</div>
                            <div className="w-[1.6rem] h-[1.6rem] bg-[#001D3D] text-[#33A8FF] flex items-center justify-center rounded-md font-bold text-[11px] border border-[#00A8FF]/30 hover:shadow-lg transition-transform hover:-translate-y-0.5">Ps</div>
                            <div className="w-[1.6rem] h-[1.6rem] bg-[#330000] text-[#FF9A00] flex items-center justify-center rounded-md font-bold text-[11px] border border-[#FF9A00]/30 hover:shadow-lg transition-transform hover:-translate-y-0.5">Ai</div>
                        </div>
                    </div>
                    <div className="text-gray-600 font-medium whitespace-nowrap hidden sm:block">
                        Designing for humans
                    </div>
                </div>

                {/* Middle Row */}
                <div className="w-[90%] md:w-[80%] lg:w-[70%] mb-[4vh] select-none">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-gray-900 leading-[0.9] tracking-[-0.03em]">
                        Innovation
                        <br />
                        Starts <span className="text-[#1A5B5B]">Here</span>
                    </h1>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between w-[90%] md:w-[80%] lg:w-[70%] gap-8">
                    <button className="bg-[#B06DFF] hover:bg-purple-500 text-white rounded-full px-8 py-3.5 text-base font-medium shadow-[0_8px_20px_rgba(176,109,255,0.3)] hover:shadow-[0_12px_25px_rgba(176,109,255,0.4)] transition-all transform hover:-translate-y-1 w-fit">
                        Let's collaborate
                    </button>

                    <div className="text-gray-600 text-sm md:text-base max-w-[300px] leading-[1.6] ml-auto">
                        Hello, my name Takunda<br />
                        And i am a Ux/Ui designer.<br />
                        Let us create a masterpiece<br />
                        together!!!
                    </div>
                </div>

            </div>

            {/* Tech Stack Marquee */}
            <div className="border-t border-gray-100 py-4 overflow-hidden bg-white px-[15%]">
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
