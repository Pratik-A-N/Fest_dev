import React, { useState } from 'react'
import {useGoogleLogin} from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import About from './About';

const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"

export default function Navbar() {
  const openAbout =  ()=>{
    document.getElementById("about-animate").style.width = "100%"
  }

  const closeAbout =()=>{
    document.getElementById("about-animate").style.width = "0"
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
      <div className="left-nav">
        <div className="window" id='event-window'>
          <button className="book" onClick={login} id="login">
            {isLogin ? <span>Logged In</span> : <span>Log In</span>}
          </button>
        </div>
        <div className="window" id='work-window'>
          <button className="book" onClick={openAbout}>
            About Us
          </button>
        </div>
    
      </div>

      <div className="right-nav">
        <div className="window" id='event-window'>
          <Link  to="/events" state={{data:Data}} >
            <div className="upper-lid" id='lid1'></div>
              <button className="book" >
                Events
              </button>
          </Link>
        </div>
        <div className="window" id='work-window'>
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