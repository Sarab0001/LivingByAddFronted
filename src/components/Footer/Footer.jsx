import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Living by Aad is a premier home decor, kitchen, and dining items
            company dedicated to elevating your living space with style and
            functionality. Our brand ethos revolves around blending contemporary
            designs with timeless elegance, ensuring that every piece reflects
            sophistication and charm.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Lg 19 , Mega Mall , Gurugram</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 9818986519</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: livingbyaad@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Dining</span>
          <span className="text">Decor</span>
          <span className="text">Kitchen</span>
          <span className="text">Gifting</span>
        </div>
        {/* <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Contact Us</span>
        </div> */}
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">All right reserved @LivingByAdd</span>
          <img src={Payment} alt="photo1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
