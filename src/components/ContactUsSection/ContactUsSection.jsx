import React from 'react'
import Hero from '../Hero/Hero'
import './ContactUsSection.css'
import MiniCard from '../MiniCard/MiniCard'
const ContactUsSection = () => {
    return (
        <div className='contact-container'>
            <Hero />
            <div className="map-and-form-container">
                <div className="map-container">
                    <iframe
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="200"
                        height="300"
                        src="./Live View Page - 591 villa agency Template_files/analytics.js.download">
                    </iframe>
                    <div className="mini-cards">
                        <MiniCard photo='phone-icon.png' H3='010-020-0340' desc='Phone Number' />
                        <MiniCard photo='email-icon.png' H3='info@villa.co' desc='Business Email' />
                    </div>
                </div>

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
                            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        </div>
                        <button>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection