import './VideoView.css'
import Hero from '../Hero/Hero'
import { FaPlayCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const VideoView = () => {
    return (
        <div className='video-container'>
            <Hero photo='./video-bg.jpg' sp='| VIDEO VIEW' H3='Get Closer View & Different Feeling' />
            <img className='video-img' src="./video-frame.jpg" alt="" />
            <div className="link-container">
                <NavLink
                    to={'https://www.youtube.com/'}

                >
                    <div className="icon-container">
                        <div className="icon">
                            <FaPlayCircle color='#f35525' />
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="mini-cards-container">
                <div className="card">
                    <div className="mini-card">
                        <h2>34</h2>
                        <p> Buildings
                            Finished Now
                        </p>
                    </div>
                    <div className="circle"></div>
                </div>
                <div className="card">
                    <div className="mini-card">
                        <h2>12</h2>
                        <p> Years
                            Experience
                        </p>
                    </div>
                    <div className="circle"></div>
                </div>
                <div className="card">
                    <div className="mini-card">
                        <h2>24</h2>
                        <p> Awwards
                            Won 2023
                        </p>
                    </div>
                    <div className="circle"></div>
                </div>

            </div>
        </div>
    )
}

export default VideoView