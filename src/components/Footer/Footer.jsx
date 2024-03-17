import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <p>Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design: </p>
            <Link to="https://templatemo.com">TemplateMo</Link> 
        </div>
    
    )
}

export default Footer