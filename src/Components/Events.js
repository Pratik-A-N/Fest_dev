import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import {useGoogleLogin} from '@react-oauth/google';


// images
import manual from '../Assets/Images/Event/manual.jpeg'
import block from '../Assets/Images/Event/block.jpeg'
import cyber from '../Assets/Images/Event/cyber.jpeg'
import leader from '../Assets/Images/Event/leadership.png'
import cpr from '../Assets/Images/Event/cpr.jpeg'
import sdw from '../Assets/Images/Event/self defense.png'
import eq from '../Assets/Images/Event/eq.png'
import Ticket from './Ticket';
import InstagramEmbed from 'react-instagram-embed';

const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"
// const API_URL1 = "https://cr.abhyudayiitb.org/festapi/Event"
const API_URL2 = "https://cr.abhyudayiitb.org/festapi/Event_reg"

export default function Events() {
  const {state} = useLocation();
  const [data, setdata] = useState(state.data)
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
        console.log(res.data);
        const guser={
          name:res.data.name,
          email:res.data.email
        }
        // document.getElementById('login').innerHTML = "Logged In"
  
        axios.post(API_URL, guser)
      .then(res => {  
        if(res.data["status"] === 200){
            setdata(res.data)
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
    if(Object.keys(data).length !==0){
        document.getElementById('login').innerHTML = "Logged In"
    }else{
      document.getElementById('login').innerHTML = "Log In"
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
        <div className="event-nav">
        {/* <div className='regbt'><a href="#ws">Workshops</a></div>
          <a href="/"><div className='regbt'>Talks</div></a> */}

          <div>
            {(()=>{
                if(Object.keys(data).length !==0){
                  return <div className='cen' id='ticket'>
                    <button onClick={(e)=> handleTicket(e)} className='regbt' >Ticket</button>
                    
                    </div>
                }
                })()
            }

          </div>
        </div>
        <div className="display-ticket">
          {display ? <Ticket data={data} /> : <div></div>} 
        </div>
        <div className='pt-5'>
        
          <div className="row padd ">
          <div className="event-name" id="ws">Speaker Sessions</div>
            
            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={manual} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Eradicating Manual Scavenging
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='regbt mb-3' data-bs-toggle="modal" data-bs-target="#manualmodal">
                About Event
              </button>
              <div>
                {(()=>{
                        if(state !=null && data.manual === true){
                          return <div>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("manual")} id="manual" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={block} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Blockchain meets Sustainability
                </div>
              </div>
              <div className="regbt">
                {(()=>{
                        if(state !=null && data.block === true){
                          return <div>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("block")} id="block" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
            </div>

            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={cyber} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Cyber Security 101
                </div>
              </div>
              <div className="regbt">
                {(()=>{
                        if(state !=null && data.cyber === true){
                          return <div>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("cyber")} id="cyber" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
            </div>
            
            

          </div>

          <div className="row padd" >
          <div className="event-name" id="ws">Workshops</div>
          <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={leader} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  EI-Excellence Program
                </div>
              </div>
              <div className="regbt">
                {(()=>{
                        if(state !=null && data.leader === true){
                          return <div>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("leader")} id="leader" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
            </div>

            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={cpr} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  CPR Workshop
                </div>
              </div>
              <div className="regbt">
                {(()=>{
                        if(state !=null && data.cpr === true){
                          return <div>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("cpr")} id="cpr" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
            </div>

            <div className="col-lg-6 cen mb-5mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={sdw} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                 Self Defence Workshop
                </div>
              </div>
              <div className="regbt">
                {(()=>{
                        if(state !=null && data.sdw === true){
                          return <div>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("sdw")} id="sdw" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
            </div>

            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={eq} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                 Improv Your EQ!
                </div>
              </div>
              <div className="regbt">
                {(()=>{
                        if(state !=null && data.eq === true){
                          return <div>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("eq")} id="eq" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
            </div>



          </div>

        </div>
        
{/* models  */}


<div class="modal fade" id="manualmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={manual} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
                  Eradicating Manual Scavenging
                </div>
          Manual Scavenging, the practice of employing human labor for cleaning sewers and septic tanks is still very prevalent in India. Such acts of sanitation and cleaning are considered lowly and are assigned to people from the lowest rung of the social hierarchy.

Join Bezwada Wilson, who for most of his adult life has fought an extraordinary and inspiring battle against manual scavenging that humiliates and diminishes not just the scavengers but us all. The campaign he leads, the Safai Karmachari Andolan, is one of the largest movements against caste discrimination in post-Independence India.

Register now. Link in bio.

Also witness the photo exhibition by photo Journalist Sudharak Olwe and see the expression of activism through his art.</div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
