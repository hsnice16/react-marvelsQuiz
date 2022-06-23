import React from "react";
import { ROUTE_ROOT } from "utils";
import { QuestionsData } from "data";
import { useNavigate } from "react-router-dom";

import {
  useScrollToTop,
  useDocumentTitle,
  useSearchParamsCategory,
} from "custom-hooks";

import {
  Button,
  OptionsUL,
  QuestionNumber,
  KushanFontFamily,
} from "components";

export const Answers = () => {
  const navigate = useNavigate();
  const { category } = useSearchParamsCategory();
  const { name, questions } = QuestionsData[category];

  useDocumentTitle(`${name}, Answers`);
  useScrollToTop();

  return (
    <>
      <div className="fs-lg mb-4 mt-2 text-center">{name}</div>

      <h1 className="ctr-text">
        <span className="py-2">
          <KushanFontFamily textToShow="A" />
          nswers
        </span>
      </h1>

      <main className="main px-4 py-2">
        {Object.keys(questions).map((questionNumber) => {
          const { number, statement, options, answer } =
            questions[questionNumber];

          return (
            <section key={questionNumber} className="container-question">
              <QuestionNumber number={number} onPage="Answers" />

              <h2 className="fs-3 text-center">{statement}</h2>

              <OptionsUL
                answer={answer}
                onPage="Answers"
                options={options}
                category={category}
              />
            </section>
          );
        })}

        <Button
          onClick={() => {
            navigate(ROUTE_ROOT);
          }}
          btnText="Back to home"
          className="btn-back-home"
        />
      </main>
    </>
  );
};
