
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import PropertyDetails from './components/Property-Details/PropertyDetails'
import ContactUs from './components/Contact-Us/ContactUs'
import Properties from './components/Properties/Properties'

function App() {
  
  return (
    <BrowserRouter>
      <div className='main-container'>
     <Contact />
     <NavBar />
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