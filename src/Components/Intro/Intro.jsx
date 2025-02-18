import React from 'react'
import "./Intro.css"
import bg from "../../assets/profile_pic.png"

import { Link } from 'react-router-dom'
import btn from "../../assets/hireme.png"


const Intro = () => {
  return (
    <>
    <section id="intro">
        <div className="intro-content">
            <span className="hello">Hello</span>
            <span className="intro-text"> I'm  <span className="name">Nitin Patel</span>
            <br /><p style={{fontSize:"5.5rem", color:"#18455c"}}>Software Engineer</p></span> <br />
            <p className="intro-para">I am a web developer with a passion for creating visually stunning and user-friendly websites.</p>
            <Link to={"/contact"}><button className='btn'><img src={btn} alt="" className='btnImg'/>Hire me</button></Link>
        </div>
        <img className='bg' src={bg} alt="" />
    </section>
    <div className="skills-container">
      <h3>A Skilled and Passionate <p style={{fontSize:"3.5rem", color:"#0a0330"}}>
        <marquee behavior="alternate" direction="">Full Stack Web Developer</marquee>
        </p></h3>
      <div className="skills">
      <div className="left-skills">
        <div>
        <h6>HTML(Hyper Text Markup Longuage)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
        <div>
        <h6>CSS (Cascading Style Sheet)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
        <div>
        <h6>JAVASCRIPT (DOM manipulation,)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
        <div>
        <h6>REACT JS(A Javasvript Library for building UI)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
        <div>
        <h6>UI/UX DESIGN(Responsive User Interface)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
        <div>
        <h6>BOOTSTRAP ,TAILWIND CSS(A CSS and JS Framework)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
      </div>
      <div className="right-skills">
      <div>
      <h6>NODE JS(For Backend Developement)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
      </div>
       <div>
       <h6>EXPRESS JS(Framework of NodeJs for creating API and routing)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
       </div>
        <div>
        <h6>MONGO DB(No SQL Database)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
        <div>
        <h6>API TESTING(Application Programming Interface)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
        <div>
        <h6>JAVA & DSA ( Logic Building )</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
        <div>
        <h6>GIT HUB, NETLIFY(To Deploy the website)</h6>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <br />
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Intro
