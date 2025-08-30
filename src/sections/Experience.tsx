import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data/experienceData";

export function Experience() {

    return (
        <section id="experience" className="scroll-mt-10">
            <div className="relative w-full overflow-clip">
                <Timeline data={timelineData} />
            </div>
        </section>

    );
}

export default Experience;