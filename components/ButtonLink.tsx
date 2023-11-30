import React from "react";
import Link from "next/link";
import useSound from "./Sound";

import "./button.css";

const ButtonLink = ({
  children,
  page,
}: {
  children: React.ReactNode;
  page: string;
}) => {
  const [playClickSound] = useSound(".//../sounds/click-effect.mp3");
  return (
    <>
      <Link
        className="btn"
        href={page}
        onClick={() => {
          playClickSound();
        }}
      >
        {children}
      </Link>
    </>
  );
};
export default ButtonLink;
