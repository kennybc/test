import React from "react";
import Cloud from "./cloud";
const BlurryCloud = ({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className: string;
  style: React.CSSProperties;
}) => {
  return (
    <div
      className={className + " blurry-cloud"}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        ...style,
      }}
    >
      <div
        style={{
          width: "50%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Cloud>{children}</Cloud>
      </div>
    </div>
  );
};
export default BlurryCloud;
