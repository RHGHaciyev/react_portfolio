import React, { useEffect, useState } from 'react'
import Typed from 'typed.js';
import { Link } from 'react-scroll';
import './Home.css'
const Home = () => {
  const [up,setUp]=useState(false);
  // const [hide,setHide]=useState(false)
  const ChangeButton=()=>{
   if(window.scrollY>=450){
    setUp(true)
   }
   else{
    setUp(false)
   }
  }
  useEffect(()=>{
    let typed = new Typed('.typing', {
      strings: ["I'm A Professional Web Developer", "I'm A Professional Web Designer"],
      typeSpeed: 100, backDelay: 1300, loop: true, backSpeed:100
  });
  return()=>{
    typed.destroy()
  }
  },[])
 
 
  window.addEventListener('scroll',ChangeButton)
  return (
    <div id='Home' className='h-main'>
        <div className="h-text">
            <h1>Hi! I'm Rizvan Hajiyev.</h1>
            <span class="typing" ></span>
            <div>
            <Link  smooth={true} to={up?'Home':'About'} spy={true}>
             <i  onClick={ChangeButton} style={{fontSize:'20px'}} className={up?'fa fa-arrow-up downs':'fa fa-arrow-down h-button'} aria-hidden="true"></i>
             </Link>
            </div>
        </div>
    </div>
  )
}

export default Home