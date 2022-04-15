/**
 * getTotalScore - func to get the total score value
 * 
 * @param {Object} answers - having structure {
    one: { value: "", score: 0 },
    two: { value: "", score: 0 },
    three: { value: "", score: 0 },
    four: { value: "", score: 0 },
    five: { value: "", score: 0 },
  }
 * @returns sum of all the score attribute
 */
export const getTotalScore = (answers) => {
  return Object.keys(answers).reduce(
    (totalScore, questionNumber) => answers[questionNumber].score + totalScore,
    0
  );
};
