import React from "react";
import useGame from "../hooks/game";
import { GamePlay } from "@/context/ContextTypes";

const LeaderBoardRow = ({
  startsAt = 0,
  leader,
  index,
  leaderShow = false,
}: {
  startsAt?: number;
  leader: GamePlay;
  index: number;
  leaderShow?: boolean;
}) => {
  const { place } = useGame();
  return (
    <div
      key={leader.id}
      className={`answer-wrap${
        leaderShow && startsAt + index === place - 1 ? " current-leader" : ""
      }`}
      style={{
        width: "100%",
        fontSize: "1.5rem",
        textTransform: "uppercase",
        margin: "0",
      }}
    >
      <div className="answer-container">
        <div className="answer-index">{startsAt + index + 1}</div>
        <div
          className="answer-text"
          style={{
            fontWeight: "bold",
          }}
        >
          {leader.name}
        </div>
        <div
          className=""
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            marginRight: "1rem",
          }}
        >
          {leader.points}
        </div>
      </div>
    </div>
  );
};
export default LeaderBoardRow;
