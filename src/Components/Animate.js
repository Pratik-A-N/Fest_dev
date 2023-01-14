import React from 'react'
import placeholder from '../Assets/Images/placeholder.png'
import modelbg from '../Assets/Images/pg.png'
import closebt from '../Assets/Images/closebt.png'
import { Link } from 'react-router-dom'
import logo from "../Assets/Images/logo2.png"

// const logo = "https://raw.githubusercontent.com/Pratik-A-N/developYdp/master/src/Assets/images/Logo/logo2.png"

export default function Animate() {
  
  return (

    <div className='animation '>
      {/* <img src={bg} alt="" id='bg' /> */}
      <div id='applogo'><a className="navbar-brand" href="https://abhyudayiitb.org" target="/"> <img src={logo} alt="" className='aplo'  /> </a></div>
      <div className="layer1">
        <div className='map'>
          <button className='mapbt' data-bs-toggle="modal" data-bs-target="#exampleModal"><img src={placeholder} alt="" id='place' /></button>
          <div className='underplace'></div>
        </div>

        <div className='map2'>
          <button className='mapbt' data-bs-toggle="modal" data-bs-target="#exampleModal"><img src={placeholder} alt="" id='place' /></button>
          <div className='underplace'></div>
        </div>

        <div className='map3'>
          <button className='mapbt' data-bs-toggle="modal" data-bs-target="#exampleModal"><img src={placeholder} alt="" id='place' /></button>
          <div className='underplace'></div>
        </div>

        <div className='map4'>
          <button className='mapbt' data-bs-toggle="modal" data-bs-target="#exampleModal"><img src={placeholder} alt="" id='place' /></button>
          <div className='underplace'></div>
        </div>

        <div className="path"></div>

        {/* */}

        {/* */}

        <div className="outer-track">
          <div className="date"><div className="inner-wrapper">21-22nd January</div> </div>
          <div className="socialfest">
            <div className='sf-wrap'>Social Fest</div>
          </div>
          <div className="theme"><div className="inner-wrap">Locus of Resilience</div></div>
        </div>
        <div className="path1"></div>
        
      </div>
      {/* model 1 */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md">
          <div class="modal-content pg">
            {/* <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            </div> */}
            <button type="button" class="closebt" data-bs-dismiss="modal" aria-label="Close"><img src={closebt} alt="" id='closebt' /></button>
            <div class="modal-body">
              <img src={modelbg} alt="" id='modlepg' />
              <div className="customContent">
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}
