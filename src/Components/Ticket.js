import React from 'react'
import downloadjs from 'downloadjs'
import html2canvas from "html2canvas"
import { useLocation, useNavigate } from 'react-router-dom'


export default function Ticket() {
    const { state } = useLocation();
    const navigate = useNavigate();

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

        navigate("/events",{
            state:{
                data: state.data
            }
        })
    }

  return (
    <div className="newContainer">
        <div className="col-lg-6 center">     
            <button type="button" className='signInDiv1' onClick={handleCaptureClick}>Download</button>   
        </div>
        <div className="col-lg-6 center">
                <div id="delegateId">
                    <div className="IdCard">
                        {/* <img src={bookmark} alt="" id="bookmark" /> */}
                        <div className="header">
                            <div className="card-body">
                                <div className="idydp">YDP</div>
                            </div>
                        </div>
                        <div className="icon">
                            {/* <img src={icon} alt="" /> */}
                        </div>
                        <div className="name">
                            {state.data["name"]}
                        </div>
                        <div className="row other">
                            <div className="email">Email: {state.data["email"]}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
