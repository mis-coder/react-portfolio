import React, { useState } from "react";
import "../styles/MobNav.css";
import { ReactComponent as ReactLogo } from "../logoAV.svg";
import { Link as HLink } from "react-router-dom";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "../styles/Menu.css";

const MobNav = () => {
  const [IsActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!IsActive);
  };
  return (
    <div className='header'>
      <div className='mob-logo'>
        <HLink to='/'>
          <ReactLogo className='mob-logo' />
        </HLink>
      </div>
      <div className='mob-menu-icon' onClick={handleClick}>
        {IsActive ? <FaTimes /> : <GiHamburgerMenu />}
      </div>
      <div className={IsActive ? "mob-nav" : "mob-nav hide"}>
        <div className='menu'>
          <div className='menu-middle'>
            <div className='menu-container mob'>
              <ul>
                <li className='menu-item'>
                  <Link
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-200}
                    className='menu-link'
                  >
                    <span className='circle'></span>
                    About
                  </Link>
                </li>
                <li className='menu-item'>
                  <Link
                    activeClass='active'
                    spy={true}
                    to='skills'
                    smooth={true}
                    duration={800}
                    offset={-650}
                    className='menu-link'
                  >
                    <span className='circle'></span>
                    Skills
                  </Link>
                </li>
                <li className='menu-item'>
                  <Link
                    activeClass='active'
                    spy={true}
                    to='projects'
                    smooth={true}
                    duration={800}
                    offset={400}
                    className='menu-link'
                  >
                    <span className='circle'></span>
                    Projects
                  </Link>
                </li>
                <li className='menu-item'>
                  <Link
                    activeClass='active'
                    spy={true}
                    to='contact'
                    smooth={true}
                    duration={800}
                    className='menu-link'
                  >
                    <span className='circle'></span>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className='border'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobNav;
