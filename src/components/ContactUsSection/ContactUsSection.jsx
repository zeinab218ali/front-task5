import React from 'react'
import Hero from '../Hero/Hero'

const ContactUsSection = () => {
    return (
        <div className='contact-container'>
            <Hero />
            <div className="map-and-form-container">
            <iframe style="display: block; position: absolute; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" src="./Live View Page - 591 villa agency Template_files/templatemo_591_villa_agency.html"></iframe>
                <div className="form-container">
                    <form action="#">
                        <div className="form-info">
                        <label>Full Name</label>
                        <input type="text" placeholder='Your Name...' />
                        </div>
                        <div className="form-info">
                        <label>Email Address</label>
                        <input type="text" placeholder='Your E-mail...' />
                        </div>
                        <div className="form-info">
                        <label>Subject</label>
                        <input type="text" placeholder='Subject...' />
                        </div>
                        <div className="form-info">
                        <label>Message</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection