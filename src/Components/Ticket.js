
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
    // console.log(props);
    const [data, setdata] = useState(props.data)
    // console.log(data);
    // const navigate = useNavigate();
    // const [user, setuser] = useState({})

    // const login = useGoogleLogin({
    //   onSuccess: async respose => {
    //     try{
    //       const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
    //         headers:{
    //           "Authorization":`Bearer ${respose.access_token}`
    //         }
    //       })
    //       console.log(res.data);
    //       const guser={
    //         name:res.data.name,
    //         email:res.data.email
    //       }
    //       document.getElementById('login').innerHTML = "Logged In"
    
    //       axios.post(API_URL, guser)
    //     .then(res => {  
    //       if(res.data["status"] === 200){
    //           navigate("/ticket",{
    //             state:{
    //               data:res.data
    //             }
    //           })
    //       }else{
    //           navigate("/register",{
    //             state:{
    //               data:guser
    //             }
    //           })
    //         }
    //       })
    //       .catch(err => console.log(err));
    //     }catch(err){
    //       console.log(err);
    //     }
    //   }
    // });

    // useEffect(() => {
    //     const initClient = () => {
    //           gapi.client.init({
    //           clientId: clientId,
    //           scope: ''
    //         });
    //      };
    //      gapi.load('client:auth2', initClient);
    //  });

    //  const onSuccess = (res) => {
    //     const guser={
    //       name:res.profileObj.name,
    //       email:res.profileObj.email
    //     }
  
    //     axios.post(API_URL, guser)
    //   .then(res => {  
    //     if(res.data["status"] === 200){
    //         setuser(res.data)
    //     }else{
    //         navigate("/register",{
    //           state:{
    //             data:guser
    //           }
    //         })
    //       }
    //     })
    //     .catch(err => console.log(err));
  
    //   };
    //   const onFailure = (err) => {
    //       console.log('failed:', err);
    //   };

    const handleCaptureClick = () =>{
        

        const element = document.getElementById("delegateId")
        html2canvas(element,{logging:true, letterRendering: 1, useCORS:true})
        .then(canvas =>{
            // const imgWidth = 208;
            // const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('img/png');
            // pdf.addImage(imgData,'PNG',0,0,imgWidth,imgHeight);
            // pdf.save("card.pdf");
            downloadjs(imgData,'download.png','img/png')

        })

        // navigate("/events")
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
