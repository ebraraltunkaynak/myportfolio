import React from 'react'
import "./Footer.css"
import Wawe from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wawe} style={{width:"100%"}} />
        <div className="f-content">
            <span>ebraraltunkynk@gmail.com</span>
            <div className="f-icons"> 
            <Insta   color="white" size="3rem"/>
              <Twitter color="white" size="3rem"/>
              <Github color="white" size="3rem"/>
            
            </div>

        </div>
    </div>
  )
}

export default Footer