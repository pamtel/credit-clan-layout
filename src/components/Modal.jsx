import React, { useState } from 'react';
import BgImg from '../assests/images/bg-img.png';
import Baloon from '../assests/images/baloon.png';
import Chat from '../assests/images/chat.png'

const Modal = () => {
  const [secondClick, setSecondClick] = useState(false);
  const confirmSecondClick = () => {
    setSecondClick(true);
  };
  console.log(secondClick);
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="img-wrapper">
          <img src={BgImg} alt="bgImg" />
        </div>
        {/* {secondClick ? (
          <div className="text-wrapper">
            <h4>
              Welcome to <br /> partners dashboard
            </h4>
            <div className="sub-text">
              <p>
                We are exicted to welcome you to the biggest IBNPL across
                Africa.
              </p>
              <p>
                We are looking for the customer credit space very differently
                and our partnership for funding and embeded makes it a win-win
                for everyone.
              </p>
            </div>
            <span className="button" onClick={() => confirmSecondClick}></span>
            <div className="bottom-image">
              <img src={Baloon} alt="ballon" />
            </div>
          </div>
        ) : (
          <div className="text-wrapper">
            <h4>2FA & Security</h4>
            <div className="secondSub-text">
              <p>
                We are exicted to welcome you to the biggest IBNPL across
                Africa.
              </p>
              <p>
                We are looking for the customer credit space very differently
                and our partnership for funding and embeded makes it a win-win
                for everyone.
              </p>
            </div>
            <div className="number-input">
              <input type="text" placeholder="0811 889 7880" />
              <span>Change</span>
            </div>
            <span className="secondButton" onClick={() => {}}>Get OTP</span>
            <div className="chat-image">
              <img src={Chat} alt="ballon" />
            </div>
          </div>
        )} */}
        <div className="text-wrapper">
            <h4>Enter OTP</h4>
            <div className="secondSub-text">
              <p>
                1. Save the number +234 (0)90 53 53 53 33 on whatsapp on Creditclan
              </p>
              <p>
                2. Chat the keyword OTP
              </p>
              <p>
                3. A 6 digit keyword is created
              </p>
            </div>
            <div className="number-input">
              <input type="text" placeholder="0811 889 7880" />
              <span>Change</span>
            </div>
            <span className="button" onClick={() => confirmSecondClick}></span>
            <div className="chat-image">
              <img src={Chat} alt="ballon" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Modal;
