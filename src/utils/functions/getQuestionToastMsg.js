/**
 * getQuestionToastMsg - func to get a random message to
 *                      show on Toast after user selects
 *                      an option for the question
 *
 * @param {string} option
 * @returns string - a message
 */
export const getQuestionToastMsg = (option) => {
  const questionsToastMsg = [
    `aha!! ${option}, looks like you know 👌👌`,
    `hey, this is great!! ${option} 👌👌`,
    `muhhh!! awesome 👌👌 ${option}`,
    `Greattt ${option} 👌👌`,
    `👌👌 you are doing greattt, ${option}`,
  ];

  const randomIndex = Math.floor(Math.random() * questionsToastMsg.length);

  return questionsToastMsg[randomIndex];
};
