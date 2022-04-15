import { useGame } from "context";
import PropTypes from "prop-types";
import { QuestionsData } from "data";
import { OptionsUL } from "components";
import { capitalizeFirstLetter } from "utils";
import { ACTION_TYPE_SET_ANSWER } from "reducer";
import { PrevNextLink, QuestionNumber } from "./components";
import { useDocumentTitle, useScrollToTop } from "custom-hooks";

export const ShowQuestion = ({ category, questionNumber }) => {
  const {
    name,
    questions: {
      [questionNumber]: {
        number,
        statement,
        options,
        answer,
        link: { prev, next },
      },
    },
  } = QuestionsData[category];

  const {
    game: { answers },
    dispatch,
  } = useGame();

  const handleChange = (option) => {
    dispatch({
      type: ACTION_TYPE_SET_ANSWER,
      payload: {
        answer: {
          key: questionNumber,
          value: option,
          score: answer === option ? 2 : 0,
        },
      },
    });
  };

  useDocumentTitle(
    `${name}, Question ${capitalizeFirstLetter(questionNumber)}`
  );
  useScrollToTop(questionNumber);

  return (
    <main className="main px-4 py-2">
      <div className="fs-lg mb-4 mt-2 text-center">{name}</div>

      <section className="container-question">
        <QuestionNumber number={number} />

        <h1 className="fs-3 text-center">{statement}</h1>

        <OptionsUL
          options={options}
          answer={answers[questionNumber].value}
          category={category}
          questionNumber={questionNumber}
          handleChange={handleChange}
        />

        <PrevNextLink category={category} prev={prev} next={next} />
      </section>
    </main>
  );
};

ShowQuestion.propTypes = {
  category: PropTypes.string,
  questionNumber: PropTypes.string,
};

ShowQuestion.defaultProps = {
  category: "",
  questionNumber: "",
};
