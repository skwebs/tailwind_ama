import { FaTwitter, FaYoutube } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { GrFacebookOption } from "react-icons/gr"


const AppNavLinks = [
    {
        'name': 'Home',
        'link': '/'
    },
    {
        'name': 'About Us',
        'link': 'about'
    },
    {
        'name': 'Contact Us',
        'link': 'contact'
    }, {
        'name': 'Register',
        'link': 'register'
    },
    {
        'name': 'Login',
        'link': 'login'
    },
    {
        'name': 'Sitemap',
        'link': 'sitemap'
    },

]
const iconStyle = ` w-5 h-full mx-auto`;
const SocialIconsList = [
    { 'href': 'https://youtube.com/AnshuMemorialAcademy', 'icon': <FaYoutube className={iconStyle} />, 'text': 'YouTube Channel' },
    { 'href': 'https://facebook.com/AnshuMemorialAcademy', 'icon': <GrFacebookOption className={iconStyle} />, 'text': 'Facebook Page' },
    { 'href': 'https://twitter.com/AnshuMemorial', 'icon': <FaTwitter className={iconStyle} />, 'text': 'Twitter Page' },
    { 'href': 'https://instagram.com/AnshuMemorial', 'icon': <FiInstagram className={iconStyle} />, 'text': 'Instagram Page' },
]

export { AppNavLinks, SocialIconsList }