import React from 'react'
import './Navbar.css' 
import { Link } from 'react-router-dom'
import contact_img from "../../assets/contact.png"

/*************  ✨ Codeium Command 🌟  *************/
const Navbar = () => {
  const [display,setDisplay] = React.useState(false);

  return (
    <nav className="navbar">
        <h2 onClick={() => setDisplay(!display)}>NP</h2>
        <div className="desktop-menu">
            {
              display ?
              <ul className='mobile'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to={"/contact"}>Contact Me</Link></li>
            </ul>
            :null
            }
        </div>
        
    </nav>
  )
}
/******  95cacbf9-5e91-456a-a37e-0135b152a8bf  *******/

export default Navbar
