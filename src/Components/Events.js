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
import about from '../Assets/Images/about.png'

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
