"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroFact = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.fromTo(
            containerRef.current,
            {
                scale: 0.4,
                marginTop: "-20rem",
            },
            {
                scale: 1,
                marginTop: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                },
            }
        );
    });
    return (
        <div className="flex justify-center items-center my-10">
            <div ref={containerRef} className="h-[50svh] w-[90%] bg-blue-300 rounded-4xl p-10">
                <div>Fact</div>
            </div>
        </div>
    );
};

export default HeroFact;
