import React from 'react'
import {FaCheck} from "react-icons/fa"
import {FaMap,FaEnvelopeOpen,FaPhone} from "react-icons/fa"

export default function Footer() {
  return (
    <div>
        <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            {/* <span>Get connected with us on social networks:</span> */}
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="me-4 text-reset">
              {/* <i className="fab fa-facebook-f" /> */}
            </a>
            <a href className="me-4 text-reset">
              {/* <i className="fab fa-twitter" /> */}
            </a>
            <a href className="me-4 text-reset">
              {/* <i className="fab fa-google" /> */}
            </a>
            <a href className="me-4 text-reset">
              {/* <i className="fab fa-instagram" /> */}
            </a>
            <a href className="me-4 text-reset">
              {/* <i className="fab fa-linkedin" /> */}
            </a>
            <a href className="me-4 text-reset">
              {/* <i className="fab fa-github" /> */}
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />ANH VŨ COMPUTER
                </h6>
                <p>Chuyên mua bán các loại LapTop từ giá rẻ đến cao cấp phù hợp với mọi lứa tuổi</p>

                
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Về LAPTOP ANH VŨ
                </h6>
                <p>
                  <a href="#!" className="text-reset">Giới thiệu</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Sản phẩm </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Chính sách</a>
                </p>
                {/* <p>
                  <a href="#!" className="text-reset">Laravel</a>
                </p> */}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Dịch Vụ LapTop
                </h6>
                <p>
                  <a href="#!" className="text-reset">Nâng Cấp LapTop</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Vệ Sinh LapTop</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Sửa Chữ LapTop</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Hỗ Trợ Phần Mềm</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Liên Hệ</h6>
               <p><i className="" /><FaMap/> 6 Đào Duy Anh,p9,Quận Phú Nhuận,TPHCM</p>
                <p>
                  <i className="" />
                  <FaEnvelopeOpen/> AnhVu93@gmail.com
                </p>
                <p><i className="" /> <FaPhone/> + 01 234 567 88(Call/Zalo</p>
                {/*      */}
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">AnhVuComputer.com</a>
        </div>  
        {/* Copyright */}
      </footer>
    </div>
  )
}
