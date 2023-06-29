import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover'
import Hero from './components/Hero'
import Footer1 from './components/Footer1'
import Work from './components/Work'
import Companies from './components/Companies'
import Main from './components/Main'


const App = () => {
  return (
    
    <div>
    <Navbar/>
    <Main />
    <Hero />
    <Cover />
    <Work />
    
    <Companies />
    <Footer1 />
    </div>
  )
}

export default App
