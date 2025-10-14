"use client";

import Button from "../common/button";

const Navbar = () => {
    return (
        <div className="fixed z-[99999] left-1/2 -translate-x-1/2 flex justify-between items-center w-[50%] h-20 bg-transparent backdrop-blur-md border border-white/20 rounded-2xl p-7 m-2">
            {/* Logo */}
            <div className="text-2xl font-medium font-rubik text-white mix-blend-difference">LOGO</div>

            {/* Menu Items */}
            <div className="flex gap-5 font-jetbrains-mono text-white mix-blend-difference">
                {["Services", "Results", "DataProtection", "About"].map((item, idx) => (
                    <span key={idx} className="cursor-pointer hover:opacity-80 transition-opacity">
                        {item}
                    </span>
                ))}
            </div>

            {/* Contact */}
            <div>
                <Button text="Contact Us" href="/contact" variant="2" />
            </div>
        </div>
    );
};

export default Navbar;
