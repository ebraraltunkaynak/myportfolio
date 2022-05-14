import React from 'react'
import './Experience.css'
import { themeContext } from "../../Context";
import { useContext } from "react";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='experience'>
    <div className="achivement">
    <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
    <span>Years</span>
    <span>Experience</span>
    </div>
    <div className="achivement">
    <div className="circle"style={{color: darkMode?'var(--orange)':''}}>7+</div>
    <span>Completed</span>
    <span>Projects</span>
    </div>
    <div className="achivement">
    <div className="circle"style={{color: darkMode?'var(--orange)':''}}>2</div>
   
    <span>Companies</span> 
    <span>Work</span>
    </div>


    </div>
  )
}

export default Experience