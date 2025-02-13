import React from 'react'
import { Link } from 'react-router-dom'
import "./Project.css"
import gemini from "../../assets/gemini-clone.png"
import vannila from "../../assets/vannila.png"
import profile from "../../assets/profile_pic.png"

const Project = () => {
  return (
    <div className="project-container">
      <h1>Here are Some of Sample Projects</h1>
     <div className="projects">
     <div className="profile_img">
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
    </div>
  )
}

export default Project
