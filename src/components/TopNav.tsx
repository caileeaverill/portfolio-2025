import { ModeToggle } from '../lib/theme/ModeToggle'

const links = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/hireme", text: "Hire Me" },
];

const TopNav = () => {

    return (
        <nav className='fixed top-4 inset-x-0 max-w-sm md:max-w-lg mx-auto z-100'>
            <div className='relative rounded-full shadow-md border border-neutral-200 bg-white shadow-input flex justify-center items-center space-x-4 py-2 dark:bg-[#18181b] dark:border-transparent dark:shadow-none'>
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