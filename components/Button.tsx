import React from "react";
import useSound from "./Sound";

import "./button.css";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: Function;
}) => {
  const [playClickSound] = useSound(".//../sounds/click-effect.mp3");
  return (
    <button
      className="btn"
      onClick={() => {
        onClick();
        playClickSound();
      }}
    >
      {children}
    </button>
  );
};
export default Button;
