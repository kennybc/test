export interface GameQuestion {
  rank: number;
  question: React.ReactNode;
  subtitle: string | false;
  answers: Array<React.ReactNode>;
  correctAnswer: number;
  education: string;
  points: number;
  className?: string;
  footNote?: React.ReactNode;
}

export interface ClickedAnswer {
  answerIndex: number;
  answerPoint: "correct" | "incorrect";
}

export interface GamePlay {
  id?: number;
  name: string;
  answers: number[];
  points: number;
  time: number;
}
