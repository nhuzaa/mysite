import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Well this part is hard to write but I will try. 
          I am a Computer Engineering graduates with varied interest. 
          I love too work on Software/Electronics projects, most of my time I 
          usually just code with my headphones on but I also love 
          talking about Start ups, Tech, Science and any thing in between.
          I try to avoid small talk, deep meaning talk is what itrigues me. 

        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Rohit Ratna Sthapit</span>
              <br />
              <span>
                Newroad,
                <br /> 
                Kathmandu, Nepal
              </span>
              <br />
              <span>9849338541</span>
              <br />
              <span>nhuzaa@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
