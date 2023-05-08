import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div id='Services' className='s-main'>
        <div className="s-title">
            <h1>What I Do</h1>
             <div className="line"></div>
            <p>All my services.</p>
        </div>
        <div className="s-part1">
            <div className="part s-design">
                <div className="s-iconback">
                <i className="fa fa-laptop" aria-hidden="true"></i>
                </div>
                <h2>Web Design</h2>
                <p>
                    As a web designer, I put my mind and heart into every web design project. 
                    I love designing websites that stand out from the rest.
                </p>
            </div>
            <div className="part s-development">
            <div className="s-iconback">
                <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <h2>Web Development</h2>
                <p>
                Designing and Coding have been my passion since the days 
                I started working with computers but I found myself into web design/development since 2017.
                </p>
            </div>
            <div className="part s-responsive">
            <div className="s-iconback">
                <i className="fa fa-mobile" aria-hidden="true"></i>
                </div>
                <h2>Responsive Design</h2>
                <p>
                I create responsive websites that allow the user to experience your website in the 
                best and most appropriate way suited to the device they are using.
                </p>
            </div>
        </div>
        <div className="s-part2">
           <div className="part s-brandIdentity">
           <div className="s-iconback">
                <i className="fa fa-heart" aria-hidden="true"></i>
                </div>
                <h2>Branding Identity</h2>
                <p>
                I want to make sure my customers remember my brand’s history, values and vision.
                I demonstrate visuals with visual components and features on my website.
                </p>
           </div>
           <div className="part s-CreativeDesig">
           <div className="s-iconback">
                <i className="fa fa-magic" aria-hidden="true"></i>
                </div>
                <h2>Creative Design</h2>
                <p>
                I make creative web sites with fresh designs. 
                Sometimes you have no idea what you want; that’s just fine. I can guide you to something special.
                </p>
           </div>
           <div className="part s-Support">
           <div className="s-iconback">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </div>
                <h2>Quick Support</h2>
                <p>
                Do you need support for your website? You can get quick support whenever you need it.
                </p>
           </div>
        </div>
    </div>
  )
}

export default Services