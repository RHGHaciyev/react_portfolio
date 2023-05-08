import React from 'react'
import './About.css'
import AboutImg from '../../Images/mine1.jpg'
const About = () => {
    return (
        <div id='About' className='ab-main'>
           <div className="ab-image">
                <img src={AboutImg} alt="" />
            </div>
            <div className="ab-infos">
                <div className="ab-left">
                    <h1>Hi There! I'm Rizvan Hajiyev</h1>
                    <p>
                        I'm a full-time freelance web developer who specializes in creating dynamic and beautiful webpages.
                        I'm a team-worker, responsible for his work, creative, attentive, highly expert in the design and a reliable person.
                        I'm a person who has succeeded in working alone and is able to think analytically.
                        I have a skill of solving problems, have confidence in his inteligence, ability and memory.
                    </p>
                </div>
               
                <div className="ab-right">
                 <div className="ab-skills">
                    <div className="skills-left">
                        <div className="skill-empty">
                            <p>HTML/CSS</p>
                            <div className="skill-fill"></div>
                             <p>100%</p>
                        </div>
                        <div className="skill-empty">
                        <p>Bootstrap</p>
                            <div className="skill-fill"></div>
                        <p>100%</p>
                        </div>
                        <div className="skill-empty">
                            <p>SASS</p>
                            <div className="skill-fill"></div>
                            <p>100%</p>
                        </div>
                        <div className="skill-empty">
                            <p>JAVASCRIPT</p>
                            <div className="ninety"></div>
                            <p>90%</p>
                        </div>
                        <div className="skill-empty">
                            <p>JQUERY</p>
                            <div className="ninety"></div>
                            <p>90%</p>
                        </div>
                    </div>
                    <div className="skills-right">
                    <div className="skill-empty">
                        <p>REACT</p>
                            <div className="ninety"></div>
                        <p>90%</p>
                    </div>
                    <div className="skill-empty">
                        <p>MYSQL</p>
                            <div className="eighty"></div>
                        <p>80%</p>
                    </div>
                    <div className="skill-empty">
                        <p>C#</p>
                            <div className="seventy"></div>
                         <p>70%</p>
                    </div>
                    <div className="skill-empty">
                        <p>ASP.NET</p>
                            <div className="seventy"></div>
                        <p>70%</p>
                    </div>
                    <div className="skill-empty">
                        <p>PHOTOSHOP</p>
                            <div className="seventy"></div>
                        <p>70%</p>
                    </div>
                    </div>
                 </div>
                </div>
            </div>
              
        </div>
    )
}

export default About