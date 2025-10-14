"use client";

import Button from "../common/button";

const Navbar = () => {
    return (
        <div className="fixed z-[99999] left-[50%] translate-x-[-50%] flex justify-between items-center w-[90%] h-20 bg-black/5 border border-black/10 rounded-2xl p-7 m-2 text-white ">
            {/* Logo  */}
            <div className="font-medium font-poppins">Tool CTRL</div>

            {/* Menu Items */}
            <div className="flex gap-5 font-jetbrains-mono">
                {["Pricing", "About"].map((item, idx) => (
                    <div key={idx}>
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            {/* Contact  */}
            <div>
                <Button text="Contact Us" href="/contact" variant="1" />
            </div>
        </div>
    );
};

export default Navbar;
