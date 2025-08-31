import HigherLogicPin from "@/components/Pins/HigherLogicPin";
import EconPin from "@/components/Pins/EconPin";
import FanshawePin from "@/components/Pins/FanshawePin";

export const timelineData = [
    {
        title: "March 2023 to Present",
        content: (
            <div>
                <p className="mb-8 text-xs font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
                    Joined Higher Logic, the industry leader in online community and engagement solutions for associations as a front-end developer in 2023.
                </p>
                <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    What once started with baby steps in front-end code has now grown into building solutions that help entire communities connect, thrive, and shine. It feels a little surreal sometimes—like leveling up in a video game where the quests get bigger, the tools get cooler, and the impact goes way beyond my own screen. This is where I am today: turning lines of code into bridges that bring people together.
                </p>
                <div className="grid grid-cols-1 gap-4">
                    <HigherLogicPin />
                </div>
            </div>
        ),
    },
    {
        title: "November 2019 to March 2023",
        content: (
            <div>
                <p className="mb-8 text-xs font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
                    Started my journey with a small start up of 10 people called eConverse Media Inc. in November of 2019 as a front-end developer.
                </p>
                <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Armed with nothing but curiosity, and way too many tabs open in Chrome, I took my first steps as a front-end developer. What started as a simple role quickly became the launchpad for everything that followed—countless lines of code, late nights learning, and the first spark of realizing that this wasn’t just a job, it was the beginning of a journey. Looking back, that little startup wasn’t just a workplace—it was the “once upon a time” in the story of my career.
                </p>
                <div className="grid grid-cols-1 gap-4">
                    <EconPin />
                </div>
            </div>
        ),
    },
    {
        title: "December 2018 to May 2019",
        content: (
            <div>
                <p className="mb-8 text-xs font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
                    Graduated from Fanshawe College of Applied Arts and Technology with a diploma in Internet Applications and Web Development
                </p>
                <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Completed coursework in full-stack web development, covering front-end design (HTML, CSS, JavaScript, UX/UI), back-end programming (PHP, databases, server fundamentals), mobile app development, and cloud deployment. Gained practical experience in web security, responsive design, and application projects, with a focus on modern frameworks, teamwork, and real-world problem solving.
                </p>
                <div className="grid grid-cols-1 gap-4">
                    <FanshawePin />
                </div>
            </div>
        ),
    },
];
