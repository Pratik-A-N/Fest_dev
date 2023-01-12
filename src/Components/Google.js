import { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import jwt_decode from "jwt-decode";

import axios from "axios";
import { useNavigate } from 'react-router-dom';
const google = window.google;
const API_URL = "https://cr.abhyudayiitb.org/festapi/Google"
// const google = window.google

function Google () {
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
    // global google
    google.accounts.id.initialize({
      client_id : "161055812663-vs09cgjl4lujuuv6vi1km7hhcnqro91v.apps.googleusercontent.com",
      callback : handleCallbackResponse
    })

    google.accounts.id.prompt();
  }, []);
   

  return (
    <div className="App">
    </div>
  );
}

export default Google;
