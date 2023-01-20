import React from 'react'

// import Google from './Google'
import Navbar from './Navbar'
import bg from '../Assets/Images/bg.jpeg'
// import TestGoogle from './TestGoogle'
import About from './About'
import down from '../Assets/Images/dow.png'
import sociologo from '../Assets/Images/logo2.png'

export default function Home() {
  return (
    <div className="fluid-container">
      <img src={bg} alt="" id='bg' />
      {/* <Navbar/> */}
      {/* <Google/> */}
      <a className='scrollbt' href='#about'>
        <img src={down} alt="" id='down'/>
      </a>
      <div className="row display-flex justify-content-center social-logo">
        <div className="col-6 center">
          <div className="blur">
            <img src={sociologo} alt="" id='sociologo' />
            {/* <TestGoogle/>  */}
          </div>
        </div>
      </div>
      <About/>
      
    </div>
  )
}
