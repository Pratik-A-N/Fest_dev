import React, { useState } from 'react'
import {useGoogleLogin} from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import About from './About';
import arrow from '../Assets/Images/down.png'

const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"

export default function Navbar() {
  const openAbout =  ()=>{
    document.getElementById("about-animate").style.width = "100%"
  }

  const closeAbout =()=>{
    document.getElementById("about-animate").style.width = "0"
  }

  const showNav =()=>{
    // console.log("clicked");
    var show = document.getElementById('tpm')
    if(show.style.display === 'none'){
      document.getElementById('tpm').style.display = 'flex'
    }else{
      document.getElementById('tpm').style.display = 'none'
    }
  }

  const showDownNav =()=>{
    // console.log("clicked");
    var show = document.getElementById('tpm1')
    if(show.style.display === 'none'){
      document.getElementById('tpm1').style.display = 'flex'
    }else{
      document.getElementById('tpm1').style.display = 'none'
    }
  }

  const [Data, setData] = useState({})
  const [isLogin, setisLogin] = useState(false)

  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async respose => {
      try{
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
          headers:{
            "Authorization":`Bearer ${respose.access_token}`
          }
        })
        // console.log(res.data);
        const guser={
          name:res.data.name,
          email:res.data.email
        }
        setisLogin(true)
        axios.post(API_URL, guser)
      .then(res => {  
        if(res.data["status"] === 200){
            setData(res.data)
            navigate("/events",{
              state:{
                data:res.data
              }
            })
        }else{
            navigate("/register",{
              state:{
                data:guser
              }
            })
          }
        })
        .catch(err => console.log(err));
      }catch(err){
        console.log(err);
      }
    }
  });
  // console.log(Data);
  return (
    <>
    {/* <div className="outernav"> */}
    <div id="about-animate" className='overlay'>
      <button onClick={closeAbout} id='close-abt'> &times; </button>
      <About/>
    </div>

    
      
      <div className="left-nav" id='mobile-nav'>
        <div className="window" id='event-window'>
          <button className="book" onClick={login} id="login-m">
            {isLogin ? <span>Logged In</span> : <span>Log In</span>}
          </button>
        </div>
        <div>
          <button onClick={showNav} >
            <img src={arrow} alt="" id='down-icon' />
          </button>
        </div>
      </div>
          
          <div class="tpm" id="tpm">
          <div className="window" id='work-window'>
          <button className="book" onClick={openAbout}>
          About Us
          </button>
          </div>
          <div className="window" id='contact-window'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnFsX7uXTU3XE00yFbZGttRJLe_vRBseQ9ebezj5gntaFJJg/viewform">
          <button className="book" >
          Accommodation
              </button>
          </a>
        </div>
          </div>

      <div className="left-nav" id='desktop-nav'>
        <div className="window" id='event-window'>
          <button className="book" onClick={login} id="login-d">
            {isLogin ? <span>Logged In</span> : <span>Log In</span>}
          </button>
        </div>
        <div className="window" id='work-window'>
          <button className="book" onClick={openAbout}>
            About Us
          </button>
        </div>
        <div className="window" id='contact-window'>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnFsX7uXTU3XE00yFbZGttRJLe_vRBseQ9ebezj5gntaFJJg/viewform">
          <button className="book" >
          Accommodation
              </button>
          </a>
        </div>
      </div>

      <div className="right-nav" id='desktop-nav'>
        <div className="window" id='event-window'>
          <Link  to="/events" state={{data:Data}} >
            <div className="upper-lid" id='lid1'></div>
              <button className="book" >
                Events
              </button>
          </Link>
        </div>
        <div className="window" id='work-window'>
        <Link to="/sponsor">
                <button className="book" >
                  Sponsors
                </button>
              </Link>
        </div>
        <div className="window" id='contact-window'>
        <Link to="/contact">
                <button className="book" >
                  Contact
                </button>
              </Link>
        </div>
        
      </div> 

      <div className="right-nav" id='mobile-down-nav'>
        <div className="window" id='event-window'>
          <Link  to="/events" state={{data:Data}} >
            <div className="upper-lid" id='lid1'></div>
              <button className="book" >
                Events
              </button>
          </Link>
        </div>
        <div>
          <button onClick={showDownNav} >
            <img src={arrow} alt="" id='up-icon' />
          </button>
        </div>
        {/*  */}
        
      </div> 
      <div class="tpm" id="tpm1">
          <div className="window" id='work-window'>
        <Link to="/sponsor">
                <button className="book" >
                  Sponsors
                </button>
              </Link>
        </div>
        <div className="window" id='contact-window'>
        <Link to="/contact">
                <button className="book" >
                  Contact
                </button>
              </Link>
        </div>
          </div>

      
    {/* </div> */}
      
    </>
  )
}