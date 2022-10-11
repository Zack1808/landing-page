import React from 'react';
import { FiMenu, FiX } from "react-icons"

// Importing the style file
import '../css/Navbar.css'

// Creating the Navbar component
const Navbar = ({ navbarLinks}) => {
    return (
        <nav className='navbar'>
            <span className="logo">Travel</span>
            <ul className='navbar-list'>{navbarLinks.map(navlink => {
                return <li className='navbar-item'>
                    <a href={navlink.url}>{navlink.title}</a>
                </li>
            })}</ul>
        </nav>
    )
}

export default Navbar;