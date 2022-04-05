import React, { useState } from 'react';
import BgImg from '../assests/images/bg-img.png';
import OTP from './OTP';
import SecurityStage from './SecurityStage';
import WelcomeStage from './WelcomeStage';

const Modal = () => {
  const [onBardingStage, setOnBardingStage] = useState('welcome');
  const Security = () => {
    setOnBardingStage('security');
  };
  const OTPStage = () => {
    setOnBardingStage('OTP');
  };
  const Welcome = () => {
    setOnBardingStage('welcome');
  }
  console.log(onBardingStage)
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="img-wrapper">
          <img src={BgImg} alt="bgImg" />
        </div>
        {onBardingStage === 'welcome' ? (
          <WelcomeStage Security={Security} />
        ) : onBardingStage === 'security' ? (
          <SecurityStage OTPStage={OTPStage} />
        ) : (
          <OTP Welcome={Welcome} />
        )}
      </div>
    </div>
  );
};

export default Modal;
