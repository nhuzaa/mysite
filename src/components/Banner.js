import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Rohit Sthapit.</h1>
      <h3>
        <span>Computer Engineer</span> |
        <span>Software Developer</span> | <span>Robotics Enthusiasts</span> | 
        <span>Electronic Hobbyist</span>  
        <br/>
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
