import { SocialIconsList } from '../constants'

const SocialIcons = () => {
    // const socialIconsStyle = `rounded-full border-2 border-slate-700 text-slate-700 leading-normal hover:text-sky-500 hover:border-sky-500 focus:outline-none focus:ring-0 transition duration-200 ease-in-out w-9 h-9 m-1 my-transition`;
    const socialIconsStyle = `text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-full hover:bg-slate-100 text-slate-700 leading-normal hover:text-slate-700 hover:border-slate-700 focus:outline-none focus:ring-0 transition duration-200 ease-in-out w-9 h-9 my-transition`;
    // const socialIconsStyle = `text-slate-400 hover:text-slate-900 dark:hover:text-white`;
    return (
        <>

            {SocialIconsList.map((si, index) => (
                <a key={index} href={si.href} target='_blank' rel="noreferrer" type="button" className={socialIconsStyle}>
                    {si.icon} <span className="sr-only">{si.text}</span>
                </a>
            ))}

        </>
    )
}

export default SocialIcons