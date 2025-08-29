import { useState } from "react";
import { ArrowLeftCircle } from "lucide-react";

const links = [
    { href: "#top", text: "Back to top" },
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
];

const SecondaryHomepageNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed -right-0 top-1/2 -translate-y-1/2 p-4 pl-14 rounded-l-lg dark:bg-[#18181b] black bg-white shadow-input flex flex-col space-y-2 z-100 h-auto">
            <ArrowLeftCircle className="cursor-pointer absolute top-1/2 left-4 -translate-y-1/2" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && links.map(({ href, text }) => (
                <a
                    key={href}
                    href={href}
                    className="transition-all duration-300 hover:opacity-70"
                >
                    {text}
                </a>
            ))}
        </div>

    )
}

export default SecondaryHomepageNav