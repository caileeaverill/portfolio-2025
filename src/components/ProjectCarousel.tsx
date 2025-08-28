"use client";

import Carousel from "@/components/ui/carousel";

export function ProjectCarousel() {
    const slideData = [
        {
            subtitle: "Case Study",
            title: "Project Management Institute",
            button: "View the case study",
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            subtitle: "Case Study",
            title: "Rockwell Automation",
            button: "View the case study",
            src: "https://plus.unsplash.com/premium_photo-1664297997167-88170c57bc35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            subtitle: "Case Study",
            title: "Pragmatic Institute",
            button: "View the case study",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            subtitle: "Case Study",
            title: "Hewlett Packard Enterprise",
            button: "View the case study",
            src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            subtitle: "Case Study",
            title: "American Institute of CPAs® and The Chartered Institute of Management Accountants®",
            button: "View the case study",
            src: "https://images.unsplash.com/photo-1511376868136-742c0de8c9a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            subtitle: "Bonus Case Study",
            title: "My portfolio",
            button: "View the case study",
            src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-14">
            <Carousel slides={slideData} />
        </div>
    );
}

export default ProjectCarousel;
