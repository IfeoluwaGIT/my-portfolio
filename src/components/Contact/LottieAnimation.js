import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../Contact/animation.json'; // Ensure you have your Lottie JSON file


const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LottieAnimation;
