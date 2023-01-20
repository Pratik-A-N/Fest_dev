import React from 'react'


import axios from 'axios';

import logo2 from '../Assets/Images/logo2.png'
import bg from '../Assets/Images/bg.jpeg'
import { Link } from 'react-router-dom';




export default function Animate() {
  return (
    <div className='animation '>
      <img src={bg} alt="" id='bg' />
          <div className="cen" id='convo'>
            <Link to="/convoreg">
            <button className='regbt' >Convo Pass !</button>
            </Link>
          </div>
      <div className="layer1 cen">
          <div className="socialfest blur">
            <div className='sf-wrap'><img src={logo2} id='logo2' alt="" /></div>
          </div>
        
      </div>
    </div>
  )
}
