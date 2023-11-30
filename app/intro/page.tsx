"use client";

import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import useGame from "../../hooks/game";
import Balloon from "../../components/Balloon";
import { ReactSVG } from "react-svg";

const Intro = () => {
  const router = useRouter();
  const { start, questions, setName } = useGame();

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickPlay = async () => {
    setTimeout(() => router.push("/questions"));
    await start();
  };

  return (
    <div
      className="content"
      style={{ backgroundImage: "url(./images/how_to_play_BG.jpg)" }}
    >
      <div
        className="credits"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: ".6rem",
            maxWidth: "45%",
            width: "100%",
            aspectRatio: "707/155",
          }}
        >
          <ReactSVG
            renumerateIRIElements={false}
            src="/images/phrase_title-one-line-star_PNH-POP-04.svg"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Sponsored by:
          <img
            style={{
              maxHeight: "4rem",
              marginLeft: "1.5rem",
              width: "200px",
            }}
            width={200}
            height={57}
            src="./images/empaveli-logo.svg"
            alt="Empaveli logo"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            borderRadius: "25px",
            border: "8px solid white",
            backgroundColor: "white",
            width: "70%",
            zIndex: 1,
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
              padding: "2rem 3.5rem",
              fontSize: "1.3rem",
            }}
          >
            <h1>How to play</h1>
            <p>
              You will have 3 minutes to answer {questions.length} questions.
              The goal is to answer them all before time runs out and the
              balloon pops. The quicker you select the correct answer, the more
              points you get!
            </p>
            <p>
              If you’d like your name to appear on the leaderboard, please enter
              it here.
            </p>

            <div
              style={{
                margin: "1rem 2rem 3rem 2rem",
              }}
            >
              <input
                style={{
                  width: "100%",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
                type="text"
                onChange={onChangeName}
              />
            </div>
            <Button onClick={onClickPlay}>PLAY NOW</Button>
          </div>
        </div>
        <Balloon style={{ right: "5%", animationDuration: "15s" }} />
        <Balloon style={{ left: "5%", animationDuration: "43s" }} />
        <Balloon style={{ right: "25%" }} />
        <Balloon style={{ left: "25%", animationDelay: "9s" }} />
      </div>
    </div>
  );
};

export default Intro;
