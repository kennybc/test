import { GameQuestion } from "./ContextTypes";

const GameQuestions: Array<GameQuestion> = [
  {
    rank: 1,
    question:
      "Which of the following statements are true regarding the utilization of EMPAVELI?",
    subtitle: "Please choose the correct statement",
    answers: [
      "~220 patients have had EMPAVELIexperience in the US as of 01/31/2023",
      "~450 patients have been treatedwith pegcetacoplan worldwide as of 11/13/2022, including patientsin clinical trials and on commercial drug",
      "~215 US prescribers have had commercial use experience as of 01/31/2023",
      "All of the above",
    ],
    correctAnswer: 3, //starts from 0
    education: "",
    points: 1000,
  },
  {
    rank: 2,
    question: (
      <span>
        After Week 16, Hb improvement with EMPAVELI was sustained through which
        week of the study?
      </span>
    ),
    subtitle: false,
    answers: ["Week 24", "Week 40", "Week 36", "Week 48"],
    correctAnswer: 3,
    education: "",
    // footNote: (
    //   <p style={{ margin: "1rem 0", color: "#707070" }}>
    //     *141 patients with PNH treated with eculizumab.
    //     <br />
    //     <sup>†</sup>121 patients with PNH treated with eculizumab or
    //     ravulizumab.
    //   </p>
    // ),
    points: 1000,
    className: "column-2-answer",
  },
  {
    rank: 3,
    question: (
      <span>
        The second coprimary endpoint was change from baseline in LDH levels at
        Week 26. At Week 26, change from baseline in LDH level was -1870 U/L for
        EMPAVELI-treated patients and -400 U/L for those in the control arm.
      </span>
    ),
    subtitle:
      "If mean LDH in the EMPAVELI arm was 2151 U/L at baseline, the mean LDH was how close to normal range in the study at Week 26?",
    answers: [
      "Within normal range",
      "1.2x the upper limit of normal",
      "1.5x the upper limit of normal",
      "2x the upper limit of normal",
    ],
    correctAnswer: 0,
    education: "",
    points: 1000,
    className: "column-2-answer",
  },
  {
    rank: 4,
    question:
      "Select secondary endpoints of the PRINCE Study were normalization of Hb and LDH.",
    subtitle:
      "Which of the following statements are true regarding the results of these descriptive analyses? At Week 26…",
    answers: [
      <span>
        25% of patients achieved <strong>Hb</strong> normalization with EMPAVELI
      </span>,
      <span>
        46% of patients achieved <strong>Hb</strong> normalization with EMPAVELI
      </span>,
      <span>
        66% of patients achieved <strong>LDH</strong> normalization with
        EMPAVELI
      </span>,
      "Both A and C",
      "Both B and C",
    ],
    correctAnswer: 4,
    education: "",
    points: 1000,
    className: "column-2-answer",
  },
  {
    rank: 5,
    question:
      "Based on an analysis, as of 11/13/2022, what percentage of vaccinated patients treated with EMPAVELI were found to have cases of meningococcal infection?",
    subtitle: false,
    answers: ["0%", "2%", "4%", "6%"],
    correctAnswer: 0,
    education: "",
    points: 1000,
    className: "column-2-answer",
  },
];

export default GameQuestions;
