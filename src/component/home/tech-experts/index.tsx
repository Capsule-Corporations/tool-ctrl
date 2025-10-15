"use client";

import LogoLoop from "@/components/LogoLoop";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

type Brand = { name: string; blurb: string };
const BRANDS: Brand[] = [
    { name: "ChatGPT", blurb: "Conversational AI for chat, drafting and reasoning." },
    { name: "OpenAI", blurb: "Foundation models and tooling for custom solutions." },
    { name: "Gemini", blurb: "Google’s multimodal AI for analysis and content." },
    { name: "Zapier", blurb: "Connects tools into automated workflows." },
    { name: "Make", blurb: "Visual automation for complex multi-app processes." },
    { name: "Python", blurb: "Custom code to automate advanced use cases." },
];

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
        alt: "Gmail",
        href: "https://gmail.com",
    },
    {
        src: "https://image.pngaaa.com/530/4775530-middle.png",
        alt: "Zoom",
        href: "https://company2.com",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png",
        alt: "Drive",
        href: "https://company3.com",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png",
        alt: "Teams",
        href: "https://company3.com",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/1085px-Microsoft_Excel_2013-2019_logo.svg.png",
        alt: "Excel",
        href: "https://company3.com",
    },
    {
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-square-color-icon.png",
        alt: "Discord",
        href: "https://company3.com",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/825/825500.png",
        alt: "Shopify",
        href: "https://company3.com",
    },
    {
        src: "https://logo.svgcdn.com/s/notion-dark-8x.png",
        alt: "Notion",
        href: "https://company3.com",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
        alt: "Slack",
        href: "https://company3.com",
    },
    {
        src: "https://cdn.creazilla.com/icons/3253847/google-meet-icon-sm.png",
        alt: "Meet",
        href: "https://company3.com",
    },
    {
        src: "https://toppng.com/uploads/preview/facebook-round-logo-transparent-background-facebook-logo-round-11553547089wdi1nweaao.png",
        alt: "Facebook",
        href: "https://company3.com",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png",
        alt: "Twitter",
        href: "https://company3.com",
    },
];

export default function TechExpertsAndApps() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const brandRefs = useRef<HTMLElement[]>([]);
    const appRefs = useRef<HTMLSpanElement[]>([]);
    const brandsActivated = useRef(false);
    const appsActivated = useRef(false);

    // useEffect(() => {
    //     const section = sectionRef.current;
    //     if (!section) return;

    //     const ctx = gsap.context(() => {
    //         const triggers: ScrollTrigger[] = [];

    //         // Container entrance (light scrub to feel attached to scroll)
    //         gsap.fromTo(
    //             section,
    //             { opacity: 0, y: 60, scale: 0.98 },
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //                 scale: 1,
    //                 ease: "none",
    //                 scrollTrigger: {
    //                     trigger: section,
    //                     start: "top bottom-=10%",
    //                     end: "top 60%",
    //                     scrub: true,
    //                     id: "tech-apps-entrance",
    //                     onUpdate: self => {
    //                         // When container is 60% progressed, start brand tiles (once)
    //                         if (!brandsActivated.current && self.progress >= 0.6) {
    //                             brandsActivated.current = true;
    //                             brandRefs.current.forEach((el, i) => {
    //                                 const tr = ScrollTrigger.create({
    //                                     trigger: el,
    //                                     start: "top 90%",
    //                                     end: "top 60%",
    //                                     scrub: 1,
    //                                     onEnter: () => {
    //                                         gsap.fromTo(
    //                                             el,
    //                                             { y: 28, opacity: 0 },
    //                                             { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: i * 0.05 }
    //                                         );
    //                                     },
    //                                 });
    //                                 triggers.push(tr);
    //                             });
    //                         }
    //                         // When container is 90% progressed, start apps wall (once)
    //                         if (!appsActivated.current && self.progress >= 0.9) {
    //                             appsActivated.current = true;
    //                             appRefs.current.forEach((dot, i) => {
    //                                 const tr = ScrollTrigger.create({
    //                                     trigger: dot,
    //                                     start: "top 95%",
    //                                     end: "top 70%",
    //                                     toggleActions: "play none none reverse",
    //                                     onEnter: () => {
    //                                         gsap.fromTo(
    //                                             dot,
    //                                             { y: 16, opacity: 0, scale: 0.9 },
    //                                             {
    //                                                 y: 0,
    //                                                 opacity: 1,
    //                                                 scale: 1,
    //                                                 duration: 0.4,
    //                                                 ease: "power2.out",
    //                                                 delay: i * 0.02,
    //                                             }
    //                                         );
    //                                     },
    //                                 });
    //                                 triggers.push(tr);
    //                             });

    //                             // Recompute layout once dots begin revealing
    //                             ScrollTrigger.refresh();
    //                         }
    //                     },
    //                 },
    //             }
    //         );

    //         return () => {
    //             triggers.forEach(t => t.kill());
    //         };
    //     }, section);

    //     return () => ctx.revert();
    // }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-background text-foreground py-16 md:py-24"
            aria-labelledby="techs-heading"
        >
            <div className="container mx-auto max-w-6xl px-6 md:px-8">
                <header className="text-center mb-10 md:mb-14">
                    <h2 id="techs-heading" className="text-pretty text-2xl md:text-4xl font-semibold">
                        AI and <span className="text-primary">Automation</span> technologies we are experts in
                    </h2>
                    <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        We’ve built complete processes using each of these tools and more. Here are a few we use most
                        often.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {BRANDS.map((b, i) => (
                        <article
                            key={b.name}
                            ref={el => {
                                el && (brandRefs.current[i] = el);
                            }}
                            className="rounded-lg border border-border p-5 md:p-6"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    aria-hidden
                                    className="h-8 w-8 rounded-md bg-primary/15 ring-1 ring-border flex items-center justify-center text-xs font-medium text-primary"
                                >
                                    {b.name.charAt(0)}
                                </span>
                                <h3 className="font-semibold">{b.name}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mt-2">{b.blurb}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-20 md:mt-16 flex flex-col gap-10 items-start text-[#370617]">
                    <div>
                        <h3 className="text-xl md:text-6xl font-bold tracking-tighter">We connect to all your apps</h3>
                        <p className="mt-2 text-xl font-medium text-[#370617]/70 leading-relaxed">
                            Plus thousands more through APIs, custom code and web hooks.
                        </p>
                    </div>

                    <LogoLoop
                        logos={imageLogos}
                        speed={80}
                        direction="left"
                        logoHeight={58}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#fff9f5"
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </section>
    );
}
