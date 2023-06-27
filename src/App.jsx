import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import ThemeContextProvider from './Context/ThemeContext'
import Footer from './Components/Footer/Footer'
import Banner from './Components/BannerBottom/Banner'
import CitySearch from './Pages/CitySearch/CitySearch'
import CityDetails from './Pages/CItyDetails/CityDetails'
import PropertyDetail from './Pages/PropertyDetail/PropertyDetail'
import CityContextProvider from './Context/CityContext'


function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <BrowserRouter>
    <CityContextProvider >
    <ThemeContextProvider>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage baseUrl={baseUrl} />}/>
      <Route path='/citysearch' element={<CitySearch baseUrl={baseUrl}/>}/>
      <Route path='/citydetails/:cityId' element={<CityDetails baseUrl={baseUrl}/>}/>
      <Route path='/propertydetails/:propertyId' element={<PropertyDetail baseUrl={baseUrl}/>}/>
    </Routes>
    <Banner />
    <Footer />
    </ThemeContextProvider>
    </CityContextProvider>
    </BrowserRouter>
  )
}

export default App
