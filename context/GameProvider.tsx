"use client";

import { useEffect, useState, useRef } from "react";
import GameContext from "./GameContext";
import GameQuestions from "./GameQuestions";
import { useMemo } from "react";
import useSound from "@/components/Sound";
import * as ContextTypes from "./ContextTypes";

const MAX_GAME_TIME = 180; //seconds
// const MAX_GAME_TIME = 30;

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [timer, setTimer] = useState<number>(0);
  const [name, setName] = useState(null);
  const [startCountdown, setStartCountdown] = useState(0);
  const [points, setPoints] = useState<number>(0);
  const [clickedAnswer, setClickedAnswer] =
    useState<ContextTypes.ClickedAnswer | null>(null);
  const [place, setPlace] = useState(0);
  const [questions, setQuestions] = useState<ContextTypes.GameQuestion[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [leaders, setLeaders] = useState<ContextTypes.GamePlay[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(MAX_GAME_TIME);
  const [percentRemaining, setPercentRemaining] = useState(100);
  const [isPopped, setIsPopped] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [bigScreenView, setBigScreenView] = useState<string>("leaderboard");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showComponent, setShowComponent] = useState(true);
  const stateIsPlayingRef = useRef<boolean>();
  stateIsPlayingRef.current = isPlaying;
  const [playIntro, setPlayIntro] = useState(false);
  const [playTransition, setPlayTransition] = useState(false);
  const [archive, setArchive] = useState<ContextTypes.GamePlay[]>([]);
  // const [startTime, setStartTime] = useState(new Date().getTime());
  let startTime = new Date().getTime();

  const [playStartSound] = useSound(".//../sounds/starting-game.mp3");
  const [playIncorrectSound] = useSound(".//../sounds/negative-beep.mp3");
  const [playResultsSound] = useSound(
    ".//../sounds/wind-chimes-transition.mp3"
  );
  const [playPerfectSound] = useSound(".//../sounds/tada-fanfare.mp3");

  const question = useMemo(() => {
    if (questions && questions.length && questions[questionIndex]) {
      return questions[questionIndex];
    } else {
      return null;
    }
  }, [questions, questionIndex]);

  const incorrectQuestionsCount = useMemo(
    () =>
      questions.filter(
        (q: ContextTypes.GameQuestion, i) =>
          answers.length > i && answers[i] !== q.correctAnswer
      ).length,
    [questions, answers]
  );

  const stop = async (finalPoints: number) => {
    if (!isPlaying) {
      console.log("already stopped..");
      return;
    }

    setPlaying(false);

    if (timer) {
      clearTimeout(timer);
      setTimeout(() => setTimer(0));
    }

    incorrectQuestionsCount == 0 ? playPerfectSound() : playResultsSound();

    /*const higherGamePlays = await DataStore.query(GamePlay, (c) =>
      c.points.ge(finalPoints)
    );
    setPlace(higherGamePlays.length + 1);*/
  };

  const sleep = async (duration: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, duration);
    });

  const start = async () => {
    console.log("start");
    playStartSound();

    if (isPlaying) {
      console.log("already started");
      return;
    }

    setPlaying(true);
    setShowComponent(true);
    setIsPopped(false);
    setPoints(0);
    setPlace(0);
    setAnswers([]);
    setQuestionIndex(0);
    setTimeRemaining(MAX_GAME_TIME);

    // count down 3.. 2.. 1..
    setStartCountdown(3);
    setPlayIntro(true);
    await sleep(1000);
    setStartCountdown(2);
    await sleep(1000);
    setStartCountdown(1);
    await sleep(1000);
    setStartCountdown(0);

    setPercentRemaining(100);
    startTime = new Date().getTime();
    updateTime();
  };

  // let startTime = new Date().getTime();
  const updateTime = async () => {
    const currentTime = new Date().getTime();
    const duration = (currentTime - startTime) * 0.001;
    // console.log(currentTime, startTime, duration);
    setPercentRemaining((MAX_GAME_TIME - duration) / MAX_GAME_TIME);
    setTimeRemaining(MAX_GAME_TIME - Math.ceil(duration));
    if (duration >= MAX_GAME_TIME) {
      setIsPopped(true);
      await stop(points);
    } else if (stateIsPlayingRef.current) {
      setTimer(window.setTimeout(updateTime, 150));
    }
  };

  const save = async (finalPoints: number) => {
    fetch("/api/database/active", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name ? name : "ANONYMOUS",
        answers: answers.toString(),
        points: finalPoints,
        time: Math.round(MAX_GAME_TIME - timeRemaining),
      }),
    }).then(() => updateLeaderboard());
  };

  const updateLeaderboard = () => {
    fetch("/api/database/active")
      .then((response) => response.json())
      .then((json) => setLeaders(json));
  };

  const timeIsUp = async () => {
    const finalPoints = points;
    await stop(finalPoints);
    await save(finalPoints);
  };

  const gotoNextQuestion = async (finalPoints: number) => {
    setPlayTransition(true);
    const hasMoreQuestions = questionIndex < questions.length - 1;
    setClickedAnswer(null);
    if (hasMoreQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      await stop(finalPoints);
      await save(finalPoints);
    }
  };
  const onClickAnswer = (index: number) => {
    const isCorrect = index === question?.correctAnswer;
    const isLastQuestion = questionIndex === questions.length - 1;
    const currentPoints = isCorrect ? points + question.points : points;

    // if the last question and have at least one correct answer
    const bonusPoints =
      (points || isCorrect) && isLastQuestion ? timeRemaining * 10 : 0;

    const finalPoints = currentPoints + bonusPoints;

    if (!isLastQuestion) {
      setTimeout(() => setShowComponent(false), 1480);
    }
    setAnswers(answers.concat([index]));
    setClickedAnswer({
      answerIndex: index,
      answerPoint: isCorrect ? "correct" : "incorrect",
    });

    if (isCorrect) {
      setPoints(finalPoints);
      setTimeout(() => gotoNextQuestion(finalPoints), 1500);
      setTimeout(() => setShowComponent(true), 1500);
    } else {
      const currentTime = new Date().getTime();
      startTime = currentTime - ((MAX_GAME_TIME - timeRemaining) * 1000 - 2500);
      clearTimeout(timer);
      setTimer(0);
      if (isLastQuestion) {
        setPoints(finalPoints);
      }
      setTimeout(() => {
        setShowIncorrect(true);
        setClickedAnswer(null);
        playIncorrectSound();
      }, 1500);
      setTimeout(() => {
        updateTime();
        gotoNextQuestion(finalPoints);
        setShowIncorrect(false);
        setShowComponent(true);
      }, 2800);
    }
  };
  // const soundBell = new Audio(
  //   "./sounds/transition-chime.mp3"
  // );
  // useEffect(() => {
  //   if (playTransition) {
  //     // setTimeout(() => soundBell.play(), 0);
  //     // soundBell.onended = setPlayTransition(false);

  //   }
  // }, [playTransition]);

  useEffect(() => {
    // set questions
    setQuestions(GameQuestions);

    // get real-time bigScreenViewChange
    /*const bigScreenViewChangeSubscription = new PubSub()
      .subscribe({ topics: "bigScreenViewChange" })
      .subscribe({
        next: (data) => setBigScreenView(data.bigScreenView as string),
        error: (error) => console.error(error),
        complete: () => console.log("Done"),
      });

    // get real-time leaders
    const leadersSubscription = DataStore.observeQuery(
      GamePlay,
      Predicates.ALL,
      {
        sort: (s) =>
          s.points(SortDirection.DESCENDING) && s.time(SortDirection.ASCENDING),
      }
    ).subscribe((data) => {
      setLeaders(data.items as ContextTypes.Leader[]);
    });

    const archiveSubscription = DataStore.observeQuery(
      ArchiveGamePlay,
      Predicates.ALL,
      {
        sort: (s) =>
          s.points(SortDirection.DESCENDING) && s.time(SortDirection.ASCENDING),
      }
    ).subscribe((data) => {
      setArchive(data.items as ContextTypes.ArchiveGame[]);
    });

    return () => {
      bigScreenViewChangeSubscription.unsubscribe();
      leadersSubscription.unsubscribe();
      archiveSubscription.unsubscribe();
    };*/
  }, [setQuestions]);

  return (
    <>
      <GameContext.Provider
        value={{
          name,
          setName,
          points,
          setPoints,
          place,
          setPlace,
          questions,
          setQuestions,
          answers,
          setAnswers,
          leaders,
          setLeaders,
          save,
          start,
          stop,
          timeRemaining,
          setTimeRemaining,
          percentRemaining,
          setPercentRemaining,
          isPopped,
          setIsPopped,
          isPlaying,
          startCountdown,
          setStartCountdown,
          bigScreenView,
          setBigScreenView,
          question,
          questionIndex,
          incorrectQuestionsCount,
          showIncorrect,
          showComponent,
          gotoNextQuestion,
          timeIsUp,
          onClickAnswer,
          clickedAnswer,
          // clickSound,
          // setClickSound,
          playTransition,
          setPlayTransition,
          archive,
          setArchive,
        }}
      >
        {children}
      </GameContext.Provider>
      {/* <Sound
      url="./sounds/ping-correct.mp3"
      playStatus={ clickedAnswer.answerPoint === "correct" ? Sound.status.PLAYING : Sound.status.STOPPED}
      autoLoad = {true}
    /> */}
      {/* <Sound
      url="./sounds/ping-incorrect.mp3"
      playStatus={ clickedAnswer.answerPoint === "incorrect" ? Sound.status.PLAYING : Sound.status.STOPPED}
      autoLoad = {true}
    /> */}
      {/* <Sound
      url="./sounds/transition-chime.mp3"
      playStatus={ playTransition ? Sound.status.PLAYING : Sound.status.STOPPED}
      onFinishedPlaying={ () => setPlayTransition(false) }
    /> */}
    </>
  );
};

export default GameProvider;
