import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from "react-scroll";
// import Services from '../Services/Services';
// import Experience from '../Experience/Experience';
// import Portfolio from '../Portfolio/Portfolio';
// import Testimonials from '../Testimonials/Testimonials';
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
          
        <div className="n-name">EbrarDev</div> 
         <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>  
                <Link spy ={true} to="Navbar" smooth={true} >
                    
                <li>Home</li>
                </Link>
                <Link spy ={true} to="services" smooth={true} >
                    <li>Services</li>
                    </Link> 
                    <Link spy ={true} to="experience" smooth={true} >
                    <li>Experience</li>
                      </Link> 
                      <Link spy ={true} to="portfolio" smooth={true} >
                    <li>Portfolio</li> </Link> 
                    <Link spy ={true} to="testimonials" smooth={true} >
                    <li> Testimonials</li>
                    </Link>
                </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
            </div>
    </div>
  )
}

export default Navbar