import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [navbar,setNavbar]=useState(false)
    const [click,setclick]=useState(true)
    const [appState,Changecolor] =useState({
        activeObject:null,
        objects:[{id:'Home',name:'HOME'}, {id:'About',name:'ABOUT'},{id:'Services',name:'SERVICES'},
        {id:'Work',name:'WORKS'},{id:'Contact',name:'CONTACT'},{id:'Designer',name:'DESIGN'},]
    })
    const changeBackground=()=>{

        if(window.scrollY>=100){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }
    const changenav=()=>{
        if(window.innerWidth<=960){
           setclick(!click)
        }
    }
    function toggleActive(index){
Changecolor({...appState, activeObject:appState.objects[index]})
    }
    function toggleActiveStyle(index){
     if(appState.objects[index]===appState.activeObject){
        return 'active'
     }
     else{
        return 'inactive'
     }
    }
    window.addEventListener('scroll',changeBackground)
  return (
    <div className={navbar?'nav-main active':'nav-main'}>
        <div className="n-left">
            <span>NEW</span>
            <span>Tech</span>
            <i onClick={changenav} className={click?"fa fa-bars":"fa fa-times"} aria-hidden="true"></i>
        </div>
        <div className='n-right'>
            <div className={click?"n-list":"n-list active"}>
                <ul>
                    {
                        appState.objects.map((elements,index) => {
                           return  <Link onClick={()=>{toggleActive(index)}} spy={true} smooth={true} to={elements.id} activeClass='activeClass'>
                           <li className={toggleActiveStyle(index)} key={index}>{elements.name}</li>
                           </Link>
                        })
                    }
                </ul>
            </div>
          
        </div>
    </div>
  )
}

export default Navbar