import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'

const Footer = () => {

  return (
    <>
      <div className='p-6'>

        <footer className="p-4 container mx-auto bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-slate-800">
          <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">&copy; {new Date().getFullYear()} <Link className='hover:underline' href="/">AMA</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-slate-500 dark:text-slate-400 sm:mt-0">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
              <a href="/" className="hover:underline">Contact</a>
            </li>
          </ul>
        </footer>
      </div>

      <footer className="bg-white dark:bg-slate-900">
        <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 container mx-auto">
          <div className='mx-auto container'>
            <h2 className="mb-6 text-sm font-semibold text-slate-500 uppercase dark:text-slate-400">Company</h2>
            <ul className="text-slate-500 dark:text-slate-400">
              <li className="mb-4">
                <a href="/" className=" hover:underline">About</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Careers</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Brand Center</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-slate-500 uppercase dark:text-slate-400">Help center</h2>
            <ul className="text-slate-500 dark:text-slate-400">
              <li className="mb-4">
                <a href="/" className="hover:underline">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-slate-500 uppercase dark:text-slate-400">Legal</h2>
            <ul className="text-slate-500 dark:text-slate-400">
              <li className="mb-4">
                <a href="/" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-slate-500 uppercase dark:text-slate-400">Download</h2>
            <ul className="text-slate-500 dark:text-slate-400">
              <li className="mb-4">
                <a href="/" className="hover:underline">iOS</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Android</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">Windows</a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-slate-100 dark:bg-slate-700'>
          <div className="py-6 px-4  md:flex md:items-center md:justify-between container mx-auto">
            <span className="text-sm text-slate-500 dark:text-slate-300 sm:text-center">  &copy; {new Date().getFullYear()} <Link className='hover:underline' to="/">AMA</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-2 sm:justify-center md:mt-0">
              {<SocialIcons />}
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer