import React from "react";
import "../styles/About.css";
import { BsArrowRight } from "react-icons/bs";
import { ReactComponent as ReactLogo } from "../MyPicture.svg";
const About = () => {
  return (
    <div className='section' id='about'>
      <div className='intro'>
        <p>
          Hi! My name is Antra Verma. I love building state-of-the-art,
          easy-to-use and user-friendly websites and applications. In addition
          to my knowledge base, i stay up-to-date with new technology
          advancements and trends in the industry.
        </p>
        <a
          href='https://docs.google.com/document/d/1IzBYrdhyrEVzljx5f19_OKQWf8fhwzKkFiJvIPdXKRo/edit?usp=sharing'
          className='resume-button'
          target='_blank'
          rel='noreferrer'
        >
          View Resume
          <BsArrowRight className='right-arrow' />
        </a>
      </div>
      <div className='profile-pic'>
        <ReactLogo />
      </div>
    </div>
  );
};

export default About;
