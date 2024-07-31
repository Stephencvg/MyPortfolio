import React from "react";
import "./Contact.css";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import email_icon from "../../assets/mail_icon.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get to know me</h1>
      </div>
      <div className="contact--section">
        <div className="contact--section--left">
          <h1>Converse with me</h1>
          <p>
            I am available at the moment for your project, so feel pleased to
            contact me for you new project(s).
          </p>
          <div className="contact--details">
            <div className="contact--detail">
              <img src={email_icon} alt="" />
              <p>stephenadeoye3506@gmail.com</p>
            </div>
            <div className="contact--detail">
              <img src={call_icon} alt="" />
              <p>08062139302 or 07030263506</p>
            </div>
            <div className="contact--detail">
              <img src={location_icon} alt="" />
              <p>Texas, United State.</p>
            </div>
          </div>
        </div>
        <form className="contact--section--right">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Tell me your message</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
          ></textarea>
          <button className="contact--submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
