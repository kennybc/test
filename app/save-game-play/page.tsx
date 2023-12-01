"use client";

// import { useMemo } from "react";
import { useRouter } from "next/navigation";
import useGame from "../../hooks/game";
import { ReactSVG } from "react-svg";
import Button from "../../components/Button";
import LeaderBoardRow from "../../components/LeaderBoardRow";
import useSound from "@/components/Sound";
import { useEffect } from "react";

const SaveGamePlay = () => {
  const [playTransitionSound] = useSound(".//../sounds/transition-chime.mp3");
  const [playBellSound] = useSound(".//../sounds/bell.mp3");
  const soundTimeOut: Function = () => {
    setTimeout(() => playBellSound(), 1800);
    setTimeout(() => playTransitionSound(), 300);
  };
  useEffect(() => {
    soundTimeOut();
  }, []);
  const router = useRouter();
  const { leaders, points, place, name, setPlace, setName } = useGame();
  const onClickDone = async (to: string) => {
    setPlace(0);
    setName(null);
    router.push(to);
  };
  let board5Leaders = [...leaders];
  return (
    <div
      className={`content save-game`}
      style={{
        filter: "blur(0px)",
        backgroundImage: "url(./images/results_page_BG.jpg)",
      }}
    >
      <div
        className="confetti"
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: -1,
          filter: "blur(3px)",
        }}
      ></div>
      <div className="two-columns">
        <div
          className="left-column"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReactSVG
            renumerateIRIElements={false}
            src="/images/phrase_title-one-line-star_PNH-POP-04.svg"
          />
          <div
            style={{
              borderRadius: "25px",
              border: "8px solid white",
              backgroundColor: "white",
              marginTop: "3rem",
              width: "100%",
              zIndex: 1,
              boxShadow: "rgb(0 0 0 / 18%) 0px 5px 4px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "20px",
                border: "5px solid #D7335E",
                textAlign: "center",
                padding: "2rem 1rem",
              }}
            >
              <ReactSVG
                className="star-ribbons-gj"
                renumerateIRIElements={false}
                src={`/images/star_badge_ribbons-16.svg`}
              />
              <div
                style={{
                  padding: "4rem 0 8rem",
                }}
              >
                <h1>
                  <p>Great job{name ? ", " + name : ""}!</p>
                  <p>
                    You came in {place}
                    <sup>
                      {place === 3
                        ? "rd"
                        : place === 2
                        ? "nd"
                        : place === 1
                        ? "st"
                        : "th"}
                    </sup>{" "}
                    place and earned {points} points!
                  </p>
                  {/* <p style={{ margin: 0,  }}>{correctQuestionsCount * 1000}<span style={{ fontSize: '70%'}}> for  {correctQuestionsCount} correct answer{correctQuestionsCount > 1 ? "s":""}</span></p>
                    <p style={{ margin: 0,  }}>+</p>
                    <p style={{ margin: 0,  }}>{timeRemaining * 10 } <span style={{ fontSize: '70%'}}>remainig time ({timeRemaining}s) * 10</span> </p>
                    <p style={{ margin: 0,  }}>=</p>
                    <p style={{ margin: '.5rem',  }}>{points} - Total</p>                     */}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="right-column"
          style={{
            padding: "0 3rem 3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "02rem",
              backgroundColor: "white",
              display: "flex",
              flexFlow: "column nowrap",
              alignItems: "center",
              borderRadius: "5px",
              boxShadow: "rgb(0 0 0 / 18%) 0px 5px 4px",
            }}
          >
            <h1>LEADERBOARD</h1>
            {board5Leaders
              .filter((l, i) => i <= place + 4 && i >= place - 3)
              .slice(0, 5)
              .map((leader, index) => (
                <LeaderBoardRow
                  key={leader.id}
                  leader={leader}
                  startsAt={Math.max(
                    0,
                    Math.min(place - 3, leaders.length - 3)
                  )}
                  index={index}
                  leaderShow={true}
                ></LeaderBoardRow>
              ))}
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <Button onClick={() => onClickDone("/leaderboard")}>
                GO TO LEADERBOARD
              </Button>
              <Button onClick={() => onClickDone("/")}>FINISH</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Sound
      url="./sounds/transition-chime.mp3"
      playStatus={ Sound.status.PLAYING}
    /> */}
    </div>
  );
};

export default SaveGamePlay;
