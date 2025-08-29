import Hero from "../sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import SecondaryHomepageNav from "@/components/SecondaryHomepageNav";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="p-4">
                <SecondaryHomepageNav />
                <About />
                <Experience />
                <Projects />
            </div>
        </>
    );
}