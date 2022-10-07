import React from 'react';

const SocialLink = ({ children, href }) => {
    const iconColorStyle = `bg-gradient-to-bl from-transparent to-slate-100 text-slate-400 after:bg-gray-200 hover:text-slate-700 focus:text-slate-700 after:bg-gradient-to-tr after:from-slate-50`;
    return (
        <>
            <a href={href} className={`relative flex justify-center items-center outline-none w-[40px] h-[40px] no-underline rounded-full text-center after:content-[''] after:absolute -after:top-1/2 -after:left-1/2 after:block after:w-0 after:h-0 after:rounded-full after:duration-300 hover:after:w-full hover:after:h-full focus:after:w-full focus:after:h-full ${iconColorStyle}`}>
                {React.cloneElement(children, { className: 'relative z-[1] duration-300 text-[28] w-2/5 h-2/5' }, null)}
            </a>
        </>
    )
}

export default SocialLink