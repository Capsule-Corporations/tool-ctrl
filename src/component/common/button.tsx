"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
    text: string;
    icon?: React.ReactNode;
    iconSide?: "left" | "right";
    className?: string;
    href: string;
    variant?: "1" | "2" | "3";
}

const Button = ({ text, icon, iconSide = "right", className = "", href, variant = "1" }: ButtonProps) => {
    switch (variant) {
        case "1":
            return <Variant1 text={text} icon={icon} iconSide={iconSide} className={className} href={href} />;
        case "2":
            return <Variant2 text={text} icon={icon} iconSide={iconSide} className={className} href={href} />;
        default:
            return <Variant1 text={text} icon={icon} iconSide={iconSide} className={className} href={href} />;
    }
};

Button.displayName = "Button";

export default Button;

/* ---------------- Variant 1 ---------------- */

const Variant1 = ({ text, icon, iconSide = "right", className = "", href }: ButtonProps) => {
    return (
        <Link
            href={href}
            className={cn(
                `
                inline-flex items-center justify-center gap-2
                px-5 py-3 sm:px-7 sm:py-4
                text-sm sm:text-base md:text-lg font-medium
                rounded-2xl hover:rounded-4xl
                text-black 
                bg-white 
                
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:scale-[1.03]
                shadow-md hover:shadow-xl
                will-change-transform
                `,
                className
            )}
        >
            {icon && iconSide === "left" && <span className="flex-shrink-0">{icon}</span>}
            <span>{text}</span>
            {icon && iconSide === "right" && <span className="flex-shrink-0">{icon}</span>}
        </Link>
    );
};

/* ---------------- Variant 2 ---------------- */

const Variant2 = ({ text, icon, iconSide = "right", className = "", href }: ButtonProps) => {
    return (
        <Link
            href={href}
            className={cn(
                `
                inline-flex items-center justify-center gap-2
                px-5 py-3 sm:px-7 sm:py-4
                text-sm sm:text-base md:text-lg font-medium
                rounded-2xl hover:rounded-4xl
                text-white
                bg-black
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:scale-[1.03]
                shadow-md hover:shadow-xl
                will-change-transform
                `,
                className
            )}
        >
            {icon && iconSide === "left" && <span className="flex-shrink-0">{icon}</span>}
            <span>{text}</span>
            {icon && iconSide === "right" && <span className="flex-shrink-0">{icon}</span>}
        </Link>
    );
};
