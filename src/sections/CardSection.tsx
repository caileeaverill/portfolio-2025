"use client";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { items } from "@/components/CardContent";

export default function CardSection() {
    return (
        <div className="max-w-4xl mx-auto">
            <h3 className="my-4 text-3xl font-bold tracking-tight">
                Get to know me
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base ">
                I’m a curious builder who loves learning, coding, and creating—driven by a passion for exploring new ideas and turning them into reality. Below, you’ll get a glimpse of my hobbies, my location, and the technologies I work with.
            </p>
            <BentoGrid className=" md:auto-rows-[25rem] pt-10">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
