"use client";

import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="bg-black text-white min-h-[60svh] flex flex-col justify-between p-10">
            <div className="flex justify-between">
                <div className="flex-2/6">
                    <span className="text-7xl">ToolsCtrl</span>
                </div>
                <div className="flex flex-4/6 justify-center gap-20 w-full">
                    <div>
                        <span>Navigation</span>
                    </div>
                    <div>
                        <span>Contact</span>
                    </div>
                    <div>
                        <span>Legal</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <span>ToolsCtrl&copy;{year}</span>
                </div>
                <div className="flex gap-2">
                    {[<BsInstagram />, <BsTwitterX />, <BsLinkedin />].map((item, idx) => (
                        <div key={idx} className="h-10 w-10">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
