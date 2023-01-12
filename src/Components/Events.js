import React from 'react'
// import jwt_decode from "jwt-decode";
import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import axios from "axios";
import { useLocation } from 'react-router-dom';
import TestGoogle from './TestGoogle';
const google = window.google;

// const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"
const API_URL1 = "https://cr.abhyudayiitb.org/festapi/Event"
const API_URL2 = "https://cr.abhyudayiitb.org/festapi/Event_reg"

export default function Events() {
  const { state } = useLocation();
  const [lineup, setlineup] = useState({})
  // const navigate = useNavigate();


  useEffect(() => {
    axios.get(API_URL1)
    .then(data=> {
      setlineup(data.data)
    })
    .catch(error => console.log(error))

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

  // const handleTicket =()=>{
  //   navigate("/ticket",{
  //     state:{
  //       data: state.data
  //     }
  //   })
  // }
  

  return (
    <div className="newContainer">
        <TestGoogle/>
        <Navbar/>
        <div className="up">
        {/* {(()=>{
            if(state !=null){
               return <div className='cen'>
                

                <button onClick={(e)=> handleTicket(e)} className='regbt' >Ticket</button>
                
                </div>
            }
            })()
        } */}
          <div className="row">
          {
            Array.from(menu).map(item =>{
              return <div className='col-lg-4 cen mt-5 mb-5 ' key={item.pk}>
                        <div className="outer-box cen">
                          <div className="img">
                            <img src={item.imgurl} alt="" className='eventimg' />
                          </div>
                          <div className="etitle">
                            {item.name}
                          </div>
                        </div>
                        
                        <div className="regbt">
                          {(()=>{
                            if(state !=null && state.data[item.tag] === true){
                              return <div>Registered</div>
                            }else{
                              return <button type='button' onClick={(e)=> handlereg(item.tag)} id={item.tag} className='regbt'>Register</button>
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
