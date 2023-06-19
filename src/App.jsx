import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import ThemeContextProvider from './Context/ThemeContext'
import Footer from './Components/Footer/Footer'
import Banner from './Components/BannerBottom/Banner'


function App() {

  return (
    <BrowserRouter>
    <ThemeContextProvider>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage />}/>


    </Routes>
    <Banner />
    <Footer />
    </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
