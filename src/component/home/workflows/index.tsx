"use client";

import Button from "@/component/common/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WORKFLOWS = [
    "Onboarding workflow automation",
    "Content brief process automation",
    "Project management set‑up",
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
            const triggers: ScrollTrigger[] = [];

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
                        id: "workflows-entrance",
                    },
                }
            );

            // One-by-one cards on scroll
            cardRefs.current.forEach((el, i) => {
                const tr = ScrollTrigger.create({
                    trigger: el,
                    start: "top 88%",
                    end: "top 52%",
                    toggleActions: "play none none reverse",
                    onEnter: () => {
                        gsap.fromTo(
                            el,
                            { y: 28, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: i * 0.06 }
                        );
                    },
                });
                triggers.push(tr);
            });

            return () => {
                triggers.forEach(t => t.kill());
            };
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-background text-foreground py-16 md:py-24"
            aria-labelledby="flows-heading"
        >
            <div className="container mx-auto max-w-6xl px-6 md:px-8">
                <header className="text-center mb-10 md:mb-14">
                    <h2 id="flows-heading" className="text-pretty text-2xl md:text-4xl font-semibold">
                        Examples of workflows we’ve automated
                    </h2>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {WORKFLOWS.map((title, i) => (
                        <article
                            key={title}
                            ref={el => {
                                el && (cardRefs.current[i] = el);
                            }}
                            className="rounded-lg border border-border p-5 md:p-6"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <span aria-hidden className="h-8 w-8 rounded-md bg-primary/15 ring-1 ring-border" />
                                    <h3 className="font-semibold">{title}</h3>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                                Minimal example to illustrate a workflow card.
                            </p>
                            <div className="mt-4">
                                <Button text="Example" href="/" variant="1" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
