import React from 'react'
import title from '../Assets/Images/sponsor/tit.png'
import aso1 from '../Assets/Images/sponsor/aso-1.png'
import aso2 from '../Assets/Images/sponsor/aso-2.png'
import pow from '../Assets/Images/sponsor/pow.png'



export default function Sponsor() {
  return (
    <div className="newContainer">
        <div className="mobile up">
 
          <div className="event-name" id="ws">Title Sponsor</div>
          <div className="row cen">
            <div className="col-lg-6 cen mb-5">
                <div className="outer-box cen">
                  <div className="img mb-5">
                    <img src={title} alt="" className='eventimg'  />
                  </div>
                </div>
            </div>
          </div>
          
          <div className="event-name" id="ws">Associate Title Sponsor</div>
          <div className="row cen">
            <div className="col-lg-6 cen mb-5">
                <div className="outer-box cen">
                  <div className="img mb-5">
                    <img src={aso1} alt="" className='eventimg'  />
                  </div>
                </div>
            </div>
          </div>
          
          <div className="event-name" id="ws">Associate Title Sponsor</div>
          <div className="row cen">
            <div className="col-lg-6 cen mb-5">
                <div className="outer-box cen">
                  <div className="img mb-5">
                    <img src={aso2} alt="" className='eventimg'  />
                  </div>
                </div>
            </div>
          </div>
          
          <div className="event-name" id="ws">Powered By</div>
          <div className="row cen">
            <div className="col-lg-6 cen mb-5">
                <div className="outer-box cen">
                  <div className="img mb-5">
                    <img src={pow} alt="" className='eventimg'  />
                  </div>
                </div>
            </div>
          </div>
          
    

        </div>
    </div>
  )
}
