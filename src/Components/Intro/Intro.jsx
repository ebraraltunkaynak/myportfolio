import React from 'react'
import './Intro.css'
import  Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import profile from '../../img/profile.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from  'framer-motion';
import { Link } from "react-scroll";
const Intro = () => {
  const transition ={duration:2, type:"spring"}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
<div className="intro">
    <div className="i-left">

        <div className="i-name">
            <span style={{color: darkMode? "white": ""}}> Hi! I Am</span>
            <span>Ebrar </span>
            <span>Hello, I'm Ebrar. I am a computer engineer. I am interested in frontend technologies. I also have experience on mobile software. I love learning and working. I want to gain new work experiences. You can follow me on my medium and linkedin accounts.</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
        <button className="button i-button">Hire Me</button> </Link>
        <div className="i-icons">
           <a href='https://github.com/ebraraltunkaynak'>
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ebrarmeadev/">
          <img src={Linkedin} alt="" />
          </a>
          <a href="https://instagram.com/ebrardev/">
          <img src={Instagram} alt="" />
          </a>
        </div>
    </div>
    <div className="i-right">
         <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={profile} alt="" />
          <motion.img
           initial={{left:"-38%"}}
           whileInView={{left:"-24%"}}
           transition={transition}
          src={glassesimoji} alt="" />
           {/* sıkıntı var */ }
           <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
           
           style={{top:"18rem",left:"0rem"}}
           className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatingDiv  img={thumbup} txt1="Mobile" txt2="Developer" />
        </motion.div>

          {/* blur div  */}
          <div className='blur' style ={{background:"rgb (238 210 255)"}}></div>
          <div className='blur' style ={{
            background: '^#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
            }}></div>
    </div>
</div>
  )
}

export default Intro