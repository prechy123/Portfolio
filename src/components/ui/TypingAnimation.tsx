"use client";

import { TypeAnimation } from "react-type-animation";

interface TypingAnimationProps {
  texts?: string[];
}

const TypingAnimation = ({ texts }: TypingAnimationProps) => {
  const defaultTexts = [
    "Full Stack Developer",
    "App Developer",
    "AWS Certified Developer",
    "AWS & Azure Enthusiast",
    "AI Developer"
  ];

  const displayTexts = texts || defaultTexts;

  // Create sequence array for react-type-animation
  const sequence = displayTexts.flatMap((text) => [text, 2000]);

  return (
    <TypeAnimation
      sequence={sequence}
      speed={30}
      className="font-bold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
