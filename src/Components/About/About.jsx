import React from 'react'
import  './About.css'
import front from "../../assets/frontend_dev.jpeg"
import js from "../../assets/JS.jpeg"
import node from "../../assets/node_JS.png"
import { Link } from 'react-router-dom'
import indi from "../../assets/indication.avif"
import javas from "../../assets/java1.jpeg"

const About = () => {
  return (
    <div className='about-body'>
      <h1>Hey , <span className='text-top'>Thanks for visiting on my Portfolio</span></h1>
      <div className="top-about">
      <div className="certification">
          <div className="certify">
          <h2>Certification in <p style={{color:"#1d211e", fontSize:"2.0rem"}}>Javasript Developer</p> and having strong command on JS as a backend developer as well as a frontend developer</h2>
          <span style={{color:"#190c24",fontSize:"1.5rem"}}>Familiar with the Concept like Async-await,Dealing with Promises,Callback and API Handling
            and can work with Async JS as well as the Synchronous Nature of JS
          </span> <br />
          </div>
          <img src={js} alt="" />
        </div>
        <div className="certification">
          <div className="certify">
          <h2>Certification in <p style={{color:"#1d211e", fontSize:"2.0rem"}}>
            Frontend Developer</p>Deep  knowledge in HTML,CSS (Responsive Web-Design) and Javascript</h2>
          <span style={{color:"#190c24",fontSize:"1.5rem"}}>I and can make 
            any complex web-design using Vanilla Javascript as well as by using the React JS also.</span> <br />
          </div>
          <img src={front} alt="" />
        </div>
        <div className="certification">
          <div className="certify">
          <h2>Certification in <p style={{color:"#1d211e", fontSize:"2.0rem"}}>Backend development</p>Deep Knowledge in Node JS and MongoDB.</h2>
          <span style={{color:"#190c24",fontSize:"1.5rem"}}>Having deep knowlwdge in NodeJs with Express JS to create routing , API testing also 
            create middleware</span> <br />
          </div>
          <img src={node} alt="" />
        </div>
        <div className="certification">
          <div className="certify">
          <h2>Certification in <p style={{color:"#1d211e", fontSize:"2.0rem"}}>Java Developer from Infosys Springbord </p></h2>
          <span style={{color:"#190c24",fontSize:"1.5rem"}}>Having deep knowlwdge of Data Structures and Algorithm 
             in Java ,Having Logic Building Ability.</span> <br />
          </div>
          <img src={javas} alt="" />
        </div>
      </div>
      <div className="bottom-about">
      <h1 style={{color:"rgb(42, 54, 88)",padding:"20px"}}>Working as a Frelancer.</h1>
        <div className="ab-bt">
        <div className="frelancing-contact">
         <h3 style={{color:"#351336",fontSize:"2.5rem"}}>We provide best Service</h3>
         <h1 style={{color:"#0a134d",fontSize:"1.5rem"}}>Click on Side image for Contact any Freelancing Projects <i className="fa-solid fa-arrow-right"></i> </h1>
        <p style={{color:"#351336"}}>Contact for any freelancing-Projects.</p>
        </div>
        <div className="service">
        <Link to={`mailto:patelnitin1299@gmail.com`}><img src={indi} alt="conatct" /></Link>
        </div>
      </div>
        </div>
    </div>
  )
}

export default About
