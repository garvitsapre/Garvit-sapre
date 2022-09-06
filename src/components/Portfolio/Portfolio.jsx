
import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import groscry from "../../img/groscry.png";
import coffe from "../../img/coffe.png";
import portfolio from "../../img/portfolio.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={groscry} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coffe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfolio} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

