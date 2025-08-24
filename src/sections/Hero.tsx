"use client";

import { motion } from "motion/react";

export function Hero() {
    return (
        <div className="relative h-[30rem] mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
            <div className="px-4 py-10 md:py-20">
                <h1 className="text-center
               text-5xl lg:text-7xl font-sans 
               py-2 md:py-5 relative z-20 font-bold tracking-wide dark:text-white">
                    {"Hello. My name is Cailee. "
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className="mr-2 inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.3,
                        delay: 0.8,
                    }}
                    className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-white/80"
                >
                    Front-end developer. 6 years in. I build things for the web and try not to break them. Welcome  to my website.
                </motion.p>
            </div>
        </div>
    );
}

export default Hero 