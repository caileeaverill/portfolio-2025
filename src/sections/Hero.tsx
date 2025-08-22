import React from "react";
import HeroText from "@/components/HeroText";
import { Spotlight } from "@/components/ui/spotlight";


export default function SpotlightHero() {
    return (
        <div className="relative flex h-[40rem] w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
            <HeroText />
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
        </div>
    );
}