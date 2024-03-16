import React from 'react'
import { NavLink } from 'react-router-dom'
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero'>
            <img src="./page-heading-bg.jpg" className='hero-img' alt="" />
            <div className="info">
                <div className="home-link">
                <NavLink
                    to="/home"

                >
                    HOME
                </NavLink>
                <span>/ PROPERTIES</span>
                </div>
                <h3>PROPERTIES</h3>
            </div>
        </div>
    )
}

export default Hero