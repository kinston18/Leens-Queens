import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover'
import Hero from './components/Hero'
import Footer1 from './components/Footer1'
import Work from './components/Work'
import Companies from './components/Companies'
import Main from './components/Main'
import Mysec from'./components/Mysec'
import Art from './components/Art.jsx'


const App = () => {
  return (
    
    <div >
    <Navbar/>
    <Main />
    <Hero />
  
    <Cover />
 
    <Mysec />
   
    <Work />
    
    <Companies />
    <Art />
    <Footer1 />
    </div>
  )
}

export default App
