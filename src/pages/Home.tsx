import Hero from "../sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";


export default function Home() {
    return (
        <>
            <Hero />
            <div className="p-4">
                <About />
                <Experience />
                <Projects />
            </div>
        </>
    );
}