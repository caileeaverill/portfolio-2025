import Hero from "../sections/Hero";
import CardSection from "../sections/CardSection";
import EmploymentTimeline from "../sections/EmploymentTimeline";
import PortfolioSection from "../sections/PortfolioSection";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="p-4">
                <CardSection />
                <EmploymentTimeline />
                <PortfolioSection />
            </div>
        </>
    );
}