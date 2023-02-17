import React, { Component } from 'react'
import "./navbar.css"
import {NavLink,Link} from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import Footer from '../Footer'


export default class navbar extends Component {
  render() {
    return (
      // <div className='navbar'>
        
      //   <nav className='nav'>
      //       <ul className='ul_nav'>
      //           {/* <a href='/'>TRANG CHỦ</a> */}
      //           <Link to = '/header'>TRANG CHỦ</Link>

      //           {/* <a href='/laptopdell'>LATOP DELL</a> */}
      //           <NavLink to ='/laptopdell'>LAPTOP VĂN PHÒNG</NavLink>
               
      //           {/* <a href='/laptophp'>LAPTOP HP</a>
      //           <a href='/laptopthinkingpad'>LAPTOP THINKING PAD</a> */}
      //           <Link to ='/LaptopGaming'>LAPTOP ĐỒ HỌA GAMING</Link>

                
                
      //       </ul>
            
      //   </nav>
      //   <Carousel/>


     
        

      // </div>
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">ANH VŨ COMPUTER</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page"  to="/productss" spy={true} smooth={true} offset={50} duration={500}>Product</Link>
                {/* <a href='.products'>products</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Footer">Contact</Link>
              </li>    
            </ul>
            <div className="buttons">
                <a href="" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1" aria-hidden="true"> Login</i>
                </a>
                <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1" aria-hidden="true"> Register</i>
                </a>
                <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1" > Cart (0)</i>
                </a>
            </div>
          </div>
        </div>
      </nav>
      {/* <section id="about">About</section>
      <section id="product">Product</section>
      <section id="contact">Contact</section> */}

      <Carousel/>
      {/* <Footer/> */}

      </div>
    )
  }
}
