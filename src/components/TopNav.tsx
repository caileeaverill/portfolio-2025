import { ModeToggle } from './ModeToggle'

const links = [
    { href: "/", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Hire Me" },
];

const TopNav = () => {

    return (
        <nav className='fixed top-4 inset-x-0 max-w-sm md:max-w-lg mx-auto z-100'>
            <div className='relative rounded-full dark:bg-[#18181b] black bg-white shadow-input flex justify-center items-center space-x-4 py-2'>
                <ModeToggle />
                {links.map(({ href, text }) => (
                    <a
                        key={href}
                        href={href}
                        className="transition-all duration-300 hover:opacity-70"
                    >
                        {text}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default TopNav