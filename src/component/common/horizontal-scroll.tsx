"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
    children: React.ReactNode;
    gap?: string;
    className?: string;
}

export default function HorizontalScroll({
    children,
    gap = "0rem", // 0 because we'll assume full 100vw panels
    className = "",
}: HorizontalScrollProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const horizontalRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const container = containerRef.current;
        const horizontal = horizontalRef.current;

        if (!container || !horizontal) return;

        const sections = gsap.utils.toArray<HTMLElement>(horizontal.children);
        if (!sections.length) return;

        // Each child takes 100vw → total scroll distance is 100 * (n - 1)
        gsap.to(horizontal, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => `+=${window.innerWidth * (sections.length - 1)}`,
                anticipatePin: 1,
                pinSpacing: true,
                invalidateOnRefresh: true,
            },
        });
    }, []);

    return (
        <section ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
            <div ref={horizontalRef} className="flex will-change-transform" style={{ gap }}>
                {children}
            </div>
        </section>
    );
}
