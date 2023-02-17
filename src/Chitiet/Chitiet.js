import React, { Component } from 'react'
import dell1 from "../img/dell1.jpg"
import "./Chitiet.css"
import {Link} from "react-router-dom"
import {FaCheck} from "react-icons/fa"
import Footer from '../Footer'
export default class Chitiet extends Component {
  render() {
    return (
      <div className='chitiet'>
        
       
       <img src={dell1}/>
       <div className='chitietsp'>
        <div className='vp'>

        <Link to ="/LaptopDell">Sản phẩm/LapTop Văn Phòng</Link>
        </div>
        <h1>LAPTOPDELL-Laptop Mỏng Nhẹ Siêu Hot</h1>
        <p className='price'>19.000.000 đ</p>
        <p className='hh'>Hoa hậu” nhà Retro tham gia giải đấu quốc tế và hoàn tất xuất sắc vòng thi vấn đáp. Trước sức ép của câu hỏi: làm sao để trở thành một chiếc laptop mỏng nhẹ nhưng vẫn đủ chức năng chạy một số tác vụ nặng.Laptop Lenovo cũ T460s đã có màn trả lời đầy thuyết phục: đến Retro và gom giá tốt!</p>
        <ul className='info'>
            <li>CPU: Intel® Core™ i5-6300U Processor 2.4 Ghz up 3.0 Ghz, 3MB Cache</li>
            <li>RAM: 8GB DDR4 2133Mhz</li>
            <li>SSD: 256GB M.2 SSD</li>
            <li>Màn hình: 14 inch FHD (1920 x 1080 pixels), IPS Anti-Glare WLED</li>
            <li>Card đồ họa: Share Intel HD Graphics 520</li>

        </ul>
        <div className='check'>
            <div className='fa'>
                <p><FaCheck/></p>
                <p><FaCheck/></p>
                <p><FaCheck/></p>
                <p><FaCheck/></p>
            </div>
            <div className='sp'>

          <p>Hoàn tiền 100% trong vòng 7 ngày nếu máy lỗi</p>
          <p>Bảo hành 3 tháng toàn bộ máy</p>
          <p>Hỗ trợ TRẢ GÓP 0% qua thẻ tín dụng</p>
          <p>Tặng kèm Chuột không dây + Túi chống shock</p>
            </div>
        </div>
        

   
       </div>
    


      </div>
      
    )
  }
}
