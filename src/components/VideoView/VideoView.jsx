import './VideoView.css'
import Hero from './components/Hero/Hero'
import { FaPlayCircle } from "react-icons/fa";

const VideoView = () => {
    return (
        <div className='video-container'>
        <Hero photo='./video-bg' sp='| VIDEO VIEW' H3='Get Closer View & Different Feeling' />
        <img src="./video-frame.jpg" alt="" />
        <div className="link-container">
        <NavLink
                    to={'https://www.youtube.com/'}

                >
                    <div className="icon">
                    <FaPlayCircle />
                    </div>
                </NavLink>
        </div>
        </div>
    )
}

export default VideoView