import React from 'react'
import { Link } from 'react-router-dom'

// import logo from "../Assets/images/Logo/logo2.png"

const logo = "https://raw.githubusercontent.com/Pratik-A-N/developYdp/master/src/Assets/images/Logo/logo2.png"
// import Google from './Google'

export default function Navbar() {
  return (
    <div className="row z" id='zo'>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
              <a className="navbar-brand" href="https://abhyudayiitb.org" target="/"> <img src={logo} alt="" className='aplo' /> </a>
              <button className="navbar-toggler" style={{background: "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 customIndent" >
                  <li className="nav-item tabs">
                    <Link className="nav-link navCustomDesign" to="/" >Home</Link>
                  </li>
                  <li className="nav-item tabs">
                    <Link className="nav-link navCustomDesign" to="/events" >Events</Link>
                  </li>
                  {/* <li className="nav-item tabs">
                    <a className="nav-link navCustomDesign" href="#incen" >Map</a>
                  </li>
                  <li className="nav-item tabs">
                    <Link className="nav-link navCustomDesign" to="/sponsors" >Sponsors</Link>
                  </li> */}
                  <li className="nav-item tabs">
                    <Link className="nav-link navCustomDesign" to="/ticket" >Ticket</Link>
                  </li>
                  <li className="nav-item tabs">
                    <Link className="nav-link navCustomDesign" to="/contact" >Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

    </div>
  )
}