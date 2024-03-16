import { FaCalendar } from 'react-icons/fa'
import './BESTDEAL.css'

const BESTDEAL = () => {
  return (
    <div className='best-deal'>
      <div className="up-section">
        <div className='left'>
          <div className="h5-container">
            <h5>BEST DEAL</h5>
          </div>
          <h1>Find Your Best Deal Right Now!
          </h1>
        </div>
        <div className="right">
          <div className="right-btn">
          <button>Appartment</button>
          </div>
          <div className="right-btn">
          <button>Villa House</button>
          </div>
          <div className="right-btn">
          <button>Penthouse</button>
          </div>
          
        </div>
      </div>
      <div className='down-section'>
        <div className="left-card">
          <div className="card-details">
            <h5>Total Flat Space</h5>
            <p id='p-info-1'>185 m2</p>
          </div>
          <div className="card-details">
            <h5>Floor number</h5>
            <p id='p-info-2'>26th</p>
          </div>
          <div className="card-details">
            <h5>Number of rooms</h5>
            <p id='p-info-3'>4</p>
          </div>
          <div className="card-details">
            <h5>Parking Available</h5>
            <p id='p-info-4'>Yes</p>
          </div>
          <div className="card-details">
            <h5>Payment Process</h5>
            <p id='p-info-5'>Bank</p>
          </div>
        </div>
        <img src="./deal-01.jpg" alt="" />
        <div className="extra-info">
          <h4>Extra Info About Property</h4>
          <p className="details-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.

            When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
          </p>
          <div className="btn">
                <div className="icon-container">
                <FaCalendar color='white' />
                </div>
               
                <button>
                    scheduale a visit
                </button>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default BESTDEAL