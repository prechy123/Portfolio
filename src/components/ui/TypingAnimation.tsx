"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full-Stack Developer.",
        2000,
        "MERN Stack Developer.",
        1000,
      ]}
      speed={30}
      className="font-bold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
