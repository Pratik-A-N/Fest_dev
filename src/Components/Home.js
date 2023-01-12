import React from 'react'
// import Google from './Google'
import Navbar from './Navbar'
import bg from '../Assets/Images/bg.jpeg'
// import TestGoogle from './TestGoogle'
import About from './About'
import down from '../Assets/Images/dow.png'

const sociologo = "https://s3-alpha-sig.figma.com/img/1ca4/6000/861a4d55732b1b0044c3819d8f3531d4?Expires=1673827200&Signature=fJtSEfX6D441~mc~G9XG~J9r0utanJ2~3OCLlN1cBvh8H-O5znOErYcb2cfVhtbnGpm-9hhQseH8m2ttN6UyWBmAQA9-Lt1AIxhiZrd5FzJ3KABBsapslJgRUkUAyWrawHZsn43bCGL-ZMQYF8CwUmVZpLa83Eh96zWKhQ94roZO-l6sON1S9ORVavfKxJwPIjUnf6QSyifWSTOXkEbjFP1dc-zGtGZoiNOeyaCR345f01wtzxLMwLCRVH6lQ5IOPtYciOGzgzyJtKBiPK9SqhhdLlANOeaq6eho1-s4RfbFzliEU377vyRbEE-LgMOtd3~Yl9wzT~-eehgN39lfUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

export default function Home() {
  return (
    <div className="fluid-container">
      <img src={bg} alt="" id='bg' />
      <Navbar/>
      {/* <Google/> */}
      <a className='scrollbt' href='#about'>
        <img src={down} alt="" id='down'/>
      </a>
      <div className="row display-flex justify-content-center social-logo">
        <div className="col-6 center">
          <div className="blur">
            <img src={sociologo} alt="" id='sociologo' />
            {/* <TestGoogle/>  */}
          </div>
        </div>
      </div>
      <About/>
      
    </div>
  )
}
