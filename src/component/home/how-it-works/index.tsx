"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const content = [
    {
        title: "Map your processes",
        description: "Visualize systems, manual tasks, and tools.",
    },
    {
        title: "Find areas to add AI",
        description: "Pinpoint opportunities with the highest ROI.",
    },
    {
        title: "Build and Test",
        description: "Use custom code and tools to validate.",
    },
    {
        title: "Manage & Interact",
        description: "Continual improvement as your needs evolve.",
    },
];

export default function AgencySteps() {
    const sectionRef = useRef<HTMLElement | null>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        const cards = section.querySelectorAll<HTMLElement>(".step-card");

        const ctx = gsap.context(() => {
            gsap.fromTo(
                cards,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 40%",
                        scrub: 1,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-background text-[#2F2317] py-16 md:py-24 min-w-screen"
            aria-labelledby="agency-steps-heading"
        >
            <div className="mx-auto px-6 md:px-28">
                {/* HEADER */}
                <header className="text-start flex flex-col mb-10 md:mb-14">
                    <div className="flex items-center gap-5">
                        <h2
                            id="agency-steps-heading"
                            className="text-nowrap text-2xl md:text-4xl lg:text-9xl font-semibold font-helvetica flex-1"
                        >
                            Our Workflow
                        </h2>
                        <div className="flex flex-col gap-0.5 w-full">
                            <div className="w-full h-1 bg-[#2F2317]"></div>
                            <div className="w-full h-1 bg-[#2F2317]"></div>
                        </div>
                    </div>
                    <p className="mt-3 md:mt-4 text-[#2F2317]/80 text-2xl font-helvetica-neue tracking-tighter">
                        We map, analyze, build, and iterate to unlock compounding efficiency.
                    </p>
                </header>

                {/* DYNAMIC STEP CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-10">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="step-card bg-[#FDF5DC] rounded-lg border border-[#2F2317]/50 h-80 p-5 md:p-6 opacity-0"
                        >
                            <div className="mb-2 text-xl font-medium">Step {index + 1}</div>
                            <h3 className="font-semibold text-4xl text-pretty">{item.title}</h3>
                            <p className="text-[#2F2317]/70 text-lg leading-relaxed mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
