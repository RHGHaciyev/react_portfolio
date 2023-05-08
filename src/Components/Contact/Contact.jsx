import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div id='Contact' className='contact-main'>
        <div className="s-title">
            <h1>Contact</h1>
             <div className="line"></div>
        </div>
        <div className="c-main">
            <div className="contactInner">
                <div className="contactInfo">
                    <span>Primary :</span>
                    <span>rizvanyh@code.edu.az</span>
                </div>
            </div>
            <div className="contactInner">
            <div className="contactInfo">
                    <span>Secondary :</span>
                    <span>+994(055)942 46 14</span>
                </div>
            </div>
            <div className="contactInner">
            <div className="contactInfo">
                    <span>Whatsapp Number :</span>
                    <span>+994(051)360 57 31</span>
                </div>
            </div>
            <div className="contactInner">
            <div className="contactInfo">
                    <span>Address :</span>
                    <span>Azerbaijan, Sumgait</span>
                </div>
            </div>
            <div className="contactInner">
            <div className="contactInfo">
                    <span>Legal Status :</span>
                    <span>Indetified person</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact