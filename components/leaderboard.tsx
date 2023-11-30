import useGame from "../hooks/game";
import Balloon from "./Balloon";
import { ReactSVG } from "react-svg";
import LeaderBoardRow from "./LeaderBoardRow";

const Leaderboard = () => {
  const { leaders } = useGame();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <ReactSVG
          className="leaderboard"
          renumerateIRIElements={false}
          src="/images/phrase_leaderboard_PNH-POP-10.svg"
        />
      </div>

      <div
        className="leaderboard-table-wrap"
        style={{
          backgroundColor: "white",
          width: "70%",
          zIndex: 1,
          display: "flex",
          borderRadius: "5px",
          padding: "1rem 1.5rem",
          flex: 1,
          boxShadow: "rgb(0 0 0 / 18%) 0px 5px 4px",
        }}
      >
        <div
          className="leaderboard-table"
          style={{
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
          }}
        >
          {leaders ? (
            leaders
              .slice(0)
              .map((leader, index) => (
                <LeaderBoardRow
                  key={leader.id}
                  leader={leader}
                  index={index}
                ></LeaderBoardRow>
              ))
          ) : (
            <p>NO LEADERS</p>
          )}
        </div>
      </div>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          backgroundColor: "white",
          paddingRight: "25px",
          borderRadius: "10rem",
          boxShadow: "0px 5px 4px #0000002e",
          margin: "20px",
          minWidth: "200px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <ReactSVG
          className="star-points"
          renumerateIRIElements={false}
          src={`/images/balloon_hashtag-19.svg`}
        />
        <div
          style={{
            paddingLeft: "1rem",
          }}
        >
          <ReactSVG
            className="pnh-pop-leaderboard"
            renumerateIRIElements={false}
            src={`/images/phrase_title-hashtag_PNH-POP-11.svg`}
          />
        </div>
      </div>

      <Balloon style={{ right: "5%", animationDuration: "15s" }} />
      <Balloon style={{ left: "5%", animationDuration: "43s" }} />
      <Balloon style={{ right: "25%" }} />
      <Balloon style={{ left: "25%", animationDelay: "9s" }} />
    </>
  );
};

export default Leaderboard;
