import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/NhuZaa">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/NhuZaa">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/nhuzaa">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/nhuzaa/">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/nhuzaa">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
