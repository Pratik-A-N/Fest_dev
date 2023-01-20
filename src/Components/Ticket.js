
import downloadjs from 'downloadjs'
import html2canvas from "html2canvas"

import React, { useState } from 'react'
// import {GoogleLogin} from 'react-google-login'
// import { gapi } from 'gapi-script'
// import axios from 'axios'
// import Navbar from './Navbar'
import festlogo from '../Assets/Images/final.svg'
import person from '../Assets/Images/person.svg'
// import {useGoogleLogin} from '@react-oauth/google';



// const clientId ="161055812663-vs09cgjl4lujuuv6vi1km7hhcnqro91v.apps.googleusercontent.com"
// const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"

export default function Ticket(props) {
    console.log(props);
    const [data, setdata] = useState(props.data)


    const handleCaptureClick = () =>{
        

        const element = document.getElementById("delegateId")
        html2canvas(element,{logging:true, letterRendering: 1, useCORS:true})
        .then(canvas =>{
         
            const imgData = canvas.toDataURL('img/png');
  
            downloadjs(imgData,'download.png','img/png')

        })

       
    }

  return (
    <div className="">
        <div className=" cen">
         
            
               <div className="col-lg-6 center m-4">     
                <button type="button" className='regbt' onClick={handleCaptureClick}>Download</button>   
                </div>
                                
                                <div className="col-lg-6 cen">
                                <div id="delegateId">
                                    <div className="IdCard">
                                      
                                        <div className="icon">
                                            <img src={festlogo} alt="" />
                                        </div>
                
                                        <div className="icon">
                                            <img src={person} alt="" />
                                        </div>
                
                                        <div className="name">
                                         Name: {data.name}
                                        </div>
                
                                        <div className="row other">
                                            <div className="email">ID: {data.Ano}</div>
                                        </div>
                
                                    </div>
                                </div>
                            </div>

           
          
            
        </div>
        
    </div>
  )
}
