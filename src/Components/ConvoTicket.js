import React, { useState } from 'react'
import downloadjs from 'downloadjs'
import html2canvas from "html2canvas"
import festlogo from '../Assets/Images/final.svg'
import person from '../Assets/Images/person.svg'
import { useLocation } from 'react-router-dom'

export default function ConvoTicket() {
  const {state} = useLocation();
  const [data, setdata] = useState(state.data)

  const handleCaptureClick = () =>{
        

    const element = document.getElementById("delegateId")
    html2canvas(element,{logging:true, letterRendering: 1, useCORS:true})
    .then(canvas =>{
     
        const imgData = canvas.toDataURL('img/png');

        downloadjs(imgData,'download.png','img/png')

    })

   
}
  return (
    <div><div className="newContainer cen">
         
            
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



 
</div></div>
  )
}
