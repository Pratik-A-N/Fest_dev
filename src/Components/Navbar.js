import React, { useState } from 'react'
import {useGoogleLogin} from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"

export default function Navbar() {
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
      <div className="left-nav">
          <div className="shelf">
            <div className="total-book">
              <div className="upper-lid" id='lid1'></div>
              <Link to="">
                <button className="book" onClick={login} id="login">
                {isLogin ? <span>Logged In</span> : <span>Log In</span>}
                </button>
              </Link>
            </div>
          </div>

          <div className="shelf">
            <div className="total-book">
              <div className="upper-lid" id='lid1'></div>
              <Link to="">
                <button className="book" >
                  About Us
                </button>
              </Link>
            </div>
          </div>
      </div>

      <div className="right-nav">
          <div className="shelf right">
            <div className="total-book right">
              <div className="upper-lid" id='lid1'></div>
              <Link  to="/events" state={{data:Data}} >
                <button className="book" >
                  Events
                </button>
              </Link>
            </div>
          </div>

          <div className="shelf right">
            <div className="total-book ">
              <div className="upper-lid" id='lid1'></div>
              <Link to="">
                <button className="book" >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
      </div> 
    {/* </div> */}
      
    </>
  )
}