import React from "react";

import "./balloon.css";

const Balloon = ({ style }: { style: React.CSSProperties }) => {
  return (
    <div
      className="balloon-wrap"
      style={{
        position: "absolute",
        ...style,
      }}
    >
      <img
        style={{
          width: "12vw",
        }}
        className="balloon"
        src="./images/balloon.png"
        alt="balloon"
      />
    </div>
  );
};
export default Balloon;
