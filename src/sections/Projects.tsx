import ProjectCarousel from "@/components/ProjectCarousel"

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-24">
            <div className="max-w-4xl mx-auto">
                <h3 className="my-4 text-3xl font-bold tracking-tight">
                    Projects I actually shipped, not just hello world
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base ">
                    What you're really here for. A preview here, full case studies inside. Follow each build from idea → prototype → production, then dive into the case study for the nitty-gritty
                </p>
                <ProjectCarousel />
            </div>
        </section>
    )
}

export default Projects