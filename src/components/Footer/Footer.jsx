import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--top">
        <div className="footer--top--left">
          <img src={footer_logo} alt="footer logo" />
          <p>
            I am a full frontend developer, who has partnered with great
            companies like microsoft, Google and more.
          </p>
        </div>
        <div className="footer--top--right">
          <div className="footer--email--input">
            <img src={user_icon} alt="user icon" />
            <input type="email" placeholder="Enter your email." />
          </div>
          <div className="footer--subscription">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer--bottom">
        <p className="footer--bottom-left">
          &copy; {new Date().getFullYear()} Stephen Bowen University. All right
          reserved.
        </p>
        <div className="footer--bottom--right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
