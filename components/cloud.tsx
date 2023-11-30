import React from "react";

const Cloud = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <img
        width="747"
        height="364"
        src="/images/cloud.png"
        alt="Cloud"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,

          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Cloud;
