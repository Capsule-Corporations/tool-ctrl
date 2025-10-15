"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AgencySteps() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const hasActivatedCardsRef = useRef(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const createdTriggers: ScrollTrigger[] = [];
            let pinTrigger: ScrollTrigger | null = null;

            // Pin the section initially; we'll remove it at 90% entrance progress.
            pinTrigger = ScrollTrigger.create({
                trigger: section,
                start: "top top+=120",
                end: "+=120%",
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                id: "agency-steps-pin",
            });

            const initCardTriggers = () => {
                if (hasActivatedCardsRef.current) return;
                hasActivatedCardsRef.current = true;

                const cards = Array.from(section.querySelectorAll<HTMLElement>(".step-card"));
                cards.forEach((card, i) => {
                    // One-by-one on scroll
                    const tr = ScrollTrigger.create({
                        trigger: card,
                        start: "top 85%",
                        end: "top 45%",
                        toggleActions: "play none none reverse",
                        onEnter: () => {
                            gsap.fromTo(
                                card,
                                { y: 32, opacity: 0, scale: 0.98 },
                                {
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    duration: 0.6,
                                    ease: "power2.out",
                                    delay: i * 0.08, // subtle stagger per element index
                                }
                            );
                        },
                    });
                    createdTriggers.push(tr);
                });

                // Remove the pin so subsequent scrolling feels natural
                if (pinTrigger) {
                    pinTrigger.kill(true);
                    pinTrigger = null;
                }

                // Recalculate after pin removal
                ScrollTrigger.refresh();
            };

            // Container entrance (scale+translate). Cards only activate at 90% progress.
            gsap.fromTo(
                section,
                { opacity: 0, y: 80, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom-=10%",
                        end: "top center",
                        scrub: true,
                        id: "agency-steps-entrance",
                        onUpdate: self => {
                            if (!hasActivatedCardsRef.current && self.progress >= 0.9) {
                                initCardTriggers();
                            }
                        },
                    },
                }
            );

            return () => {
                createdTriggers.forEach(t => t.kill());
                if (pinTrigger) pinTrigger.kill();
            };
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-background text-foreground py-16 md:py-24"
            aria-labelledby="agency-steps-heading"
        >
            <div className="container mx-auto max-w-6xl px-6 md:px-8">
                <header className="text-center mb-10 md:mb-14">
                    <h2 id="agency-steps-heading" className="text-pretty text-2xl md:text-4xl font-semibold">
                        How our <span className="text-primary">AI</span> and{" "}
                        <span className="text-primary">Automation</span> agency works
                    </h2>
                    <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        We map, analyze, build, and iterate to unlock compounding efficiency.
                    </p>
                </header>

                <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <li className="step-card rounded-lg border border-border p-5 md:p-6">
                        <div className="text-primary mb-2 font-medium">STEP 1</div>
                        <h3 className="font-semibold">Map your processes</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                            Visualize systems, manual tasks, and tools.
                        </p>
                    </li>
                    <li className="step-card rounded-lg border border-border p-5 md:p-6">
                        <div className="text-primary mb-2 font-medium">STEP 2</div>
                        <h3 className="font-semibold">Find areas to add AI</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                            Pinpoint opportunities with the highest ROI.
                        </p>
                    </li>
                    <li className="step-card rounded-lg border border-border p-5 md:p-6">
                        <div className="text-primary mb-2 font-medium">STEP 3</div>
                        <h3 className="font-semibold">Build and test</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                            Use custom code and tools to validate.
                        </p>
                    </li>
                    <li className="step-card rounded-lg border border-border p-5 md:p-6">
                        <div className="text-primary mb-2 font-medium">STEP 4</div>
                        <h3 className="font-semibold">Manage and iterate</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                            Continual improvement as your needs evolve.
                        </p>
                    </li>
                </ol>

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
