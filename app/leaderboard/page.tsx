"use client";

import Leaderboard from "../../components/leaderboard";
import ButtonLink from "../../components/ButtonLink";
import { useEffect } from "react";
import useSound from "@/components/Sound";

const LeaderboardPage = () => {
  const [playTransitionSound] = useSound(".//../sounds/transition-chime.mp3");
  useEffect(() => {
    setTimeout(() => playTransitionSound(), 300);
  }, []);

  return (
    <>
      <div
        className="content leaderboard-ss"
        style={{ backgroundImage: "url(./images/leaderboard_BG.jpg)" }}
      >
        <div
          style={{
            position: "absolute",
            top: "6rem",
            right: "5%",
            zIndex: 3,
          }}
        >
          <ButtonLink page="/">HOME</ButtonLink>
        </div>
        <Leaderboard />
      </div>
    </>
  );
};

export default LeaderboardPage;
