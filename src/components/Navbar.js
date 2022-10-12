import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi"

// Importing the style file
import '../css/Navbar.css'

// Creating the Navbar component
const Navbar = ({ navbarLinks}) => {

    const [toggleMenu, setToggleMenu] = useState(false);

    // Function that will toogle the menu open or closed
    const onMenuToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav className='navbar'>
            <span className="logo">Travel</span>
            {toggleMenu ? <FiX size={25} className="navbar-icon" onClick={onMenuToggle} /> : <FiMenu size={25} className="navbar-icon" onClick={onMenuToggle} />}
            <ul className={`navbar-list ${toggleMenu && "navbar-list-active"}`}>{navbarLinks.map(navlink => {
                return <li className='navbar-item' key={navlink.title}>
                    <a href={navlink.url}>{navlink.title}</a>
                </li>
            })}</ul>
        </nav>
    )
}

export default Navbar;