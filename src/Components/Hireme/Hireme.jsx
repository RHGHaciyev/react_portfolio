import React from 'react'
import './Hireme.css'
import { Link } from 'react-scroll'
const Hireme = () => {
  return (
    <div className='hr-main'>
        <div className="hire">
            <div className="animediv">
            <h1>Hire Me For Your Next Project</h1>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
             <button>Hire me now</button>
            </Link>
        </div>
    </div>
  )
}

export default Hireme