import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { AppNavLinks } from '../constants'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="relative bg-white shadow-lg w-full text-slate-700 z-20">
                <div className='max-w-[1200px] mx-auto flex justify-between items-center px-2'>
                    <div className='text-2xl p-3 cursor-pointer font-bold'>AMA</div>
                    <nav>
                        <ul className='hidden md:flex'>
                            {AppNavLinks.map((nav, index) => (
                                <li key={index} className='px-5 py-4 hover:bg-slate-700 hover:text-white cursor-pointer'>{nav.name}</li>
                            ))}
                        </ul>
                    </nav>
                    {/* responsive menu */}
                    {!toggle ? <HiMenuAlt3 onClick={() => setToggle(!toggle)} className='block md:hidden text-black text-5xl hover:bg-slate-700 hover:text-white rounded-md p-2' /> :
                        <CgClose onClick={() => setToggle(!toggle)} className='block md:hidden text-black text-5xl hover:bg-slate-700 hover:text-white rounded-md p-2' />}
                </div>
            </div>
            {/* mobile menu sidebar drawer */}
            <div onClick={() => setToggle(false)} className={` ${toggle ? ' opacity-100' : ' opacity-0'} fixed z-0 inset-0 bg-slate-700/80 my-transition md:hidden`}></div>
            <aside className={`${toggle ? 'translate-x-0' : '-translate-x-full'} p-3 md:hidden z-[1] transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300`}>
                <FiArrowLeftCircle onClick={() => setToggle(!toggle)} className='block md:hidden text-black text-5xl p-2 absolute top-1 left-1' />
                <nav>
                    <ul className='pt-14 py-2'>
                        {AppNavLinks.map((nav, index) => (
                            <li key={index} className='px-5 py-3 rounded-md hover:bg-slate-700 hover:text-white cursor-pointer'>{nav.name}</li>
                        ))}
                    </ul>
                </nav>

                <div className='flex p-3 justify-center gap-5 items-center border-t-2'>
                    <AiFillYoutube className='fill-slate-700 text-white text-3xl hover:fill-red-700 my-transition' />
                    <FaFacebook className='fill-slate-700 text-white text-2xl hover:fill-blue-700 my-transition' />
                    <AiFillTwitterCircle className='fill-slate-700 text-white text-3xl hover:fill-sky-700 my-transition' />
                    <AiFillInstagram className='fill-slate-700 text-white text-3xl hover:fill-red-700 my-transition' />
                </div>
            </aside>




        </>
    )
}

export default Header