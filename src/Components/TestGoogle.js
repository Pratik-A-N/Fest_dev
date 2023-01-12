import React, { useEffect, useState } from 'react'
import {GoogleLogin} from 'react-google-login'
import { gapi } from 'gapi-script'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const clientId ="161055812663-vs09cgjl4lujuuv6vi1km7hhcnqro91v.apps.googleusercontent.com"
const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"


export default function TestGoogle() {
  const navigate = useNavigate()
    // const [isLoggedIn, setisLoggedIn] = useState(false)

    useEffect(() => {
      const initClient = () => {
            gapi.client.init({
            clientId: clientId,
            scope: ''
          });
       };
       gapi.load('client:auth2', initClient);
   });

   const onSuccess = (res) => {
      const guser={
        name:res.profileObj.name,
        email:res.profileObj.email
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

    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };
    
  return (
    <div className='bt'>
      <GoogleLogin
         clientId={clientId}
         buttonText="Sign in with Google"
         onSuccess={onSuccess}
         onFailure={onFailure}
         cookiePolicy={'single_host_origin'}
         isSignedIn={true}
         
      />
    </div>
  )
}
