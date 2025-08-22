import { SkeletonOne, SkeletonTwo, SkeletonThree } from "@/components/CardSkeletons";


export const items = [
    {
        title: "🌲 Balancing Code and Life",
        description: (
            <span className="text-sm">
                I love what I do as a developer, but I also make time for the things that keep me grounded —
                whether it’s biking, traveling, or simply enjoying the outdoors.
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-2",

    },
    {
        title: "📍 Based in Canada, Working Everywhere",
        description: (
            <span className="text-sm">
                East Coast based, remote by design, and connected wherever projects take me —
                with direct experience working alongside global teams from the US and UK to Australia and beyond.
            </span>

        ),
        header: <SkeletonTwo />,
        className: "md:col-span-2",
    },
    {
        title: "🔧 The Gears Behind the Magic",
        description: (
            <span className="text-sm">
                Always experimenting, always building — my tech stack is a mix of tools I know and love, alongside those I’m still exploring and growing with.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-4 py-4",
    },


];
