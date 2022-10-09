import './Hamburger.scss';

const Hamburger = ({ className = "", toggle, setToggle }) => {
    return (
        <div className={className}>
            <div onClick={() => { setToggle(!toggle) }} className={`hamburger ${toggle ? 'menu-active' : ''} `}>
                <div className="hamburger-line"></div>
            </div>
        </div>
    )
}

export default Hamburger