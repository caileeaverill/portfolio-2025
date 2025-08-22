import React from "react";

import HeroText from "@/components/HeroText";
import ModeToggle from "@/components/ModeToggle";

export function Hero() {
    return (
        <>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <HeroText />
            </div>
        </>
    );
}

export default Hero;
