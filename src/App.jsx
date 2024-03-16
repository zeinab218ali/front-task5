
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
// import NavBar from './components/NavBar/NavBar'
import PropertyDetails from './components/Property-Details/PropertyDetails'
import ContactUs from './components/Contact-Us/ContactUs'
import Properties from './components/Properties/Properties'
import VideoView from './components/VideoView/VideoView'
// import Hero from './components/Hero/Hero'
// import CardKm from './components/Card/CardKm'
// import BestAppartment from './components/BestAppartment/BestAppartment'
// import Carousels from './components/Carousels/Carousels'

function App() {
  
  return (
    <BrowserRouter>
      <div className='main-container'> 
     {/* <Contact /> */}
     {/* <BestAppartment /> */}
     {/* <NavBar /> */}
     {/* <CardKm photo='./property-01.jpg' name='Luxury Villa' salary='$2.264.000'
       desc='18 New Street Miami, OR 97219' num1='8' num2='8'
       num3='545m2' num4='3' num5='6 spots'
     /> */}
     {/* <Hero /> */}
     <VideoView />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/property-detailes' element={<PropertyDetails />} />
        <Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
      {/* <Carousels /> */}
    </div>
    </BrowserRouter>
    
  )
}

export default App
