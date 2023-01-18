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
import eq from '../Assets/Images/Event/eq.jpeg'
import socio from '../Assets/Images/Event/socio tech.png'
import disable from '../Assets/Images/Event/diffable.png'
import check from '../Assets/Images/Event/check.png'
import sam from '../Assets/Images/Event/sam.jpg'
import rap from '../Assets/Images/Event/rap.png'
import women from '../Assets/Images/Event/women.jpg'
import mental from '../Assets/Images/Event/ananyabirla.png'
import media from '../Assets/Images/Event/media.png'
import csrc from '../Assets/Images/Event/csrc.png'
import pehchan from '../Assets/Images/Event/pehchan.jpeg'
import Ticket from './Ticket';
import about from '../Assets/Images/about.png'

const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"
// const API_URL1 = "https://cr.abhyudayiitb.org/festapi/Event"
const API_URL2 = "https://cr.abhyudayiitb.org/festapi/Event_reg"

export default function Events() {
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
        <div className='pt-3'>

{/* Conclave */}
      <div className="row padd ">
          <div className="event-name" id="ws">Conclaves</div>
            
            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={media} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Media Conclave
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#mediamodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                {(()=>{
                        if(state !=null && data.Media === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("Media")} id="Media" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={csrc} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  CSR Conclave
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#csrcmodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                {(()=>{
                        if(state !=null && data.csrc === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("csrc")} id="csrc" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

            
            

          </div>

{/* rap battle */}
        <div className="row padd ">
          <div className="event-name" id="ws">Culturals</div>
            
            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={rap} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Battle of the Bars
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#rapmodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                {(()=>{
                        if(state !=null && data.rap === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("rap")} id="rap" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={pehchan} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Pehchan
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#pehchanmodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                {(()=>{
                        if(state !=null){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={login} className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

            
            

          </div>
          
{/* Discussion */}
        <div className="row padd ">
          <div className="event-name" id="ws">Discussions</div>
            
            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={sam} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Samwaad
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#samwaadmodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1NldZOcliqgQGO5fFTyBXsVC0WHQUAC5vxedTyBOwp8YXHQ/viewform">
                <div className='regbt'>Register</div>
                </a>
              </div>
              </div>
            </div>

            
            

          </div>

{/* health Checkup  */}
        <div className="row padd ">
          <div className="event-name" id="ws">Camps</div>
            
            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={check} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Health Checkup Camp
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#checkmodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                <a href="https://forms.gle/14USFvLCzUh7c6F96">
                <div className='regbt'>Book Slots</div>
                </a>
              </div>
              </div>
            </div>

            {/* <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={block} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Blockchain meets Sustainability
                </div>
              </div>
              <div className="about-event">
              <button type="button" className=' mb-3' data-bs-toggle="modal" data-bs-target="#blockmodal">
              <img src={about} alt="" id='about-icon' />

              </button>
              <div >
                {(()=>{
                        if(state !=null && data.block === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("block")} id="block" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div> */}
            
            

          </div>

          {/* exhi */}
      <div className="row padd ">
          <div className="event-name" id="ws">Exhibitions</div>
            
            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={socio} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Socio Tech Exhibition
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#sociomodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                {(()=>{
                        if(state !=null && data.sociotech === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("sociotech")} id="sociotech" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

            {/* <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={block} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Blockchain meets Sustainability
                </div>
              </div>
              <div className="about-event">
              <button type="button" className=' mb-3' data-bs-toggle="modal" data-bs-target="#blockmodal">
              <img src={about} alt="" id='about-icon' />

              </button>
              <div >
                {(()=>{
                        if(state !=null && data.block === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("block")} id="block" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div> */}
            
            

          </div>


        {/* sessions */}
          <div className="row padd ">
          <div className="event-name" id="ws">Speaker Sessions</div>
          
          <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={mental} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Mental Health Matters
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#mentalmodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                {(()=>{
                        if(state !=null && data.mental === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("mental")} id="mental" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

          <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={women} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Her Health Demystified
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#womenmodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                {(()=>{
                        if(state !=null && data.menstrual === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("menstrual")} id="menstrual" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

          <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={disable} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                  Differently-Abled
                </div>
              </div>
              <div className="about-event">
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#disablemodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                {(()=>{
                        if(state !=null && data.disable === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("disable")} id="disable" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

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
              <button type="button" className='mb-3' data-bs-toggle="modal" data-bs-target="#manualmodal">
                <img src={about} alt="" id='about-icon' />
              </button>
              <div>
                {(()=>{
                        if(state !=null && data.manual === true){
                          return <div className='regbt'>Registered</div>
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
              <div className="about-event">
              <button type="button" className=' mb-3' data-bs-toggle="modal" data-bs-target="#blockmodal">
              <img src={about} alt="" id='about-icon' />

              </button>
              <div >
                {(()=>{
                        if(state !=null && data.block === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("block")} id="block" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
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
              <div className="about-event">
              <button type="button" className=' mb-3' data-bs-toggle="modal" data-bs-target="#cybermodal">
              <img src={about} alt="" id='about-icon' />
                
              </button>
              <div >
                {(()=>{
                        if(state !=null && data.cyber === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("cyber")} id="cyber" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>
            
            

          </div>
{/* workshops */}
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
              <div className="about-event">
              <button type="button" className=' mb-3' data-bs-toggle="modal" data-bs-target="#leadermodal">
                                <img src={about} alt="" id='about-icon' />

              </button>
              <div >
                {(()=>{
                        if(state !=null && data.leader === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("leader")} id="leader" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
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
              <div className="about-event">
              <button type="button" className=' mb-3' data-bs-toggle="modal" data-bs-target="#cprmodal">
                                <img src={about} alt="" id='about-icon' />

              </button>
              <div >
                {(()=>{
                        if(state !=null && data.cpr === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("cpr")} id="cpr" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
              </div>
            </div>

            <div className="col-lg-6 cen mb-5">
              <div className="outer-box cen">
                <div className="img">
                  <img src={sdw} alt="" className='eventimg'  />
                </div>
                <div className="etitle">
                 Self Defence Workshop
                </div>
              </div>
              <div className="about-event">
              <button type="button" className=' mb-3' data-bs-toggle="modal" data-bs-target="#sdwmodal">
                                <img src={about} alt="" id='about-icon' />

              </button>
              <div >
                {(()=>{
                        if(state !=null && data.sdw === true){
                          return <div className='regbt'>Registered</div>
                        }else{
                          return <button type='button' onClick={(e)=> handlereg("sdw")} id="sdw" className='regbt'>Register</button>
                        }
                      })()
                }
              </div>
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


<div class="modal fade" id="manualmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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

Also witness the photo exhibition by photo Journalist Sudharak Olwe and see the expression of activism through his art.</div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="blockmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={block} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Blockchain meets Sustainability
                </div>
                "When decentralized blockchain protocols start displacing the centralized web services that dominate the current Internet, we'll see real internet-based sovereignty. The future Internet will be decentralised."
Join Pratik Gauri, Founder, and CEO of 5ire.org, for a session on how blockchain can drive economic growth with global sustainability during the Annual Social Fest by Abhyuday.

</div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="cybermodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={cyber} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Cyber Security 101
                </div>
                Join Ritesh Bhatia, a renowned cybercrime investigator and cybersecurity expert, for a talk on the latest trends in cybercrimes and how to protect your data and social media privacy during the Annual Social Fest by Abhyuday. With 20 years of experience and four TEDx talks under his belt, you don't want to miss out on this valuable information.</div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="leadermodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={leader} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        EI-Excellence Program
                </div>
                Leadership is the art of getting someone else to do something you want done because he wants to do it. —General Dwight Eisenhower

Abhyuday, IIT Bombay, presents the leadership workshop for the Social Fest, i.e. EI - Excellence Program. A 2-day experiential career development workshop which will help students transform into emotionally intelligent future leaders by focusing on all 5 components of Emotional Intelligence 
• Self-Awareness
• Self-Regulation
• Motivation
• Empathy
• Social Skills</div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="cprmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={cpr} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        CPR Workshop
                </div>
                Abhyuday, in collaboration with Dr LH Hiranandani Hospital, Powai is conducting a CPR workshop as part of our Annual Social Fest. As you may be aware, CPR is an essential skill that can save lives in emergency situations. It is crucial for all of our students to be trained in this life-saving technique so that we are already prepared when time arrives.

The workshop will be led by experienced professionals who will provide hands-on training and demonstrations. You will also have the opportunity to practice CPR techniques on mannequins and receive feedback from the instructors.</div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="sdwmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={sdw} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Self Defence Workshop
                </div>
                "It Is Better To Have The Power And Not Need It Than To Need It And Not Have It."

Self-Defence for everyone is of utmost importance in the kind of world we live in today. We must prepare ourselves to defend ourselves when the need arises.

Abhyuday, in collaboration with Mumbai Police & Academy of Self-Defense, Mumbai is conducting a Self-Defense workshop as part of our Annual Social Fest.

Self-Defense workshop will strengthen you to stand bold under different adverse circumstances. The workshop will be followed by an awareness session by Mumbai Police.

The workshop is open to all, and certificates for completion will be awarded. Registration is open to everyone above 12 years.</div>
      </div>
    </div>
  </div>
</div>

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

<div class="modal fade" id="sociomodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={socio} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Socio Tech Exhibition
                </div>
                "The true test of any technology is how it benefits humanity." - Naveen Jain.

Abhyuday, IIT Bombay presents Socio-Tech exhibition as part of Social Fest 2023

A perfect opportunity for all tech enthusiasts to put their brilliant minds together for the betterment of our society and get to know about the advancement in new technologies for social good.
                </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="disablemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={disable} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Differently-Abled
                </div>
                "There is no greater disability in society than the inability to see a person as more." - Robert M. Hensel.

The winners of the blind cricket World Cup, the Indian National Blind Cricket team, led by Captain Ajay Reddy, is here to share their cricketing experiences and journey of overcoming all odds to achieve their goals.

Joining us will be Sumit Agarwal, Disabilities and Inclusion speaker and SDG ambassador, who will throw light on the topic 'Ability mapping'!

                </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="samwaadmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={sam} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Samwaad
                </div>
                The #Samwaad series by Abhyuday IIT Bombay is here to give young voices a place to congregate and talk about the pressing social challenges.
Join the discussion and bring about change! 
Make connections with like-minded people, exchange ideas, and cooperate to find solutions to the most pressing issues. 

E-certificates for all the participants!
                </div>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="womenmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={women} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Her Health Demystified
                </div>
                Join us for "Her Health Demystified" at Abhyuday's Social Fest, featuring Dr. Anjali Kumar. Learn from the expert and dispel myths about women's health. From menstruation to cancer, practical solutions for optimal health. Don't miss this opportunity to learn from one of the leading experts in women's health.
                </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="rapmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={rap} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Battle of the Bars
                </div>
                Get ready for the fierce competition and electrifying performances as the hottest rappers in the game face off in a battle for ultimate lyrical supremacy. Witness the raw talent and undeniable skill of these lyrical geniuses as they unleash their flow and leave the crowd in awe. Catch these aspiring rappers from Dharavi as they share their stories through the trendiest form of art. 

Followed by a performance by the judges:- 
MC Heam -Hip-hop artist is known for his dynamic performances | Coach at MTV Hustle 2.0 | Teacher at @tddp. MC Josh and Azim - A classic duo from Mumbai who has set the stage on fire with bangers like Push Me and AASMAAN.
                </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="mentalmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={mental} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Mental Health Matters
                </div>
                "What mental health needs is more sunlight, more candor and more unashamed conversation" - Glenn Close. 

It is becoming clearer day by day that we need to drive more conversations around mental health. We have with us Ananya Birla! - artist, businesswoman and mental health advocate to share her experiences of her mental health journey and interact with the audience to spread light on the topic of Mental health awareness. 
                </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="csrcmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={csrc} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        CSR Conclave
                </div>
                Join us for the CSR Conclave wherein we have organizations that are interested in discussing and promoting the concept of businesses taking responsibility for the impact they have on society and the environment.

Pipal Tree Foundation is here to tell about how the tribal efforts are helping it create a business and helping the community in return. Similarly the organisations onboard like: Godrej, Animal Angels, Aseema Charitable Trust, etc. have some unique initiatives to tell to the people.
                </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="mediamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={media} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Media Conclave
                </div>
                Witness the media professionals come together to share insights on current trends in the media industry.

Anusha Subramanian ma'am will be joining us to discuss the inclusion of people with disabilities in outdoor sports and the role of external organisations in this.

Sushant Sinha sir will give his stance on media ethics and the inclusion of corporates in the media industry.

Join us for the Media Conclave and be a part of these fierce open discussions.
                </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="pehchanmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={pehchan} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Pehchan
                </div>
                Pehchaan: The Unsung Heroes is an initiative by Being Social in collaboration with Abhyuday IIT Bombay with the aim of providing underprivileged kids with an opportunity to showcase their talent in dancing, singing, and painting.

Join us to witness the Grand Finale of this three-month journey of the children at our Annual Social Fest on the 21st and 22nd of January, 2023 at IIT Bombay!
                </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="checkmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 cen">
          <div className="img">
            <img src={check} alt="" className='eventimg'  />
          </div>
          
          </div>
        <div className="col-lg-7 event-disc cen ">
        <div className="etitl">
        Health Checkup Camp
                </div>
                Abhyuday, IIT Bombay is organising a ‘Health Checkup Camp’ in the institute during the Annual Social Fest.

The Camp is Free of Cost!

The details of the camp are as follows:
Dates and time:
21st January, Saturday, 2-5 pm
22nd January, Sunday, 10 am-1 pm and 2 pm-5 pm

Venue: LHC Open Area (Opposite Shiru Cafe)

The following examinations will be conducted in the Health Checkup Camp:
BMI Checkup
Dental Checkup
Blood Pressure
Blood Sugar Level
Doctor Consultation

Book your slots now!
                </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="manualmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content ">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

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
    </div>
  )
}
