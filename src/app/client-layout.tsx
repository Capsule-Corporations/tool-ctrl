"use client";

import type React from "react";

import ContextMenu from "@/component/menu/ContextMenu";
import PageTransition from "@/transition/PageTransition";
import ThemeTransition from "@/transition/ThemeTransition";
import gsap from "gsap";
import ReactLenis, { type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        const update = (time: number) => {
            if (lenisRef.current?.lenis) {
                lenisRef.current.lenis.raf(time * 800);
            }
        };

        gsap.ticker.add(update);
        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <main className="relative">
            {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
            <ThemeTransition />
            <PageTransition>
                {/* <div className="">
                    <Navbar />
                </div> */}
                <ContextMenu />
                <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
                <div className="relative">{children}</div>
            </PageTransition>
            {/* </ThemeProvider> */}
        </main>
    );
}
