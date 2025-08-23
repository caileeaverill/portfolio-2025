import { motion } from "motion/react";
import { Globe } from "@/components/ui/globe";

export const SkeletonOne = () => {
    return (
        <img
            src="/public/images/me.jpg"
            alt=""
            className="w-full h-64 rounded-2xl object-cover bg-top"
        />
    );
};
export const SkeletonTwo = () => {
    return (
        <Globe />
    );
};

export const SkeletonThree = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-4"
        >
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black/[0.2] dark:border-transparent border border-neutral-200 flex flex-col items-center justify-center"
            >
                <div className="flex flex-wrap justify-center items-center gap-2">
                    <img
                        src="/public/images/react.svg"
                        alt="React logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/typescript-icon.svg"
                        alt="TypeScript logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/nodejs-icon.svg"
                        alt="Node.js logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/css-3.svg"
                        alt="CSS3 logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/tailwindcss-icon.svg"
                        alt="Tailwind CSS logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/bootstrap.svg"
                        alt="Bootstrap logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/html-5.svg"
                        alt="HTML5 logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <div className="dark:bg-white rounded-full">
                        <img
                            src="/public/images/express.svg"
                            alt="Express.js logo"
                            height="100"
                            width="100"
                            className="h-10 w-10 p-1"
                        />
                    </div>
                    <img
                        src="/public/images/mongodb-icon.svg"
                        alt="MongoDB logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                </div>


                <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Web Development
                </p>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black/[0.2] dark:border-transparent border border-neutral-200 flex flex-col items-center justify-center">
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <img
                        src="/public/images/figma.svg"
                        alt="Figma logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/zendesk.svg"
                        alt="Zendesk logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/github-icon.svg"
                        alt="GitHub logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/salesforce.svg"
                        alt="Salesforce logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/jira.svg"
                        alt="Jira logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/vitejs.svg"
                        alt="Vite.js logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                </div>

                <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Tools
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black/[0.2] dark:border-transparent border border-neutral-200 flex flex-col items-center justify-center"
            >
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <img
                        src="/public/images/google-tag-manager.svg"
                        alt="Google Tag Manager logo"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                    <img
                        src="/public/images/wcag img.png"
                        alt="WCAG accessibility guidelines logo"
                        height="100"
                        width="100"
                        className="h-10 w-20"
                    />
                    <img
                        src="/public/images/seo.png"
                        alt="SEO icon"
                        height="100"
                        width="100"
                        className="h-10 w-10"
                    />
                </div>


                <p className="border border-red-500 bg-orange-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    SEO
                </p>
            </motion.div>
        </motion.div>
    );
};
