import { ModeToggle } from './ModeToggle'

const TopNav = () => {
    return (
        <div className='fixed top-4 inset-x-0 max-w-lg mx-auto z-100'>
            <div className='relative rounded-full dark:bg-[#18181b] black bg-white shadow-input flex justify-center items-center space-x-4 py-2'>
                <ModeToggle />
                <a href=''>About</a>
                <a href='/'>Experience</a>
                <a href='/'>Projects</a>
                <a href='/'>Hire Me</a>
            </div>
        </div>
    )
}

export default TopNav