import React, { useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import { Form, FormGroup, Input, Label } from "reactstrap";
import axios from 'axios';
import bg from '../Assets/Images/bg.jpeg'

const API_URL = "https://cr.abhyudayiitb.org/festapi/Normal"

export default function Reg() {
    const navigate = useNavigate();
    const {state} = useLocation();

    const generateRandomId =()=>{
      const uniqueId = "SF-" + Math.random().toString(36).substr(2, 6);
      return uniqueId
    }
    
    const [user, setUser] = useState({
        pk: 0,
        Ano: generateRandomId(),
        name:state.data["name"],
        email:state.data["email"],
        contact:"",
      })
      const onChange = (e) => {
        // props.onChange({ ...user, [e.target.name]: e.target.value })
        setUser({...user, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) =>{
        let x = document.getElementById("loading");
          x.style.display = 'block';
          let y = document.getElementById("afterload");
          y.style.display = 'none';
        e.preventDefault();
        // console.log(user);
        axios.post(API_URL, user)
        .then((response) =>{
          // console.log(response);
          if(response.status === 201){
            // console.log("success");
            let x = document.getElementById("loading");
            x.style.display = 'none';
            let y = document.getElementById("afterload");
            y.style.display = 'block';
            setTimeout(() => {
              navigate("/events",{
                state:{
                    data:user
                  }
              })
            },3000);
            alert("Registered successfully! Click Ok to continue")
          }
        })
        .catch((error)=>{
          console.log(error);
          let x = document.getElementById("loading");
          x.style.display = 'none';
          let y = document.getElementById("afterload");
          y.style.display = 'block';
          alert(error);
        })
      };

    return (
        <div className="fluid-container">
          <img src={bg} alt="" id='bg' />
            <div className="row display-flex justify-content-center social-logo">
                <div className="col-lg-8">
                    <div className="blur pr">
                    <Form onSubmit={(e) => {handleSubmit(e)}}>
              <FormGroup>
                <Label for="" className="innertitle">Name:</Label>
                <Input
                  type="text"
                  name="name"
                //   onChange={(e) =>{onChange(e)}}
                  value={user.name}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="" className="innertitle">Email:</Label>
                <Input
                  type="email"
                  name="email"
                //   onChange={(e) =>{onChange(e)}}
                  value={user.email}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="" className="innertitle">Contact (Whatsapp preferably) :</Label>
                <Input
                  type="phone"
                  name="contact"
                  pattern="[0-9]{10}"
                  onChange={(e) =>{onChange(e)}}
                  value={user.contact}
                  required
                />
              </FormGroup>
              
              <div className="extbt cen">
              <button className="regbt">
                <span className="spinner-border spinner-border-sm " id="loading" role="status" aria-hidden="true"></span>
                <span id="afterload" >Register</span>
              </button>
              </div>
            </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
