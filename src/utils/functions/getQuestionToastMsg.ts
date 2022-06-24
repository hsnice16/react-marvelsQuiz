/**
 * getQuestionToastMsg - func to get a random message to
 *                      show on Toast after user selects
 *                      an option for the question
 *
 * @param {string} option
 * @returns string - a message
 */
export const getQuestionToastMsg = (option: string): string => {
  const questionsToastMsg = [
    `Greattt ${option} 👌👌`,
    `bruhh!! awesome 👌👌 ${option}`,
    `hey, this is great!! ${option} 👌👌`,
    `👌👌 you are doing greattt, ${option}`,
    `aha!! ${option}, looks like you know 👌👌`,
  ];

  const randomIndex = Math.floor(Math.random() * questionsToastMsg.length);

  return questionsToastMsg[randomIndex];
};
