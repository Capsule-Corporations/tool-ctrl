"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Button from "../common/button";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useGSAP(() => {
        const trigger = ScrollTrigger.create({
            start: "top -=1400px",
            onEnter: () => setScrolled(true),
            onLeaveBack: () => setScrolled(false),
        });

        return () => {
            trigger.kill();
        };
    }, []);

    // Animate color changes with GSAP when state updates
    useEffect(() => {
        if (!navbarRef.current) return;
        const elements = navbarRef.current.querySelectorAll(".nav-text");

        gsap.to(navbarRef.current, {
            border: scrolled ? "solid 1px #FFB87840" : "solid 1px #ffffff20",
            duration: 0.2,
        });

        gsap.to(elements, {
            color: scrolled ? "#000" : "#fff",
            duration: 0.5,
            ease: "power2.out",
        });
    }, [scrolled]);

    return (
        <div
            ref={navbarRef}
            className="fixed z-[99999] left-1/2 -translate-x-1/2 flex justify-between items-center w-[50%] h-20 
                       bg-transparent backdrop-blur-md border border-white/20 rounded-2xl p-7 m-2 transition-all duration-500"
        >
            {/* Logo */}
            <div className="text-2xl font-medium font-rubik nav-text">LOGO</div>

            {/* Menu Items */}
            <div className="flex gap-5 font-jetbrains-mono">
                {["Services", "Results", "DataProtection", "About"].map((item, idx) => (
                    <span key={idx} className="nav-text cursor-pointer hover:opacity-80 transition-opacity">
                        {item}
                    </span>
                ))}
            </div>

            {/* Contact */}
            <div>
                <Button
                    text="Contact Us"
                    href="/contact"
                    variant={"1"}
                    className={cn(
                        scrolled ? "bg-black text-white" : "bg-white text-black",
                        "transition-all duration-300"
                    )}
                />
            </div>
        </div>
    );
};

export default Navbar;
