"use client";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { items } from "@/components/CardContent";

export default function CardSection() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[25rem]">
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
    );
}
