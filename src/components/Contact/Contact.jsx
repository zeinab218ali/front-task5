// import React from 'react'
// import { FaEnvelope } from "react-icons/fa";
// import { FaMap } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import './Contact.css'
// const Contact = () => {
//     return (
//         <div>
//             <div className='contact'>
//                 <div className="emails">
//                     <div className='email'>
//                         <FaEnvelope color='#f35525' />
//                         <p>info@company.com</p>
//                     </div>
//                     <div className='email'>
//                         <FaMap color='#f35525' />
//                         <p>Sunny Isles Beach, FL 33160</p>
//                     </div>
//                 </div>
//                 <div className="icons">
//                     <div className="icon"><FaFacebook /></div>
//                     <div className="icon"><FaTwitter /></div>
//                     <div className="icon"><FaLinkedin /></div>
//                     <div className="icon"><FaInstagram /></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaMap, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`contact ${isSticky ? 'sticky' : ''}`}>
                <div className="emails">
                    <div className='email'>
                        <FaEnvelope color='#f35525' />
                        <p>info@company.com</p>
                    </div>
                    <div className='email'>
                        <FaMap color='#f35525' />
                        <p>Sunny Isles Beach, FL 33160</p>
                    </div>
                </div>
                <div className="icons">
                    <div className="icon"><FaFacebook /></div>
                    <div className="icon"><FaTwitter /></div>
                    <div className="icon"><FaLinkedin /></div>
                    <div className="icon"><FaInstagram /></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

