import React from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'
import Footer from '../Footer'

export default function Products() {
  return (
    <div className='products'>
        <button>ALL</button>
        <Link to="/laptopdell">
        <button>LAPTOP VĂN PHÒNG </button>
        </Link>
        <Link to="/Gaming">
        <button>LAPTOP GAMING</button>
        </Link>
        
       
        

    </div>
  )
}
