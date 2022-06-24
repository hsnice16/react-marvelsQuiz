type AnswerType = { value: string; score: number };

type AnswersType = {
  one: AnswerType;
  two: AnswerType;
  four: AnswerType;
  five: AnswerType;
  three: AnswerType;
};

/**
 * getTotalScore - func to get the total score value
 * 
 * @param {Object} answers - having structure {
    one: { value: "", score: 0 },
    two: { value: "", score: 0 },
    four: { value: "", score: 0 },
    five: { value: "", score: 0 },
    three: { value: "", score: 0 },
  }
 * @returns sum of all the score attribute
 */
export const getTotalScore = (answers: AnswersType): number => {
  return Object.keys(answers).reduce(
    (totalScore, questionNumber) => answers[questionNumber].score + totalScore,
    0
  );
};
