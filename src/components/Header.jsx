import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { AppNavLinks } from '../constants'
import { NavLink } from 'react-router-dom'
import SocialIcons from './SocialIcons'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
    const commonLinkStyle = `group font-semibold items-center flex rounded-md text-slate-700 cursor-pointer`;

    const sidebarDrawer = <>
        {/* mobile menu sidebar drawer overlay */}
        <div onClick={() => setToggle(false)} className={` ${toggle ? ' opacity-100 z-0' : ' opacity-0 -z-10'} backdrop-blur-sm fixed z-0 inset-0 bg-black/20 my-transition md:hidden dark:bg-slate-900/80`}></div>


        {/* sidebar menu */}
        <aside className={`${toggle ? 'translate-x-0' : '-translate-x-full'} fixed shadow-lg md:hidden z-10 transform top-0 left-0 h-full overflow-x-hidden ease-in-out transition-all duration-300 bg-white w-80 max-w-[calc(100%-3rem)]  dark:bg-slate-800`}>
            {/* header */}
            <div className='flex justify-between py-2 pl-6'>
                <div className='w-full text-slate-500 p-2'>
                    <h2 className='font-bold text-[1.5rem] text-center uppercase'>Anshu Memorial Academy</h2>
                </div>
                <MdClose onClick={() => setToggle(false)} className='block md:hidden text-4xl p-1 mx-2' />
            </div>
            {/* mobile navigation */}
            <nav className=' px-6 pb-2'>
                <ul className='flex flex-col space-y-2'>
                    {AppNavLinks.map((nav, index) => (
                        <li key={index} ><NavLink onClick={() => setToggle(false)} end className={`${commonLinkStyle} border px-5 py-3 hover:bg-slate-100`} to={nav.link}>{nav.name}</NavLink></li>
                    ))}

                </ul>
            </nav>
            <div className='px-6'>
                {/* <div className='border-b-[1px] my-6'></div> */}
                <div className='flex space-x-2 justify-center mt-6'>
                    {<SocialIcons />}
                </div>
            </div>
        </aside>

    </>;

    return (
        <>
            <div className="fixed top-0 bg-white shadow-lg w-full text-slate-700">
                <div className='container mx-auto flex justify-between items-center px-2'>
                    <div className='text-2xl p-3 cursor-pointer font-bold'>AMA</div>
                    <nav>
                        <ul className='hidden md:flex items-center'>
                            {AppNavLinks.map((nav, index) => (
                                <li key={index} ><NavLink end className={`${commonLinkStyle} px-3 py-2 hover:underline hover:underline-offset-8`} to={nav.link}>{nav.name}</NavLink></li>
                            ))}
                        </ul>
                    </nav>
                    {/* responsive menu */}
                    <button
                        className="md:hidden flex flex-col h-12 w-12 rounded justify-center items-center group overflow-visible"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span
                            className={`${genericHamburgerLine} ${toggle
                                ? "rotate-45 translate-y-2"
                                : ""
                                }`}
                        />
                        <span
                            className={`${genericHamburgerLine} ${toggle ? "opacity-0 -translate-x-3" : " group-hover:opacity-100"
                                }`}
                        />
                        <span
                            className={`${genericHamburgerLine} ${toggle
                                ? "-rotate-45 -translate-y-3"
                                : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {sidebarDrawer}



        </>
    )
}

export default Header