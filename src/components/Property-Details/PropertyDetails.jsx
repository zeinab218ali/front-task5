import React from 'react'
import BESTDEAL from '../BESTDEAL/BESTDEAL'
import Footer from '../Footer/Footer'

const PropertyDetails = () => {
  return (
    <div className='PropertyDetails-container'>
      <Hero photo='./page-heading-bg.jpg' pathHeader='HOME' sp='| SINGLE PROPERTY' H3='SINGLE PROPERTY'/>
      <BESTDEAL />
      <Footer />
    </div>
  )
}

export default PropertyDetails