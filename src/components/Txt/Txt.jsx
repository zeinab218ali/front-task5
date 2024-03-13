import React from 'react'
import Selection from '../Selection/Selection'
import './Txt.css'


const Txt = ({photo, H4, H2}) => {
    return (
        <div className='txt-container'>
        
            <div className="txt">
                <div className='select-container'>
                    <div className='left-border'>
                    <h4>{H4}</h4>
                    </div>
                    <h2>{H2}</h2>
                    <Selection />
                </div>


            </div>
           
        </div>
    )
}

export default Txt