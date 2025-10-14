"use client";

import ContextMenu from "@/component/menu/ContextMenu";
import Navbar from "@/component/navbar";
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
                lenisRef.current.lenis.raf(time * 1000);
            }
        };

        gsap.ticker.add(update);
        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <main>
            {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
            <ThemeTransition />
            <PageTransition>
                <Navbar />
                <ContextMenu />
                <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

                {children}
            </PageTransition>
            {/* </ThemeProvider> */}
        </main>
    );
}
