import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { FaCalendar } from "react-icons/fa";
const NavBar = () => {
    return (
        <nav>
            <h2 className='logo'>
                VILLA
            </h2>
            <div className="links">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/properties"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Properties
                </NavLink>
                <NavLink
                    to="/property-details"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Property-Details
                </NavLink>
                <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Contact-Us
                </NavLink>
            </div>
            <div className="btn">
                <div className="icon-container">
                <FaCalendar color='white' />
                </div>
               
                <button>
                    scheduale a visit
                </button>
            </div>


        </nav>
    )
}

export default NavBar