import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Globe } from "@/components/ui/globe";

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mql = window.matchMedia(query);
        const onChange = () => setMatches(mql.matches);
        setMatches(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [query]);

    return matches;
}

export const SkeletonOne = () => {
    return (
        <img
            src="/logos/me.jpg"
            alt=""
            className="w-full h-64 rounded-2xl object-cover bg-top"
        />
    );
};

export const SkeletonTwo = () => {
    return <Globe />;
};

export const SkeletonThree = () => {
    const isAboveMd = useMediaQuery("(min-width: 768px)");

    const Container = isAboveMd ? motion.div : ("div" as const);
    const CardA = isAboveMd ? motion.div : ("div" as const);
    const CardB = isAboveMd ? motion.div : ("div" as const);
    const CardC = isAboveMd ? motion.div : ("div" as const);

    const first = isAboveMd
        ? {
            initial: { x: 20, rotate: -5 },
            hover: { x: 0, rotate: 0 },
        }
        : undefined;

    const second = isAboveMd
        ? {
            initial: { x: -20, rotate: 5 },
            hover: { x: 0, rotate: 0 },
        }
        : undefined;

    const containerMotionProps = isAboveMd
        ? ({ initial: "initial", animate: "animate", whileHover: "hover" } as const)
        : ({} as const);

    return (
        <Container
            {...containerMotionProps}
            className="flex gap-4 flex-wrap w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-row space-x-4 dark:bg-dot-white/[0.2] md:flex-nowrap md:gap-0"
        >
            <CardA
                {...(isAboveMd ? { variants: first } : {})}
                className="w-full m-0 md:mr-4 md:w-1/3 md:h-full rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center dark:bg-black/[0.2] dark:border-transparent "
            >
                <div className="flex flex-wrap justify-center items-center gap-2">
                    <img src="/logos/react.svg" alt="React logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/typescript-icon.svg" alt="TypeScript logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/nodejs-icon.svg" alt="Node.js logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/css-3.svg" alt="CSS3 logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/tailwindcss-icon.svg" alt="Tailwind CSS logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/bootstrap.svg" alt="Bootstrap logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/html-5.svg" alt="HTML5 logo" height="100" width="100" className="h-10 w-10" />
                    <div className="dark:bg-white rounded-full">
                        <img src="/logos/express.svg" alt="Express.js logo" height="100" width="100" className="h-10 w-10 p-1" />
                    </div>
                    <img src="/logos/mongodb-icon.svg" alt="MongoDB logo" height="100" width="100" className="h-10 w-10" />
                </div>
                <p className="border border-blue-500 bg-blue-100 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4 dark:bg-blue-900/20">
                    Web Development
                </p>
            </CardA>

            <CardB className="w-full m-0 border relative z-20 rounded-2xl bg-white p-4  border-neutral-200 flex flex-col items-center justify-center dark:bg-black/[0.2] dark:border-transparent md:mr-4 md:w-1/3 md:h-full">
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <img src="/logos/figma.svg" alt="Figma logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/zendesk.svg" alt="Zendesk logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/github-icon.svg" alt="GitHub logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/salesforce.svg" alt="Salesforce logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/jira.svg" alt="Jira logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/vitejs.svg" alt="Vite.js logo" height="100" width="100" className="h-10 w-10" />
                </div>
                <p className="border border-green-500 bg-green-100 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4 dark:bg-green-900/20">
                    Tools
                </p>
            </CardB>

            <CardC
                {...(isAboveMd ? { variants: second } : {})}
                className="w-full rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center dark:bg-black/[0.2] dark:border-transparent md:w-1/3 md:h-full"
            >
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <img src="/logos/google-tag-manager.svg" alt="Google Tag Manager logo" height="100" width="100" className="h-10 w-10" />
                    <img src="/logos/wcag img.png" alt="WCAG accessibility guidelines logo" height="100" width="100" className="h-10 w-20" />
                    <img src="/logos/seo.png" alt="SEO icon" height="100" width="100" className="h-10 w-10" />
                </div>
                <p className="border border-red-500 bg-orange-100 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4 dark:bg-red-900/20">
                    SEO
                </p>
            </CardC>
        </Container>
    );
};
