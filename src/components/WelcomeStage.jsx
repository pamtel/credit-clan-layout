import React from 'react';
import Baloon from '../assests/images/baloon.png';

const WelcomeStage = ({Security}) => {
  return (
    <div className="text-wrapper">
      <h4>
        Welcome to <br /> partners dashboard
      </h4>
      <div className="sub-text">
        <p>We are exicted to welcome you to the biggest IBNPL across Africa.</p>
        <p>
          We are looking for the customer credit space very differently and our
          partnership for funding and embeded makes it a win-win for everyone.
        </p>
      </div>
      <span className="button" onClick={Security}></span>
      <div className="bottom-image">
        <img src={Baloon} alt="ballon" />
      </div>
    </div>
  );
};

export default WelcomeStage;
