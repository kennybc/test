import "./answers.css";
import useGame from "../hooks/game";
import useSound from "./Sound";
import { GameQuestion } from "@/context/ContextTypes";
import { useEffect } from "react";

const Answers = ({
  question,
  onClickAnswer,
  style,
}: {
  question: GameQuestion;
  onClickAnswer: Function;
  style: React.CSSProperties;
}) => {
  const [playCorrecSound] = useSound(".//../sounds/ping-correct.mp3");
  const [playIncorrectSound] = useSound(".//../sounds/ping-incorrect.mp3");
  const { clickedAnswer } = useGame();
  useEffect(() => {
    if (clickedAnswer?.answerPoint === "correct") {
      playCorrecSound();
    } else if (clickedAnswer?.answerPoint === "incorrect") {
      playIncorrectSound();
    }
  }, [clickedAnswer]);
  const letters = ["A", "B", "C", "D", "E", "F"];
  return question.answers.map((answer, index) => (
    <div
      key={index}
      onClick={() => (!clickedAnswer ? onClickAnswer(index) : false)}
      style={{ ...style }}
      className={`answer-wrap q-${index + 1} ${
        index === clickedAnswer?.answerIndex ? clickedAnswer?.answerPoint : ""
      }`}
    >
      <div
        className="answer-container"
        style={{
          animationDelay:
            (question.rank === 1 ? index * 100 + 3000 : index * 100) + "ms",
        }}
      >
        <div className={`answer-index`} style={{}}>
          {index === clickedAnswer?.answerIndex ? (
            clickedAnswer.answerPoint === "correct" ? (
              <img
                id={index.toString()}
                style={{
                  maxHeight: "4rem",
                  width: "2rem",
                }}
                src={`./images/correct-mark.svg?${question.rank}`}
                alt="correct-mark"
              />
            ) : (
              <img
                id={index.toString()}
                style={{
                  maxHeight: "4rem",
                  width: "2rem",
                }}
                src={`./images/incorrect-mark.svg?${question.rank}`}
                alt="incorrect-mark"
              />
            )
          ) : (
            letters[index]
          )}
        </div>
        <div className="answer-text">{answer}</div>
      </div>
    </div>
  ));
};
export default Answers;
