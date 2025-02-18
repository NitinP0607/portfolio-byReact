import React from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'
import blog1 from "../../assets/freel1.jpeg"
import blog2 from "../../assets/freel2.jpeg"
import blog3 from "../../assets/freel3.jpeg"
import blog4 from "../../assets/freel4.png"



const Contact = () => {
  return (
    <div className='contact-container'>
      <marquee ><h2 style={{color:"#24394f",fontSize:"2.5rem"}}>Your vision, my expertise—let’s build something amazing together.</h2></marquee>
      <marquee behavior="alternate"><h2 style={{color:"#24394f",fontSize:"2.0rem"}}>Best Service at , Best Price</h2></marquee>
      <div className="blog">
        <p>Your vision, my code! Need a sleek, responsive, and high-performing website? Let’s 
          connect and bring your ideas to life.</p>
          <p style={{color:"#102952",fontSize:"2.5rem",fontWeight:"700"}}>Have a project in mind? <br />
          <span style={{color:"#1c68e6",fontSize:"2.0rem",fontWeight:"700"}}>Let’s talk about how we can make it a reality!</span></p>
          <div className="top-blog">
            <h3 style={{color:"#102952",fontSize:"2.5rem",fontWeight:"700"}}>A solid website starts with a solid conversation.
               Lets get in touch and make it happen!</h3>
          </div>
          <div className="bot-blog">
            <img src={blog1} alt="" />
            <img src={blog2} alt="" />
            <img src={blog3} alt="" />
          </div>
      </div>
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
         
        <Link to={`https://linkedin.com/in/patelnitin1299`}><span>Contact via LinkedIn</span><i className="fa-brands fa-linkedin"></i></Link>
        </div>
        <div className="git-hub">
        
        <Link to={`https://github.com/NitinP0607`}><span>Check out my Git-hub</span> <i className="fa-brands fa-github"></i></Link>
        </div>
        <div className="mail">
        
        <Link to={`mailto:patelnitin1299@gmail.com`}><span>For More Mail Me</span> <i className="fa-solid fa-envelope"></i></Link>
        </div>
        <div className="port">
        
        <Link to={`https://nitinp0607.github.io/codeConductor/`}><span>Check More About Me</span> <i className="fa-solid fa-user"></i></Link>
        </div>
        </div>
      </div>
      </div>
    
  )
}

export default Contact
