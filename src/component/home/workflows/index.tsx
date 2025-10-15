"use client";

import Button from "@/component/common/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WORKFLOWS = [
    "Onboarding workflow automation",
    "Content brief process automation",
    "Project management set-up",
    "Proposal creation automation",
    "Sales process automation",
    "Ads ROI analysis",
];

export default function WorkflowsExamples() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const cardRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Section fade-in
            gsap.fromTo(
                section,
                { opacity: 0, y: 140 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.out",
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1,
                    },
                }
            );

            // Card animations with exit motion
            cardRefs.current.forEach((el, i) => {
                const isRight = i % 2 === 1;
                const xOffset = isRight ? 160 : -160;
                const rotate = isRight ? -10 : 10;

                gsap.fromTo(
                    el,
                    { x: xOffset, y: 20, rotate },
                    {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        ease: "power2.out",
                        duration: 0.7,
                        delay: (i % 2) * 0.1,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 100%",
                            end: "bottom 50%",
                            scrub: 1,
                        },
                    }
                );
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-24 bg-[#FFB878] w-[98%] mx-auto rounded-4xl font-helvetica font-semibold text-[#fefae0]"
            aria-labelledby="flows-heading"
        >
            <div className="container mx-auto max-w-6xl px-6 md:px-8">
                <header className="text-center mb-10 md:mb-14">
                    <h2 id="flows-heading" className="text-pretty text-2xl md:text-7xl font-semibold tracking-tight">
                        Examples of <span className="uppercase">workflows</span> we&apos;ve automated
                    </h2>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center justify-center">
                    {WORKFLOWS.map((title, i) => (
                        <article
                            key={title}
                            ref={el => {
                                if (el) cardRefs.current[i] = el;
                            }}
                            className="rounded-2xl border border-border p-6 md:p-8 bg-[#FEFAE0] h-[25rem] w-full shadow-sm hover:shadow-md transition-shadow duration-300 font-helvetica-neue"
                        >
                            <div className="flex items-start justify-between text-[#370617]">
                                <h3 className="font-bold tracking-tighter text-5xl">{title}</h3>
                            </div>
                            <p className="text-xl font-helvetica font-medium text-[#370617]/70 mt-3 leading-relaxed">
                                Minimal example to illustrate a workflow card.
                            </p>
                            <div className="mt-6">
                                <Button text="Example" href="/" variant="1" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
