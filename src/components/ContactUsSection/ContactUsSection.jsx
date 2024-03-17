import React from 'react'
import Hero from '../Hero/Hero'
import './ContactUsSection.css'
import MiniCard from '../MiniCard/MiniCard'
const ContactUsSection = () => {
    return (
        <div className='contact-container'>
            <Hero photo='./contact-bg.jpg' sp='| CONTACT US' H3='Get In Touch With Our Agents'/>
            <div className="map-and-form-container">
                <div className="map-container">
                    <iframe
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        // width="300"
                        // height="600"
                        src="https://www.google.com/maps/dir//Sunny+Isles+Beach+FL+33160+United+States/@25.9524779,-80.1187812,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9add4b4ac788f:0xe77469d09480fcdb!2m2!1d-80.1187812!2d25.9524779?entry=ttu">
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