import React from 'react'
import jwt_decode from "jwt-decode";
import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
const google = window.google;

const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"
const API_URL1 = "https://cr.abhyudayiitb.org/festapi/Event"
const API_URL2 = "https://cr.abhyudayiitb.org/festapi/Event_reg"

export default function Events() {
  const { state } = useLocation();
  const [lineup, setlineup] = useState({})
  const navigate = useNavigate();
  function handleCallbackResponse(response){
    // console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    const guser ={
      name : userObject.name,
      email : userObject.email,
    }
    axios.post(API_URL, guser)
    .then(res => {  
      if(res.data["status"] === 200){
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
  }

  useEffect(() => {
    axios.get(API_URL1)
    .then(data=> {
      setlineup(data.data)
    })
    .catch(error => console.log(error))

    google.accounts.id.initialize({
      client_id : "161055812663-vs09cgjl4lujuuv6vi1km7hhcnqro91v.apps.googleusercontent.com",
      callback : handleCallbackResponse
    })
  }, []);

  const menu = lineup

  const handlereg = (e) =>{
    if(state === null) {
      google.accounts.id.prompt();
    }
    else{
      
      const user={
        email : state.data["email"],
        tag : e,
      }
      axios.post(API_URL2,user)
      .then(res =>{
        if(res["status"]===201){
          
          document.getElementById(e).innerHTML ="Registered"
          document.getElementById(e).disabled = true;
        }
      })
      .catch(error => console.log(error))
    } 
  }

  const handleTicket =()=>{
    navigate("/ticket",{
      state:{
        data: state.data
      }
    })
  }
  

  return (
    <div className="newContainer">
        <Navbar/>
        <div className="up">
        {(()=>{
            if(state !=null){
               return <div><button onClick={(e)=> handleTicket(e)}>Ticket</button></div>
            }
            })()
        }
          <div className="row">
          {
            Array.from(menu).map(item =>{
              return <div className='col-md-4 cen mt-5 mb-5' key={item.pk}>
                        <div className="img">
                          <img src={item.imgurl} alt="" className='eventimg' />
                        </div>
                        <div className="etitle">
                          {item.name}
                        </div>
                        <div className="regbt">
                          {(()=>{
                            if(state !=null && state.data[item.tag] === true){
                              return <div>Registered</div>
                            }else{
                              return <button type='button' onClick={(e)=> handlereg(item.tag)} id={item.tag} >Register</button>
                            }
                          })()
                          }
                        </div>
                    </div>
            })
          }
          </div>
        </div>
        
    </div>
  )
}
