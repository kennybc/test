"use client";

import React, { memo, useMemo } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Countdown from "../../components/countdown";
import useGame from "../../hooks/game";
import "../../components/questions.css";
import BlurryCloud from "../../components/BlurryCloud";
import { ReactSVG } from "react-svg";
import Answers from "../../components/Answers";
import Lottie from "react-lottie";
import animationData from "../../lotties/congratulations.json";
import useSound from "../../components/Sound";

const Questions = memo(() => {
  const defaultAnimOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const starPointsIcon = useMemo(
    () => (
      <ReactSVG
        className="star-points"
        renumerateIRIElements={false}
        src={`/images/star_badge_no_ribbons-15.svg`}
      />
    ),
    []
  );
  // const [playIntro, setPlayIntro] = useState(true);
  const [playTransitionSound] = useSound(".//../sounds/transition-chime.mp3");
  const router = useRouter();
  const {
    startCountdown,
    questions,
    answers,
    isPopped,
    isPlaying,
    points,
    incorrectQuestionsCount,
    question,
    showComponent,
    showIncorrect,
    onClickAnswer,
    timeIsUp,
    playTransition,
    setPlayTransition,
  } = useGame();

  useEffect(
    () => {
      if (playTransition) {
        playTransitionSound();
        setPlayTransition(false);
      }
      if (isPopped) {
        // TIME IS UP
        console.log("time is up");
        timeIsUp();
        setTimeout(() => router.push("/results"), 6000);
      } else if (
        !isPlaying &&
        answers?.length > 0 &&
        answers?.length === questions?.length
      ) {
        console.log("let's review");
        setTimeout(() => router.push("/results"), 4000);
      }
    }
    // [
    //   incorrectQuestionsCount,
    //   isPopped,
    //   answers,
    //   questions,
    //   isPlaying,
    //   navigate,
    //   playTransition,
    // ]
  );
  return (
    <>
      <div
        className={`questions content${
          startCountdown ? " countdown countdown-" + startCountdown : ""
        }${question?.rank ? " question-" + question?.rank : ""}${
          isPopped ? " is-popped" : ""
        }`}
        style={{
          backgroundImage: "url(./images/questions_BG.jpg)",
          padding: 0,
          filter:
            (showIncorrect || startCountdown || !isPlaying) && !isPopped
              ? "blur(5px)"
              : "none",
        }}
      >
        <div
          className="confetti"
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: 0,
          }}
        >
          <Lottie
            options={defaultAnimOptions}
            height={"100%"}
            width={"100%"}
            isStopped={
              !isPlaying &&
              answers?.length > 0 &&
              answers?.length === questions?.length &&
              incorrectQuestionsCount === 0
                ? false
                : true
            }
          />
        </div>
        <div className="two-columns">
          <div
            className="left-column"
            style={{
              display: "flex",
              padding: "3rem",
              backgroundColor: "#ffffff45",
            }}
          >
            <Countdown />
          </div>
          {question ? (
            <div className="right-column" style={{ padding: "2rem 3rem 3rem" }}>
              <div style={{ padding: "0 6rem 1rem 2rem" }}>
                <div
                  className="credits"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    padding: "0 0 1rem 0",
                  }}
                >
                  <div
                    style={{
                      fontSize: ".6rem",
                      maxWidth: "45%",
                    }}
                  >
                    <img
                      style={{
                        maxHeight: "4rem",
                        width: "200px",
                      }}
                      src="./images/empaveli-logo.svg"
                      alt="Empaveli logo"
                    />
                  </div>
                  <div
                    style={{
                      width: "1rem",
                      opacity: 0,
                      color: "transparent",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      backgroundColor: "white",
                      paddingLeft: "2rem",
                      borderRadius: "10rem",
                      boxShadow: "0px 5px 4px #0000002e",
                      margin: "20px",
                      // minWidth: '12rem',
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      zIndex: 1,
                      animation: "star-points 2.1s 4.5s ease-in-out forwards",
                    }}
                  >
                    {points}
                    {starPointsIcon}
                  </div>
                </div>
                <h1>{question.question}</h1>
                <div style={{ fontSize: "2rem" }}>{question.subtitle}</div>
              </div>
              <div
                className={`answers-wrap${
                  question.className ? " " + question.className : ""
                }`}
              >
                {showComponent && (
                  <Answers
                    question={question}
                    onClickAnswer={onClickAnswer}
                    style={{ overflow: "hidden" }}
                  />
                )}
              </div>
              {question?.footNote ? question?.footNote : ""}
            </div>
          ) : null}
        </div>
        <div
          style={{
            padding: "3.5rem 0.5rem 2rem",
            display: isPopped ? "none" : "flex",
            position: "absolute",
            top: 0,
            opacity: 0,
            right: "3rem",
            background: "white",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0 0 60px 60px",
            boxShadow: "0px 5px 4px #0000002e",
            animation: "fade-up 1s 3.5s ease-in-out forwards",
          }}
        >
          <p
            style={{
              fontSize: ".8rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            QUESTION
          </p>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            {question?.rank}/{questions.length}
          </p>
        </div>
      </div>
      <BlurryCloud
        className="countDownBlock"
        style={{ display: startCountdown ? "flex" : "none" }}
      >
        <ReactSVG
          className="blurry-cloud-content"
          renumerateIRIElements={false}
          src={`/images/number-${
            startCountdown ? startCountdown : 1
          }-pink-PNH-POP-01.svg`}
        />
      </BlurryCloud>

      {/* Incorrect Answer */}
      <BlurryCloud
        className="incorrect-phrase"
        style={{
          display: showIncorrect ? "flex" : "none",
          background: "#00000052",
        }}
      >
        <ReactSVG
          className="blurry-cloud-content up-cloud"
          renumerateIRIElements={false}
          src={`/images/phrase_incorrect-05.svg`}
        />
      </BlurryCloud>

      {/* Time is up */}
      <BlurryCloud
        className={`time-is-up`}
        style={{ display: isPopped ? "flex" : "none" }}
      >
        <ReactSVG
          className="blurry-cloud-content"
          renumerateIRIElements={false}
          src={`/images/phrase_times-up_PNH-POP-02.svg`}
        />
      </BlurryCloud>

      {/* Let's review */}
      <BlurryCloud
        className={`lets-review phrase-anm-is-popped`}
        style={{
          display:
            !isPlaying &&
            answers?.length === questions?.length &&
            incorrectQuestionsCount > 0
              ? "flex"
              : "none",
          animationDelay: "0s",
        }}
      >
        <ReactSVG
          className="blurry-cloud-content"
          renumerateIRIElements={false}
          src={`/images/phrase_lets-review_PNH-POP-08.svg`}
        />
      </BlurryCloud>
      <BlurryCloud
        className={`message-all-correct phrase-anm-is-popped`}
        style={{
          display:
            !isPlaying &&
            answers?.length > 0 &&
            answers?.length === questions?.length &&
            incorrectQuestionsCount === 0
              ? "flex"
              : "none",
          animationDelay: "0s",
        }}
      >
        <ReactSVG
          className="blurry-cloud-content"
          renumerateIRIElements={false}
          src={`/images/phrase_final-message-all-correct_PNH-POP-06.svg`}
        />
      </BlurryCloud>

      {/* Preloading images with the answers for the review page */}
      <link
        rel="preload"
        href={`/images/answers/${
          showIncorrect ? "Incorrect" : "Correct"
        }_question${question?.rank}.jpg`}
        as="image"
      />
    </>
  );
});
export default Questions;
