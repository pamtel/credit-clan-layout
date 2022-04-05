import React from 'react';
import Chat from '../assests/images/chat.png';

const OTP = ({Welcome}) => {
  return (
    <div className="text-wrapper">
      <h4>Enter OTP</h4>
      <div className="secondSub-text">
        <p>
          1. Save the number +234 (0)90 53 53 53 33 on whatsapp on Creditclan
        </p>
        <p>2. Chat the keyword OTP</p>
        <p>3. A 6 digit keyword is created</p>
      </div>
      <div className="third-number-input">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <span className="button" onClick={Welcome}>Verify</span>
      <div className="chat-image">
        <img src={Chat} alt="ballon" />
      </div>
    </div>
  );
};

export default OTP;
