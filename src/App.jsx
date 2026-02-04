import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home/Home'
import Footer from './Component/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Destination from './Component/Destination/Destination';
import DestinationDetails from './Component/DestinationDetail/DestinationDetails';
import Tours from './Component/Tours/Tours';
import About from './Component/About/About';
import TourDeals from './Component/TourDeals/TourDeals';
import TourGuide from './Component/TourGuide/TourGuide';
import Faq from './Component/Faq/Faq';
import Gallery from './Component/Gallery/Gallery';
import Error from './Component/Error/Error';
import Contact from './Component/Contact/Contact';

function App() {

  return (
    <>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/destinationdetails' element={<DestinationDetails/>} />
        <Route path='/tours' element={<Tours/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/tourdeals' element={<TourDeals/>} />
        <Route path='/tourguide' element={<TourGuide/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/error' element={<Error/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
