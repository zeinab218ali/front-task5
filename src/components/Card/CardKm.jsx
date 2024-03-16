import React from 'react'
import './CardKm.css'
import { NavLink } from 'react-router-dom'
const CardKm = ({photo,name, salary,desc, num1, num2, num3, num4, num5}) => {
    return (

        <div className='card-cotainer'>
            <img src={photo} alt="" />
            <div className="property">
                <div className="name">
                    <p>{name}</p>
                </div>
                <div className="salary">
                    <p>{salary}</p>
                </div>
            </div>
            <div className="desc">
                <h2>{desc}</h2>
            </div>
            <div className="details">
                <div className="detail">
                    <p>Bedrooms:</p>
                    <p className='number'>{num1}</p>
                </div>
                <div className="detail">
                    <p> Bathrooms:</p>
                    <p className='number'>{num2}</p>
                </div>
                <div className="detail">
                    <p>Area:</p>
                    <p className='number'>{num3}</p>
                </div>
                <div className="detail">
                    <p> Floor:</p>
                    <p className='number'>{num4}</p>
                </div>
                <div className="detail">
                    <p>Parking:</p>
                    <p className='number'>{num5}</p>
                </div>
            </div>
            <div className="card-btn">

                <NavLink
                    to="/property-details"

                >
                    schedual a visit
                </NavLink>
            </div>
        </div>
    )
}

export default CardKm