import React from 'react';
import Chat from '../assests/images/chat.png';

const SecurityStage = ({OTPStage}) => {
  return (
    <div className="text-wrapper">
      <h4>2FA & Security</h4>
      <div className="secondSub-text">
        <p>We are exicted to welcome you to the biggest IBNPL across Africa.</p>
        <p>
          We are looking for the customer credit space very differently and our
          partnership for funding and embeded makes it a win-win for everyone.
        </p>
      </div>
      <div className="number-input">
        <input type="text" placeholder="0811 889 7880" />
        <span>Change</span>
      </div>
      <span className="secondButton" onClick={OTPStage}>
        Get OTP
      </span>
      <div className="chat-image">
        <img src={Chat} alt="ballon" />
      </div>
    </div>
  );
};

export default SecurityStage;
