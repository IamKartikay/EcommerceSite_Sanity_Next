import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Copyright ©️2022. All Rights Reserved By boAt</p>
      <p className="  icons">
        <a href="https://www.linkedin.com/in/kartikay-singh-b684bb218"  target="_blank" rel="noopener noreferrer" >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/IamKartikay"  target="_blank" rel="noopener noreferrer" >
        <AiFillGithub />
        </a>
      </p>
      <p className="sd" >Developed By Kartikay Singh</p>
    </div>
  );
};

export default Footer;
