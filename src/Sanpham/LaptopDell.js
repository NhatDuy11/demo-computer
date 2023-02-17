// import React, { Component } from "react";
// import "./LaptopDell.css";
// import dell1 from "../img/dell1.jpg";
// import delli7 from "../img/delli7.png"
// import {Link} from "react-router-dom"
// export default class LaptopDell extends Component {
//   render() {
//     return (
//       <div className="allsp">
        
//         <div className="title">
//           <h1>LAPTOP VĂN PHÒNG</h1>
//         </div>
//         <div className="sanpham">
//         <img src={delli7} />
//           <p>Dell precision 5530 i7-8850h</p>
//           <p>19.000.000 đ</p>
//          <Link to="/Chitiet"><button>Chi tiết sản phẩm</button></Link>
          
//         </div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//           <button>Chi tiết sản phẩm</button>
//         </div>
//         <div className="title">{/* <h1>LAPTOP DELL</h1> */}</div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//           <button>Chi tiết sản phẩm</button>
//         </div>
//         <div className="title">{/* <h1>LAPTOP DELL</h1> */}</div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//           <button>Chi tiết sản phẩm</button>
//         </div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//           <button>Chi tiết sản phẩm</button>
//         </div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//           <button>Chi tiết sản phẩm</button>
//         </div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//         </div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//         </div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//         </div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//         </div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//         </div>
//         <div className="sanpham">
//           <img src={dell1} />
//           <p>DELL ATILUTE 3790</p>
//           <p>13.000.000 đ</p>
//         </div>
//       </div>
//     );
//   }
// }

import React from 'react'
import "./LaptopDell.css"
import { Link } from 'react-router-dom'
import Footer from '../Footer'

export default function LaptopDell() {
  return (
    <div>
    
      <div className="content">
      <div className="row">
        <h1>LAPTOP VĂN PHÒNG</h1>
        <div className="col-12 col-sm-6 col-md-4  image">

        

          <img src="https://hc.com.vn/i/ecommerce/media/GS.009282_FEATURE_102855.jpg" />
          <p className="lap">LAPTOP HP</p>
          <p className="price">Giá:17.000.000đ</p>
          <div className='buttons d-flex justify-content-center mb-5 pb-5'>
            <Link to={"/Chitiet"}>

            <button>Chi tiết sản phẩm</button>
            </Link>

          </div>
          
        </div>
        <div className="col-12 col-sm-6 col-md-4  image">
          

          <img src="https://hc.com.vn/i/ecommerce/media/GS.009282_FEATURE_102855.jpg" />
          
          <p className="lap">LAPTOP HP</p> 
          <p className="price">Giá:17.000.000đ</p>
       


        </div>
        <div className="col-12 col-sm-6 col-md-4  image">
          <img src="https://hc.com.vn/i/ecommerce/media/GS.009282_FEATURE_102855.jpg" />
          <p className="lap">LAPTOP HP</p>
          <p className="price">Giá:17.000.000đ</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4  image">
          <img src="https://hc.com.vn/i/ecommerce/media/GS.009282_FEATURE_102855.jpg" />
          <p className="lap">LAPTOP HP</p>
          <p className="price">Giá:17.000.000đ</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4  image">
          <img src="https://hc.com.vn/i/ecommerce/media/GS.009282_FEATURE_102855.jpg" />
          <p className="lap">LAPTOP HP</p>
          <p className="price">Giá:17.000.000đ</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4  image">
          <img src="https://hc.com.vn/i/ecommerce/media/GS.009282_FEATURE_102855.jpg" />
          <p className="lap">LAPTOP HP</p>
          <p className="price">Giá:17.000.000đ</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4  image">
          <img src="https://hc.com.vn/i/ecommerce/media/GS.009282_FEATURE_102855.jpg" />
          <p className="lap">LAPTOP HP</p>
          <p className="price">Giá:17.000.000đ</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4  image">
          <img src="https://hc.com.vn/i/ecommerce/media/GS.009282_FEATURE_102855.jpg" />
          <p className="lap">LAPTOP HP</p>
          <p className="price">Giá:17.000.000đ</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4  image">
          <img src="https://hc.com.vn/i/ecommerce/media/GS.009282_FEATURE_102855.jpg" />
          <p className="lap">LAPTOP HP</p>
          <p className="price">Giá:17.000.000đ</p>
        </div>
          <Footer/>
      </div>
    </div>

    </div>
  )
}
