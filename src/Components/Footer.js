import React from 'react'

export default function Footer() {
  return (
    <div>
            <div class="row display-flex justify-content-center fo pt-5">
                <div style={{width: "8vh",display:"flex",justifyContent:"center"}}>
                    <a href="https://www.facebook.com/abhyuday.iitb/" target="/" class="fa fa-facebook" style={{fontSize: "2.5vh"}}> </a>
                </div>
                <div style={{width: "8vh",display:"flex",justifyContent:"center"}}>
                    <a href="https://www.instagram.com/iitbombay_abhyuday/" target="/" class="fa fa-instagram" style={{fontSize: "2.5vh"}}> </a>
                </div>
                <div style={{width: "8vh",display:"flex",justifyContent:"center"}}>
                    <a href="https://www.linkedin.com/company/abhyuday-iit-bombay/mycompany/" target="/" class="fa fa-linkedin" style={{fontSize: "2.5vh"}}> </a>
                </div>
                <div style={{width: "8vh",display:"flex",justifyContent:"center"}}>
                    <a href="https://twitter.com/Abhyuday_IITB?s=07" target="/" class="fa fa-twitter" style={{fontSize: "2.5vh"}}> </a>
                </div>
                <div style={{width: "8vh",display:"flex",justifyContent:"center"}}>
                    <a href="https://www.youtube.com/c/AbhyudayIITBombay" target="/" class="fa fa-youtube" style={{fontSize: "2.5vh"}}> </a>
                </div>
            </div>
            <a href="https://abhyudayiitb.org" target="/" style={{textDecoration: "none"}}><div class="row display-flex justify-content-center camp py-4" style={{fontSize: "2.5vh"}}>
                © Abhyuday | IIT Bombay
            </div></a>
    </div>
  )
}
