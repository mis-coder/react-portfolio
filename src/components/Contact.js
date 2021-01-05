import React from "react";
import "../styles/Contact.css";
import { BsArrowRight } from "react-icons/bs";
import { ReactComponent as ReactLogo } from "../Contact.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className='contact-container'>
        <div className='contact-svg'>
          <ReactLogo />
          <h3 className='contact-us'>Contact Us</h3>
        </div>
        <Link to='/contactform' className='resume-button'>
          Say Hello
          <BsArrowRight className='right-arrow' />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
