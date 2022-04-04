import React from 'react';
import Logo from '../assests/images/logo.png';
import { FaGift } from 'react-icons/fa';
import { FaToolbox } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { FaAngleDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="img-wrapper">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav">
      <ul className="nav-wrapper">
        <li>
          <FaGift />
          <p>Requests</p>
        </li>
        <li>
          <FaToolbox />
          <p>Portfolio</p>
        </li>
        <li>
          <FaEllipsisH />
          <p>More</p>
        </li>
      </ul>
      <div className="user-wrapper">
        <div className="user">
          <FaUserAlt />
        </div>
        <FaAngleDown />
      </div>
      </div>
    </div>
  );
};

export default Header;
