"use client";

import CountUp from "@/components/CountUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const facts = [
    {
        from: 80,
        to: 120,
        suffix: "K+",
        title: "Tasks Managed Weekly",
        desc: "Thousands of workflows run every single week.",
    },
    {
        from: 70,
        to: 98,
        suffix: "%+",
        title: "Task Completion Rate",
        desc: "Tasks are completed faster, with fewer delays.",
    },
    {
        from: 3.2,
        to: 4.9,
        suffix: "",
        title: "User Satisfaction Score",
        desc: "Praised for speed, clarity, and collaboration.",
    },
];

const HeroFact = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.fromTo(
            containerRef.current,
            {
                scale: 0.4,
                marginTop: "-70rem",
            },
            {
                scale: 1,
                marginTop: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                },
            }
        );

        gsap.fromTo(
            titleRef.current,
            {
                scale: 2,
                translateX: 1200,
                translateY: 200,
            },
            {
                scale: 1,
                translateX: 0,
                translateY: 0,
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
        <div className="flex min-h-[90svh] justify-center items-center my-20">
            <div
                ref={containerRef}
                className="h-[90svh] w-[90%] bg-[#2F2317] text-[#F5F5F5] rounded-4xl p-10 flex flex-col justify-between overflow-hidden relative"
            >
                <div className="flex flex-col" ref={titleRef}>
                    <div>
                        <CountUp
                            from={37000}
                            to={50000}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text text-9xl font-bebas "
                        />
                        <span className="text-8xl">+</span>
                    </div>
                    <div className="text-4xl">
                        <span>
                            Hours of Manual Work <br /> Replaced
                        </span>
                    </div>
                </div>
                <FactCards />
            </div>
        </div>
    );
};

const FactCards = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const [startCount, setStartCount] = useState<boolean[]>(facts.map(() => false));

    useGSAP(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { yPercent: 100, opacity: 0.8 },
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: `top+=${i * 100} 60%`,
                            end: "top 0%",
                            scrub: 1,
                        },
                    }
                );

                ScrollTrigger.create({
                    trigger: card,
                    start: "top 90%",
                    onEnter: () => {
                        setStartCount(prev => {
                            const updated = [...prev];
                            updated[i] = true;
                            return updated;
                        });
                    },
                });
            });
        });

        return () => ctx.revert();
    });

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {facts.map((fact, i) => (
                <div
                    key={i}
                    ref={el => {
                        cardsRef.current[i] = el!;
                    }}
                    className="bg-[#a47851] h-80 rounded-3xl p-8 flex flex-col justify-center items-start shadow-lg"
                >
                    <div className="flex items-end">
                        <CountUp
                            from={fact.from}
                            to={fact.to}
                            duration={2}
                            direction="up"
                            className="text-7xl font-bebas"
                            startWhen={startCount[i]}
                        />
                        <span className="text-6xl ml-1">{fact.suffix}</span>
                    </div>
                    <div className="text-2xl mt-2 font-semibold">{fact.title}</div>
                    <div className="text-base opacity-80 mt-1">{fact.desc}</div>
                </div>
            ))}
        </div>
    );
};

export default HeroFact;
