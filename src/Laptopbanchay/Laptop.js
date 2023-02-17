import React, { Component } from 'react'
import "./Laptop.css"
import dell1 from "../img/dell1.jpg";
import Carousel from 'react-elastic-carousel'
import Footer from '../Footer';
import Item from '../Laptopbanchay/Item'
export default class Laptop extends Component {
  render() {
    const Breakpoint =[
        {width:1,itemstoShow:1},
        {width:559,itemstoShow:2},
        {width:768,itemstoShow:3},
        {width:1200,itemstoShow:4},

    ]
    return (
      <div className='spnew'>
        <h1>SẢN PHẨM MỚI</h1>
        <Carousel Breakpoint={Breakpoint}>
            <Item>
              <div className='spnew_'>
                <img src={dell1}/>
              {/* <p>adasddas</p> */}
              <div className='dellsp'>
                <p>LAPTOP DELL 19993</p>
              </div>
              
                
                
              </div>
             
            </Item>
            <Item>TWO</Item>
            <Item>THREE</Item>
            <Item>FOUR</Item>
            <Item>FIVE</Item>
            <Item>SIX</Item>


        </Carousel>
            {/* <Footer/> */}
            {/* <Footer/> */}

       



      </div>
    )
  }
}
