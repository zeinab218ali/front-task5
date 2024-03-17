import MiniCard from "../MiniCard/MiniCard"
import Txt from "../Txt/Txt"

import './BestAppartment.css'
const BestAppartment = () => {
    return (
        <div className='BA-container'>
            <img src="./4.jpg" alt="" />
            
            <Txt H4='featured' H2='Best Appartment & Sea View' />
            <div className="BA-card">
                <MiniCard
                    photo="./info-icon-01.png"
                    H3="250 m2"
                    desc="Total Flat Space"
                />
                <MiniCard
                    photo="./info-icon-02.png"
                    H3="Contract"
                    desc="Contract Ready"
                />
                <MiniCard
                    photo="./info-icon-03.png"
                    H3="Payment"
                    desc="Payment Process"
                />
                <MiniCard
                    photo="./info-icon-04.png"
                    H3="Safety"
                    desc="24/7 Under Control"
                />

            </div>
        </div>
    )
}

export default BestAppartment