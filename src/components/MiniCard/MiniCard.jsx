import React from 'react'
import './MiniCard.css'
const MiniCard = ({ photo, H3, desc }) => {
    return (
        <div className='MC-container' >
            <div className="MC-img">
                <img src={photo} alt="" />
            </div>
            <div className="MC-info">
                <h3>{H3}</h3>
                <div className="desc">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default MiniCard