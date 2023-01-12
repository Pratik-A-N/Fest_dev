import React from 'react'
import Footer from './Footer'


export default function About() {
  return (
    <div className='bluebg row display flex justify-content-center pt-5' id='about'>
        <div className="head col-lg-10">
            About us
        </div>
        <div className="content col-lg-10">
            <p>Abhyuday, the Social Body of IIT Bombay, started in 2014 with a group of socially inclined students who felt the need for a body.  The family grew, creating and providing opportunities to the institute's students who wish to work for a better society. After the tremendous response from the institute's students, Abhyuday started to scale up its programs on a national level, widening its horizons. </p>

            <p>We organise the programs of Abhyuday broadly under three categories: Campaigns, Events and Competitions.  </p>
        </div>
        <div className="head col-lg-10">
            The Social Fest
        </div> 
        <div className="content col-lg-10">
            <p>Abhyuday organises a social festival every year which inculcates various impactful events, exhibitions, competitions, lectures and workshops to instil a sense of responsibility in the youth towards society and to create awareness about fundamental human rights, prevailing social issues, their solutions and the responsibility of the youth. </p>

            <p>Abhyuday is organising the 10th edition of the Annual Social Fest on the 21st and 22nd of January 2023 based on the theme “A Locus of Resilience”.  The Social Fest strengthens the belief that we can rise back from hard times to the zenith of glory through consistent human efforts and make the world a better place. The Social Fest will create awareness and impact through topics like climate change, blockchain, financial literacy, emotional intelligence, and many more.</p>
        </div>
        <hr />
        <Footer/>
    </div>
  )
}
