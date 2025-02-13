import React from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact for Any Projects or Services</h1>
      <div className="info-body">
        <div className="para">
          <p>I am available for freelance work. Able to connect any company or Organisation to work with 
            the Teams. Collaborate with multiple developers to create high-quality projects. 
            I Can Provide the Service as very Short Period of Time. <br />
            <span style={{color:"purple",fontSize:"1.5rem",fontWeight:"700"}}>Connect with me via  phone: +91 9026532143 or email: patelnitin1299@gmail.com</span></p>
        </div>
      <div className="contact">
        <div className="linkedin">
        <span>Contact via LinkedIn</span> 
        <Link to={`https://linkedin.com/in/patelnitin1299`}><i className="fa-brands fa-linkedin"></i></Link>
        </div>
        <div className="git-hub">
        <span>Check out my Git-hub</span> 
        <Link to={`https://github.com/NitinP0607`}><i className="fa-brands fa-github"></i></Link>
        </div>
        <div className="mail">
        <span>For More Mail Me</span> 
        <Link to={`mailto:patelnitin1299@gmail.com`}><i className="fa-solid fa-envelope"></i></Link>
        </div>
        <div className="port">
        <span>Check More About Me</span> 
        <Link to={`https://nitinp0607.github.io/codeConductor/`}><i className="fa-solid fa-user"></i></Link>
        </div>
        </div>
      </div>
      </div>
    
  )
}

export default Contact
