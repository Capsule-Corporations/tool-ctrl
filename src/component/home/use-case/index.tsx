"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
    "Sales & marketing automation",
    "Image, voice, text recognition",
    "Predictive analytics",
    "Conversational AI",
    "Project management",
    "Staff augmentation",
    "Data silos",
    "Customer service",
    "Connect apps",
];

export default function UseCasesGrid() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const cardsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const createdTriggers: ScrollTrigger[] = [];

            // Container entrance
            gsap.fromTo(
                section,
                { opacity: 0, y: 60, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom-=10%",
                        end: "top 60%",
                        scrub: true,
                        id: "use-cases-entrance",
                    },
                }
            );

            // One-by-one per-card scroll triggers
            cardsRef.current.forEach((card, i) => {
                const tr = ScrollTrigger.create({
                    trigger: card,
                    start: "top 85%",
                    end: "top 45%",
                    toggleActions: "play none none reverse",
                    onEnter: () => {
                        gsap.fromTo(
                            card,
                            { y: 28, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.55,
                                ease: "power2.out",
                                delay: i * 0.06,
                            }
                        );
                    },
                });
                createdTriggers.push(tr);
            });

            return () => {
                createdTriggers.forEach(t => t.kill());
            };
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-background text-foreground py-16 md:py-24"
            aria-labelledby="use-cases-heading"
        >
            <div className="container mx-auto max-w-6xl px-6 md:px-8">
                <header className="text-center mb-10 md:mb-14">
                    <h2 id="use-cases-heading" className="text-pretty text-2xl md:text-4xl font-semibold">
                        The endless use cases of <span className="text-primary">AI</span> and{" "}
                        <span className="text-primary">Automation</span>
                    </h2>
                    <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Make teams dramatically more efficient by automating tedious tasks.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {USE_CASES.map((title, idx) => (
                        <article
                            key={idx}
                            ref={el => {
                                if (el) {
                                    cardsRef.current[idx] = el as HTMLElement;
                                }
                            }}
                            className="rounded-lg border border-border p-5 md:p-6"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="font-semibold">{title}</h3>
                                <span
                                    aria-hidden
                                    className="inline-block h-5 w-5 rounded-full bg-primary/15 ring-1 ring-border"
                                />
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                                Minimal example description to illustrate the card layout and animation.
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-8 md:mt-10 flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium"
                    >
                        Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
