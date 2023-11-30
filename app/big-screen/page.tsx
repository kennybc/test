"use client";

import { useEffect } from "react";
import Leaderboard from "../../components/leaderboard";
import ReadyToPlay from "../../components/ready-to-play";
import DidYouKnow from "../../components/did-you-know";
import useGame from "../../hooks/game";

const BigScreenView = ["leaderboard", "readyToPlay", "didYouKnow"];

const BigScreen = () => {
  const { bigScreenView, setBigScreenView } = useGame();
  let bigScreenTimer: number;
  let count = 0;
  const updateCount = () => {
    bigScreenTimer = window.setInterval(() => {
      setBigScreenView(BigScreenView[++count % BigScreenView.length]);
    }, 20000);
  };

  useEffect(() => {
    updateCount();
    return () => clearInterval(bigScreenTimer);
  }, []);

  const getScreen = () => {
    switch (bigScreenView) {
      case "readyToPlay":
        return <ReadyToPlay />;
      case "didYouKnow":
        return <DidYouKnow />;
      default:
        return <Leaderboard />;
    }
  };

  const screen = getScreen();

  return (
    <div
      className={`content ${bigScreenView}-gs`}
      style={{
        backgroundImage:
          bigScreenView === "didYouKnow"
            ? "url(./images/did-you-know_BG.jpg)"
            : "url(./images/background.jpg)",
      }}
    >
      {/* <DidYouKnow /> */}
      {/* <ReadyToPlay /> */}
      {/* <Leaderboard limit='7' /> */}
      {screen}
    </div>
  );
};

export default BigScreen;
