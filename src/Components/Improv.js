import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import {useGoogleLogin} from '@react-oauth/google';



import eq from '../Assets/Images/Event/eq.jpeg'

import about from '../Assets/Images/about.png'

const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"
// const API_URL1 = "https://cr.abhyudayiitb.org/festapi/Event"
const API_URL2 = "https://cr.abhyudayiitb.org/festapi/Event_reg"

export default function Improv() {
  const {state} = useLocation();
  // console.log(state.data);
  
  const [data, setdata] = useState({})
  
  // console.log(data);
  // const [lineup, setlineup] = useState({})
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
        // document.getElementById('login').innerHTML = "Logged In"
  
        axios.post(API_URL, guser)
      .then(res => {  
        if(res.data["status"] === 200){
          // setdata(res.data)
          navigate("/improv",{
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

  // console.log(data);

  useEffect(() => {
    if(state !== null){
      setdata(state.data)

    }
    if(Object.keys(data).length !==0){
        document.getElementById('login-m').innerHTML = "Logged In"
        document.getElementById('login-d').innerHTML = "Logged In"

    }else{
      document.getElementById('login-m').innerHTML = "Log In"
      document.getElementById('login-d').innerHTML = "Log In"

    }
  }, )
  

  // const menu = lineup

  const handlereg = (e) =>{
    // console.log(e);
    // state.data[e] = true
    // console.log(state.data[e]);
    
    if(Object.keys(data).length ===0) {
      login()
    }
    else{
      const user={
      email : data.email,
      tag : e,
    }
    axios.post(API_URL2,user)
      .then(res =>{
        if(res["status"]===201){
          // console.log("success");
          document.getElementById(e).innerHTML ="Registered"
        }
      })
      .catch(error => console.log(error))
    } 
  }
  const [display, setdisplay] = useState(false)
  const handleTicket =()=>{
    document.getElementById('ticket').style.display = "none"
    setdisplay(true)
  }
  

  return (
    <div className="newContainer">
      <div className="up">

      
        <div className="event-nav">
        
        <div className='pt-3'>

            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={eq} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                 Improv Your EQ!
                </div>
              </div>
              <div className="about-event">
              <button type="button" className=' mb-3' data-bs-toggle="modal" data-bs-target="#eqmodal">
                                <img src={about} alt="" id='about-icon' />

              </button>
              <div >
                {(()=>{
                        if(state !=null && data.eq === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("eq")} id="eq" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>



          </div>

        </div>
        
{/* models  */}




<div class="modal fade" id="eqmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={eq} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Improv Your EQ!
                </div>
                Life is a tragedy when seen in close-up, but a comedy when seen in long shot. - Charlie Chaplin

Theories suggest that IQ contributes to 20% of your success, whereas the rest is attributed to EQ. You might not be the smartest in the room, but you sure can be emotionally mature.

We are releasing our first workshop of Social Fest - Improv your EQ! The event will be kickstarted by an improv performance by LIT(Lemon Improv Theatre). Graced by clinical psychologist Pragya Lodha who will be telling us how to improve our emotional health. There will also be informal games to bring out the creativity in you!</div>
      </div>
    </div>
  </div>
</div>




</div>
</div>


  )
}
