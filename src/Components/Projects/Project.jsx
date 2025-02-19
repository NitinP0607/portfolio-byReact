import React from 'react'
import { Link } from 'react-router-dom'
import "./Project.css"
import gemini from "../../assets/gemini-clone.png"
import vannila from "../../assets/vannila.png"
import profile from "../../assets/profile_pic.png"
import ecom from "../../assets/ecom1.jpg"
import proj from "../../assets/proj4.avif"

const Project = () => {
  return (
    <div className="project-container">
      <h1>Here are Some of Sample Projects</h1>
      <div className="projects-container">
      <div className="projects">
     <div className="profile_img project">
        <img src={profile} alt="" />
      </div>
      <div className="project">
        <h2> Concepts Of ReactJs</h2>
      <img src={gemini} alt="" />
        <div className="project-info">
        <p style={{color:"#0a0330",fontSize:"1.0rem",textAlign:"center",fontWeight:"700"}}>Gemini Clone in ReactJs</p>
        <Link to={`https://first-projectof-react.netlify.app/`}><span style={{color:"#033030",fontSize:"1.0rem"}}>Live</span></Link>
        </div>
      </div>
      <div className="project">
        <h2>For more Information</h2>
      <img src={vannila} alt="" />
        <div className="project-info">
        <p style={{color:"#0a0330",fontSize:"1.0rem",textAlign:"center",fontWeight:"700"}}>
          Click on Info for more About Me</p>
        <Link to={`https://nitinp0607.github.io/codeConductor/`}><span style={{color:"#033030",fontSize:"1.0rem"}}>Info</span></Link>
        </div>
      </div>
     </div>
     <div className="projects">
     <div className="project">
        <h2>Ecommerce Website</h2>
      <img src={ecom} alt="" />
        <div className="project-info">
        <p style={{color:"#0a0330",fontSize:"1.0rem",textAlign:"center",fontWeight:"700"}}>Building block HTML,CSS,JAVASCRIPT</p>
        <Link to={`https://nitinp0607.github.io/Ecom-RO/`}><span style={{color:"#033030",fontSize:"1.0rem"}}>Live</span></Link>
        </div>
      </div>
      <div className="project">
        <h2>Freelancing-Project</h2>
      <img src={proj} alt="" />
        <div className="project-info">
        <p style={{color:"#0a0330",fontSize:"1.0rem",textAlign:"center",fontWeight:"700"}}>Landing Page for TechnoX IT <br /> 
        Freelancing Project </p>
        <Link to={`https://nitinp0607.github.io/landing-page/`}><span style={{color:"#033030",fontSize:"1.0rem"}}>Live</span></Link>
        </div>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Project
