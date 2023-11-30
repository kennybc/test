"use client";

import ButtonLink from "../../components/ButtonLink";
import { useMemo } from "react";
import useGame from "../../hooks/game";
import { ReactSVG } from "react-svg";
const Results = () => {
  const { questions, answers } = useGame();
  const incorrectQuestions = useMemo(
    () => questions.filter((q, i) => answers[i] != q.correctAnswer),
    [questions, answers]
  );

  // if (incorrectQuestions.length === 0) {
  //   setTimeout(() => {
  //     navigate("/save-game-play");
  //   }, 3000);
  // }
  return (
    <div
      className=""
      style={{
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        backgroundImage: "url(./images/review_BG.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`content results`}
        style={{ height: "auto", minHeight: "115%" }}
      >
        <ReactSVG
          style={{ width: "40%" }}
          renumerateIRIElements={false}
          src="/images/phrase_review_PNH-POP-09.svg"
        />
        {questions.map((question, i) => (
          <div className="answer" key={question.rank}>
            <img
              width={"100%"}
              src={`/images/answers/${
                incorrectQuestions.some(
                  (incorrectQuestion) =>
                    incorrectQuestion.rank === question.rank
                )
                  ? "Incorrect"
                  : "Correct"
              }_question${question.rank}.jpg`}
              alt="answer"
            />
          </div>
        ))}

        <div>
          {questions.length === incorrectQuestions.length ? (
            <ButtonLink page="/finish">FINISH</ButtonLink>
          ) : (
            <ButtonLink page="/save-game-play">NEXT</ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
