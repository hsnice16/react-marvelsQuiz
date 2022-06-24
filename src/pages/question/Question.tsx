import React from "react";
import { QuestionsData } from "data";
import { NotFound } from "components";
import { useParams } from "react-router-dom";
import { ShowQuestion } from "./ShowQuestion";
import { useSearchParamsCategory } from "custom-hooks";

export const Question = () => {
  const { questionNumber } = useParams();
  const { category } = useSearchParamsCategory();

  return QuestionsData[category].questions[questionNumber] !== undefined ? (
    <ShowQuestion category={category} questionNumber={questionNumber} />
  ) : (
    <NotFound
      documentTitle="Question Not Found"
      textToShow="This question doesn't exist anymore"
    />
  );
};
