import { createContext } from "react";
import * as ContextTypes from "./ContextTypes";

type Context = {
  name: string | null;
  points: number | null;
  place: number;
  questions: ContextTypes.GameQuestion[];
  answers: number[];
  leaders: ContextTypes.GamePlay[];
  timeRemaining: number;
  percentRemaining: any;
  isPlaying: any;
  isPopped: any;
  bigScreenView: string | null;
  startCountdown: any;
  question: ContextTypes.GameQuestion | null;
  questionIndex: any;
  incorrectQuestionsCount: number;
  showIncorrect: any;
  showComponent: any;
  archive: ContextTypes.GamePlay[];
  clickedAnswer: ContextTypes.ClickedAnswer | null;
  playTransition?: any;
  setPlayTransition?: any;

  setName: Function;
  setPoints: Function;
  // addPoints: Function;
  setPlace: Function;
  setQuestions: Function;
  setAnswers: Function;
  setLeaders: Function;
  setTimeRemaining: Function;
  setPercentRemaining: Function;
  setIsPopped: Function;
  setBigScreenView: Function;
  setStartCountdown: Function;
  save: Function;
  start: Function;
  stop: Function;
  gotoNextQuestion: Function;
  onClickAnswer: Function;
  timeIsUp: Function;
  setArchive: Function;
};

const ContextParams: Context = {
  name: null,
  points: null,
  place: 0,
  questions: [],
  answers: [],
  leaders: [],
  timeRemaining: 0,
  percentRemaining: null,
  isPlaying: null,
  isPopped: null,
  bigScreenView: null,
  startCountdown: null,
  question: null,
  questionIndex: null,
  incorrectQuestionsCount: 0,
  showIncorrect: null,
  showComponent: null,
  archive: [],
  clickedAnswer: null,

  setName: () => {},
  setPoints: () => {},
  // addPoints: () => {},
  setPlace: () => {},
  setQuestions: () => {},
  setAnswers: () => {},
  setLeaders: () => {},
  setTimeRemaining: () => {},
  setPercentRemaining: () => {},
  setIsPopped: () => {},
  setBigScreenView: () => {},
  setStartCountdown: () => {},
  save: async () => {},
  start: async () => {},
  stop: async () => {},
  gotoNextQuestion: async () => {},
  onClickAnswer: async () => {},
  timeIsUp: async () => {},
  setArchive: () => {},
};

const GameContext = createContext<Context>(ContextParams);

export default GameContext;
