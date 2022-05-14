import React from 'react'
import './Works.css'
import Bi from "../../img/bi.png"
import Gefea from "../../img/gefea.png"
 import Meu from "../../img/mersin.png"
 import Upwork from "../../img/Upwork.png"
 import Github from "../../img/github2.png"
import { themeContext } from "../../Context";
 import { useContext } from "react";
 import {motion} from  'framer-motion';
 import {Link} from 'react-scroll';


 const Works= () => {
   const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
   // const transition = {
   //   duration: 1,
   //   type: "spring",
   // };

   return (
    <div className="works">
      <div className="awesome">
           <span style={{ color: darkMode ? "white" : "" }}> Works for All these</span>
           <span>Brands  & Clients</span>
          <span> 3 months internship at GefeaSoft
               <br/>
               6 months part time IT  at Mersin University
          
<br/>
2 freelancer projects in Bionluk
<br/>
My own projects on my Github account   
              </span>
              <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          
          <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
   </div>
      { /* right side */}
     <div className="w-right">

        <motion.div  initial={{ rotate: 45 }}
           whileInView={{ rotate: 0 }}
           viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }} className="w-mainCircle">
    <div className="w-secCircle">
              <img src={Meu}alt="" />
           </div>
           <div className="w-secCircle">
              <img src={Bi} alt="" />
           </div>
        <div className="w-secCircle">
             <img src={Gefea} alt="" />
           </div> 
           <div className="w-secCircle">
             <img src={Upwork} alt="" />
           </div>
       <div className="w-secCircle">
            <img src={Github} alt="" />
                  </div> </motion.div> 
         {/* background circles */ }
         <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
       </div>
   </div>
  )
 }

    export default Works