import React from 'react'
import Navbar from './Navbar'
import logo from '../Assets/Images/logo2.png'

export default function Contact() {

  const displayCompi =(e)=>{
    document.getElementById('compi').style.display ="flex"
    document.getElementById('camp').style.display ="none"
    document.getElementById('event').style.display ="none"
    document.getElementById('marki').style.display ="none"
    document.getElementById('pr').style.display ="none"
    document.getElementById('oc').style.display ="none"
    document.getElementById('ops').style.display ="none"
    document.getElementById('web').style.display ="none"
    document.getElementById('logo-cover').style.display = "none"
  }
  const displayCamp =()=>{
    document.getElementById('compi').style.display ="none"
    document.getElementById('camp').style.display ="flex"
    document.getElementById('event').style.display ="none"
    document.getElementById('marki').style.display ="none"
    document.getElementById('pr').style.display ="none"
    document.getElementById('oc').style.display ="none"
    document.getElementById('ops').style.display ="none"
    document.getElementById('web').style.display ="none"
    document.getElementById('logo-cover').style.display = "none"

  }
  const displayEvent =()=>{
    document.getElementById('compi').style.display ="none"
    document.getElementById('camp').style.display ="none"
    document.getElementById('event').style.display ="flex"
    document.getElementById('marki').style.display ="none"
    document.getElementById('pr').style.display ="none"
    document.getElementById('oc').style.display ="none"
    document.getElementById('ops').style.display ="none"
    document.getElementById('web').style.display ="none"
    document.getElementById('logo-cover').style.display = "none"

  }
  const displayMarki =()=>{
    document.getElementById('compi').style.display ="none"
    document.getElementById('camp').style.display ="none"
    document.getElementById('event').style.display ="none"
    document.getElementById('marki').style.display ="flex"
    document.getElementById('pr').style.display ="none"
    document.getElementById('oc').style.display ="none"
    document.getElementById('ops').style.display ="none"
    document.getElementById('web').style.display ="none"
    document.getElementById('logo-cover').style.display = "none"

  }
  const displayPr =()=>{
    document.getElementById('compi').style.display ="none"
    document.getElementById('camp').style.display ="none"
    document.getElementById('event').style.display ="none"
    document.getElementById('marki').style.display ="none"
    document.getElementById('pr').style.display ="flex"
    document.getElementById('oc').style.display ="none"
    document.getElementById('ops').style.display ="none"
    document.getElementById('web').style.display ="none"
    document.getElementById('logo-cover').style.display = "none"

  }
  const displayOc =()=>{
    document.getElementById('compi').style.display ="none"
    document.getElementById('camp').style.display ="none"
    document.getElementById('event').style.display ="none"
    document.getElementById('marki').style.display ="none"
    document.getElementById('pr').style.display ="none"
    document.getElementById('oc').style.display ="flex"
    document.getElementById('ops').style.display ="none"
    document.getElementById('web').style.display ="none"
    document.getElementById('logo-cover').style.display = "none"

  }
  const displayOps =()=>{
    document.getElementById('compi').style.display ="none"
    document.getElementById('camp').style.display ="none"
    document.getElementById('event').style.display ="none"
    document.getElementById('marki').style.display ="none"
    document.getElementById('pr').style.display ="none"
    document.getElementById('oc').style.display ="none"
    document.getElementById('ops').style.display ="flex"
    document.getElementById('web').style.display ="none"
    document.getElementById('logo-cover').style.display = "none"

  }
  const displayWeb =()=>{
    document.getElementById('compi').style.display ="none"
    document.getElementById('camp').style.display ="none"
    document.getElementById('event').style.display ="none"
    document.getElementById('marki').style.display ="none"
    document.getElementById('pr').style.display ="none"
    document.getElementById('oc').style.display ="none"
    document.getElementById('ops').style.display ="none"
    document.getElementById('web').style.display ="flex"
    document.getElementById('logo-cover').style.display = "none"

  }

  return (
    <div>
      <div className="newContainer">
        {/* <Navbar/> */}
        {/* <div className='pt-5'>
          <div className="Deartment cen">Overall Coordinators</div>
          <div className="row display-flex justify-content-center">
            <div className="col-lg-3 cen bx">
              <div className="names">Samyak Jain</div>
              <div className="names">+91 9022771571</div>
            </div>
            <div className="col-lg-3 cen bx">
              <div className="names">Anusar Modi</div>
              <div className="names">+91 7742271457</div>
            </div>
          </div>

          <div className="Deartment cen ">Campaigns Managers</div>
          <div className="row display-flex justify-content-center">
            <div className="col-lg-3 cen bx">
              <div className="names">Sharwari Medhe</div>
              <div className="names">+91 9130085868</div>
            </div>
            <div className="col-lg-3 cen bx">
              <div className="names">Vijan Soni</div>
              <div className="names">+91 9413423509</div>
            </div>
          </div>

          <div className="Deartment cen ">Competitions Managers</div>
          <div className="row display-flex justify-content-center">
            <div className="col-lg-3 cen bx">
              <div className="names">Yash Saraogi</div>
              <div className="names">+91 8602861690</div>
            </div>
            <div className="col-lg-3 cen bx">
              <div className="names">Chirag S</div>
              <div className="names">+91 8073082919</div>
            </div>
            <div className="col-lg-3 cen bx">
              <div className="names">Achira Jain</div>
              <div className="names">+91 7023324101</div>
            </div>
          </div>

          <div className="Deartment cen ">Events & Fellowships Managers</div>
          <div className="row display-flex justify-content-center">
            <div className="col-lg-3 cen bx">
              <div className="names">Kavyan Lavti</div>
              <div className="names">+91 8107043773</div>
            </div>
            <div className="col-lg-3 cen bx">
              <div className="names">Satyan Reddy</div>
              <div className="names">+91 9704384433</div>
            </div>
          </div>

          <div className="Deartment cen ">Marketing Managers</div>
          <div className="row display-flex justify-content-center">
            <div className="col-lg-3 cen bx">
              <div className="names">Jinay Nandu</div>
              <div className="names">+91 8169022727</div>
            </div>
            <div className="col-lg-3 cen bx">
              <div className="names">Sujas Jain</div>
              <div className="names">+91 6375140010</div>
            </div>
          </div>

          <div className="Deartment cen">Media & Public Relations Managers</div>
          <div className="row display-flex justify-content-center">
            <div className="col-lg-3 cen bx">
              <div className="names">Ashutosh Khandare</div>
              <div className="names">+91 9579441875</div>
            </div>
            <div className="col-lg-3 cen bx">
              <div className="names">Tharani Ponnada</div>
              <div className="names">+91 9346119502</div>
            </div>
          </div>

          <div className="Deartment cen ">Operations Managers</div>
          <div className="row display-flex justify-content-center">
            <div className="col-lg-3 cen bx">
              <div className="names">Shubham Sharma</div>
              <div className="names">+91 9549829759</div>
            </div>
            <div className="col-lg-3 cen bx">
              <div className="names">Anukul Motghare</div>
              <div className="names">+91 7410715793</div>
            </div>
          </div>

          <div className="Deartment cen ">Creatives Manager</div>
          <div className="row display-flex justify-content-center">
            <div className="col-lg-3 cen bx">
              <div className="names">Bhuvana</div>
              <div className="names">+91 9063434206</div>
            </div>
          </div>

          <div className="Deartment cen ">Web Manager</div>
          <div className="row display-flex justify-content-center">
            <div className="col-lg-3 cen bx">
              <div className="names">Pratik Nimje</div>
              <div className="names">+91 8412064366</div>
            </div>
          </div>

        </div>*/}
        <div className="row display-flex justify-content-center df">
          <div style={{zIndex:"2"}}>
            <button class="circle deg-0" onClick={displayCompi} >
              Competitions
            </button> 
            <button class="circle deg-45" onClick={displayEvent}>
              Events And Fellowships

            </button> 
            <button class="circle deg-90" onClick={displayMarki}>
              Marketing

            </button> 
            <button class="circle deg-135" onClick={displayPr}>
              Media & PR

            </button> 
            <button class="circle deg-180" onClick={displayOps}>
              Operations 

            </button> 
            <button class="circle deg-225" onClick={displayWeb}>
              Creatives & Web 

            </button> 
            <button class="circle deg-270" onClick={displayOc}>
              Overall Coordinators
            </button> 
            <button class="circle deg-315" onClick={displayCamp}>
              Campaigns
            </button> 
          </div>
          <div className="outer-ring"></div>
          <div className="inner-cube">
            <div className="logo-cover "><img src={logo} alt="" id='logo-cover' /></div>
            <div className='cover' id="oc">
            <div className="row display-flex justify-content-center">
              <div className="cen">
                <div className="names">Samyak Jain</div>
                <div className="names">+91 9022771571</div>
              </div>
              <div className="cen">
                <div className="names">Anusar Modi</div>
                <div className="names">+91 7742271457</div>
              </div>
            </div>
            </div>
            <div className='cover' id="camp">
              <div className="row display-flex justify-content-center">
                <div className="cen">
                  <div className="names">Sharwari Medhe</div>
                  <div className="names">+91 9130085868</div>
                </div>
                <div className="cen">
                  <div className="names">Vijan Soni</div>
                  <div className="names">+91 9413423509</div>
                </div>
              </div>
              
            </div>
            <div className='cover' id="compi">
              <div className="row display-flex justify-content-center">
                <div className="cen ">
                  <div className="names">Yash Saraogi</div>
                  <div className="names">+91 8602861690</div>
                </div>
                <div className="cen ">
                  <div className="names">Chirag S</div>
                  <div className="names">+91 8073082919</div>
                </div>
                <div className="cen">
                  <div className="names">Achira Jain</div>
                  <div className="names">+91 7023324101</div>
                </div>
              </div>
            </div>
            <div className='cover' id="event">
              <div className="row display-flex justify-content-center">
                <div className=" cen ">
                  <div className="names">Kavyan Lavti</div>
                  <div className="names">+91 8107043773</div>
                </div>
                <div className=" cen ">
                  <div className="names">Satyan Reddy</div>
                  <div className="names">+91 9704384433</div>
                </div>
              </div>
            </div>
            <div className='cover' id="marki">
              <div className="row display-flex justify-content-center">
                <div className=" cen ">
                <div className="names">Jinay Nandu</div>
              <div className="names">+91 8169022727</div>
                </div>
                <div className=" cen ">
                  <div className="names">Sujas Jain</div>
                  <div className="names">+91 6375140010</div>
                </div>
              </div>
            </div>
            <div className='cover' id="pr">
              <div className="row display-flex justify-content-center">
                <div className=" cen ">
                  <div className="names">Ashutosh Khandare</div>
                  <div className="names">+91 9579441875</div>
                </div>
                <div className=" cen ">
                  <div className="names">Tharani Ponnada</div>
                  <div className="names">+91 9346119502</div>
                </div>
              </div>
            </div>
            <div className='cover' id="ops">
              <div className="row display-flex justify-content-center">
                <div className=" cen ">
                  <div className="names">Shubham Sharma</div>
                  <div className="names">+91 9549829759</div>
                </div>
                <div className=" cen ">
                  <div className="names">Anukul Motghare</div>
                  <div className="names">+91 7410715793</div>
                </div>
              </div>
            </div>
            <div className='cover' id="web">
              <div className="row display-flex justify-content-center">
                <div className=" cen ">
                  <div className="names">Bhuvana</div>
                  <div className="names">+91 9063434206</div>
                </div>
                <div className=" cen ">
                  <div className="names">Pratik Nimje</div>
                  <div className="names">+91 8412064366</div>
                </div>
              </div>
            </div>
          </div>           
        </div>
      </div> 
    </div>
  )
}
