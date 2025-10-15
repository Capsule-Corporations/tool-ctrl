"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!footerRef.current) return;

        gsap.fromTo(
            footerRef.current,
            { y: 100 },
            {
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                    end: "bottom bottom+=10",
                    toggleActions: "play none none reverse",
                    scrub: 1,
                },
            }
        );
    }, []);

    const year = new Date().getFullYear();

    return (
        <div className="text-[#FF7A29] relative font-cascadia min-h-[60svh]">
            <div className="absolute -top-64">
                <span className="text-[30rem] tracking-tighter font-bebas">Tool Ctrl</span>
            </div>
            <div
                ref={footerRef}
                className="bg-[#FF7A29] text-white font-cascadia min-h-[60svh] flex flex-col justify-between p-10 z-10"
            >
                <div className="flex gap-20 w-full">
                    <div className="flex gap-20">
                        <div>
                            <span>Navigation</span>
                        </div>
                        <div>
                            <span>Contact</span>
                        </div>
                        <div>
                            <span>Legal</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex-2/6">
                        <span className="text-[20rem] tracking-tighter font-bebas">Tool Ctrl</span>
                    </div>
                </div>
                <div className="flex gap-20">
                    <div>
                        <span>ToolsCtrl&copy;{year}</span>
                    </div>
                    <div className="flex gap-2">
                        <span>Designed & Developed by CapsuleDevs.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
