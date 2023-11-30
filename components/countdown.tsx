import useGame from "../hooks/game";
import { ReactSVG } from "react-svg";
import "./countdown.css";
import { memo, useMemo, useEffect } from "react";
import useSound from "./Sound";
const Countdown = memo(() => {
  const cloudCountdown = useMemo(
    () => (
      <ReactSVG
        className="react-svg cloud-count-down"
        renumerateIRIElements={false}
        src="/images/phrase_title_needle_cloud-12.svg"
      />
    ),
    []
  );
  const { isPopped, timeRemaining, percentRemaining } = useGame();
  var minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
  var seconds = Math.floor(timeRemaining % 60);

  const [playTickingSound] = useSound("./sounds/ticking-clockwav.mp3");
  const [playTimeIsUpSound] = useSound("./sounds/time-is-up-sound.mp3");
  useEffect(() => {
    if (timeRemaining == 10) {
      playTickingSound();
    }
  }, [timeRemaining]);
  useEffect(() => {
    if (isPopped) {
      playTimeIsUpSound();
    }
  }, [isPopped]);
  return (
    <>
      <div
        className={`balloon-countdown${isPopped ? " explosion" : ""}${
          timeRemaining < 30 ? " time-10" : ""
        }`}
        style={{
          display: "flex",
          flexFlow: "column wrap",
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {cloudCountdown}
        <div
          id="balloon-way"
          style={{
            flex: 1,
            justifyContent: "flex-end",
            display: "flex",
            flexDirection: "column",
            height: "auto",
            position: "relative",
            width: "100%",
            zIndex: 0,
          }}
        >
          <div
            id="balloon-container"
            className="balloon-wrap99 balloon-99"
            style={{
              textAlign: "center",
              width: "100%",
              position: "absolute",
              top: `${percentRemaining * 100}%`,
            }}
          >
            <img
              alt=""
              style={{ width: "40%", maxWidth: "20vw" }}
              id="balloon99"
              className="balloon"
              src="/images/balloon.png"
            />
            <ReactSVG
              style={{ width: "100%" }}
              className="react-svg medallion"
              renumerateIRIElements={false}
              src="/images/medallion_pink.svg"
            />
            <img
              className="balloon-stripe"
              style={{ width: "15%" }}
              src="./images/balloon_string.png"
              alt="balloon"
            />
          </div>
        </div>
        <div
          className="count-down"
          style={{
            color: "red",
            fontSize: "1.5rem",
            fontWeight: "bold",
            backgroundColor: "white",
            padding: "1.2rem 3rem",
            borderRadius: "50px",
            margin: "20px",
            minWidth: "75px",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {minutes < 10 ? "0" : ""}
          {minutes <= 0 ? "0" : minutes}:{seconds < 10 ? "0" : ""}
          {seconds <= 0 ? "0" : seconds}{" "}
        </div>
      </div>
    </>
  );
});

export default Countdown;
