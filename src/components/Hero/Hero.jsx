import React from 'react'
import { NavLink } from 'react-router-dom'
import './Hero.css'
const Hero = ({photo,path,pathHeader,sp,H3}) => {
    return (
        <div className='hero'>
            <img src={photo} className='hero-img' alt="" />
            <div className="info">
                <div className="home-link">
                <NavLink
                    to={path}

                >
                    {pathHeader}
                </NavLink>
                <span>{sp}</span>
                </div>
                <h3>{H3}</h3>
            </div>
        </div>
    )
}

export default Hero