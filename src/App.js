import React, { Component } from 'react'
import "./App.css"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Carousel from './Carousel/Carousel'
import Header from './Header/Header'
import Navbar from './Navbar/navbar'
import LaptopDell from './Sanpham/LaptopDell'
import {Routes,Route,Router} from 'react-router-dom'
import Chitiet from './Chitiet/Chitiet'
import Laptop from "./Laptopbanchay/Laptop"
import Gaming from './Laptopgaming/Gaming'
import About from './About/About'
import Products from './Products/Products'
import Footer from './Footer'
// import ScrollToTop from '../src/ScrollToTop'
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Navbar/>
        <Laptop/>
        <Products/>
          {/* <Footer/> */}
        
        
        {/* <Laptop/> */}
        {/* <Footer/> */}
        

        {/* <Chitiet/> */}
        {/* <Carousel/> */}
        
        {/* <LaptopDell/> */}
        <Routes>
          {/* <ScrollToTop/> */}
          
          {/* <Route path='/header' element={<Header/>}/> */}
          {/* <ScrollToTop/> */}
           
          
          <Route path='/laptopdell' element={<LaptopDell/>}/>
          <Route path='/Chitiet' element={<Chitiet/>}/>
         <Route path="/Gaming" element={<Gaming/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Products" element={<Products/>}/>
         <Route path='Footer' element={<Footer/>}/>
         
         

        </Routes>

      </div>
    )
  }
}
