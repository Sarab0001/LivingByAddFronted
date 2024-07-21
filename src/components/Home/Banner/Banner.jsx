import React from "react";

import "./Banner.scss";
import { Link } from "react-router-dom";
// import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <center>
            <h1>LivingByAad</h1>
            <p>
              At Living by Aad, we curate a diverse range of products, from
              exquisite home accents to practical kitchen essentials and
              luxurious dining accessories.
            </p>
          </center>
          <div className="ctas">
            {/* <div className="banner-cta">Read More</div> */}
            {/* <div className="banner-cta v2">Shop Now </div> */}
          </div>
        </div>
        {/* <img className="banner-img" src={BannerImg} alt="" /> */}
      </div>
    </div>
  );
};

export default Banner;
