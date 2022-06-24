import React from "react";
import { QuestionsData } from "data";
import { PrevNextLink } from "./components";
import { useGame, useToast } from "context";
import { ACTION_TYPE_SET_ANSWER } from "reducer";
import { OptionsUL, QuestionNumber } from "components";
import { useDocumentTitle, useScrollToTop } from "custom-hooks";
import { capitalizeFirstLetter, getQuestionToastMsg } from "utils";

type ShowQuestionPropTypes = {
  category: string;
  questionNumber: string;
};

export const ShowQuestion = ({
  category,
  questionNumber,
}: ShowQuestionPropTypes) => {
  const {
    name,
    questions: {
      [questionNumber]: {
        answer,
        number,
        options,
        statement,
        link: { prev, next },
      },
    },
  } = QuestionsData[category];

  const {
    dispatch,
    game: { answers },
  } = useGame();
  const { handleAddMoreToasts } = useToast();

  const handleChange = (option) => {
    dispatch({
      type: ACTION_TYPE_SET_ANSWER,
      payload: {
        answer: {
          value: option,
          key: questionNumber,
          score: answer === option ? 2 : 0,
        },
      },
    });

    handleAddMoreToasts({
      msg: getQuestionToastMsg(option),
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
          category={category}
          handleChange={handleChange}
          questionNumber={questionNumber}
          answer={answers[questionNumber].value}
        />

        <PrevNextLink category={category} prev={prev} next={next} />
      </section>
    </main>
  );
};

ShowQuestion.defaultProps = {
  category: "",
  questionNumber: "",
};
