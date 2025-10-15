"use client";

import Silk from "@/components/Silk";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Button from "../../common/button";

const HomePage = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const subheadingRef = useRef<HTMLParagraphElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entry animation
            gsap.fromTo(
                headingRef.current,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
            gsap.fromTo(
                subheadingRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, delay: 0.3, duration: 1, ease: "power3.out" }
            );
            gsap.fromTo(
                buttonRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, delay: 0.6, duration: 1, ease: "power3.out" }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-6 bg-white dark:bg-black transition-colors duration-500"
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 z-0">
                <Silk speed={5} scale={1} color="#FFB878" noiseIntensity={1.5} rotation={0} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
                <h1
                    ref={headingRef}
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent"
                >
                    The #1 AI & Automation Agency
                </h1>

                <p
                    ref={subheadingRef}
                    className="mt-6 text-lg md:text-xl font-jetbrains-mono text-gray-300 leading-tight"
                >
                    Empowering modern businesses with intelligent automation, data-driven strategy, and AI-powered
                    growth — so you can scale smarter and faster.
                </p>

                <div ref={buttonRef} className="mt-10 flex justify-center">
                    <Button
                        text="Book Consultation"
                        icon={
                            <ArrowRight className="-rotate-45 group-hover:translate-x-1 group-hover:rotate-0 transition-all duration-500" />
                        }
                        href="/"
                        variant="1"
                        className="group flex items-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-white to-neutral-300 hover:scale-105 font-medium transition-all duration-500 text-[#1A1A1A]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
