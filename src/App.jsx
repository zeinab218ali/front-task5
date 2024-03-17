
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import PropertyDetails from './components/Property-Details/PropertyDetails'
import ContactUs from './components/Contact-Us/ContactUs'
import Properties from './components/Properties/Properties'
import PropertiesSection from './components/PropertiesSection/PropertiesSection'
import Footer from './components/Footer/Footer'
import ContactUsSection from './components/ContactUsSection/ContactUsSection'
import BESTDEAL from './components/BESTDEAL/BESTDEAL'
import VideoView from './components/VideoView/VideoView'
// import Hero from './components/Hero/Hero'
// import CardKm from './components/Card/CardKm'
import BestAppartment from './components/BestAppartment/BestAppartment'
import Carousels from './components/Carousels/Carousels'

function App() {
  
  return (
    <BrowserRouter>
      <div className='main-container'> 
     {/* <Contact /> */}
     <NavBar />
     <Carousels />
     <BestAppartment />
     {/* <VideoView /> */}
     {/* <CardKm photo='./property-01.jpg' name='Luxury Villa' salary='$2.264.000'
       desc='18 New Street Miami, OR 97219' num1='8' num2='8'
       num3='545m2' num4='3' num5='6 spots'
     /> */}
     {/* <Hero /> */}
    
     <BESTDEAL />
       
       <PropertiesSection />
       <ContactUsSection />
       <Footer />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/property-detailes' element={<PropertyDetails />} />
        <Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
    
    </div>
    </BrowserRouter>
    
  )
}

export default App
