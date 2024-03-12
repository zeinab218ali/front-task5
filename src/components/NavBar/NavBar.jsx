import React from 'react'
// import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
    return (
        <nav>
            <li
                // to="/"
                className={({ isActive}) =>
                    isActive ? "active" : ""
                }
            >
                Home
            </li>
            <li
                // to="/properties"
                className={({ isActive}) =>
                    isActive ? "active" : ""
                }
            >
                Properties
            </li>
            <li
                // to="/property-details"
                className={({ isActive}) =>
                    isActive ? "active" : ""
                }
            >
                Property-Details
            </li>
            <li
                // to="/contact-us"
                className={({ isActive}) =>
                    isActive ? "active" : ""
                }
            >
                Contact-Us
            </li>
            
        </nav>
    )
}

export default NavBar