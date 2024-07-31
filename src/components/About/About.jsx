import React from "react";
import "./About.css";
import about_profile_img from "../../assets/about-profile-img.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_profile_img} alt="" height={300} />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I am an experienced frontend developer with over five years coding
              journey with expertise, and grace of collaborating with great
              organisations and developers, contributing to their work
            </p>
            <p>
              I am a passionate developer, always love to code, it might
              interest you to know that I code with ease and I am dedicated to
              each project or work.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html & Css</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Others</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Done</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>Lovely Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
