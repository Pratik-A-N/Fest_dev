import React from 'react'
import placeholder from '../Assets/Images/placeholder.png'
import modelbg from '../Assets/Images/pg.png'
import closebt from '../Assets/Images/closebt.png'
// import { Link } from 'react-router-dom'
import logo from "../Assets/Images/logo2.png"
import logo2 from '../Assets/Images/final.svg'
import bg from '../Assets/Images/bg.jpeg'


// const logo = "https://raw.githubusercontent.com/Pratik-A-N/developYdp/master/src/Assets/images/Logo/logo2.png"

export default function Animate() {
  
  return (

    <div className='animation '>
      <img src={bg} alt="" id='bg' />
    
      <div className="layer1 cen">
        
          <div className="socialfest blur">
            <div className='sf-wrap'><img src={logo2} id='logo2' alt="" /></div>
          </div>
        
      </div>
    </div>
  )
}
