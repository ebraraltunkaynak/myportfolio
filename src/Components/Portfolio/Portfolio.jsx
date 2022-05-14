import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from "swiper/react";
import Medi from "../../img/3.png";
import Bre from "../../img/br.png";
import Gia from "../../img/gia.png";
import Lea from "../../img/lea.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import "swiper/css";

const Portfolio = () => {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='portfolio'>
        {/* heading */}
        <span style={{color: darkMode?'white': ''}} >Recent Projects</span>
        <span>Portfolio</span>
         {/* swiper */}
      <Swiper
       spaceBetween={10}
       slidesPerView={3}
       grabCursor={true}
       className="portfolio-slider"
       >
        <SwiperSlide>
           <img src={Bre} alt="" />
        </SwiperSlide>

        <SwiperSlide>
           <img src={Medi} alt="" />

        </SwiperSlide>
        <SwiperSlide>
           <img src={Gia} alt="" />

        </SwiperSlide>
        <SwiperSlide>
           <img src={Lea} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;