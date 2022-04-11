import PropTypes from "prop-types";
import { QuestionsData } from "data";
import { Link } from "react-router-dom";
import { KushanFontFamily, OptionsUL } from "components";
import { useDocumentTitle, useScrollToTop } from "custom-hooks";
import {
  ROUTE_QUIZ_QUESTION,
  ROUTE_QUIZ_RESULT,
  ROUTE_QUIZ_RULES,
  capitalizeFirstLetter,
} from "utils";

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

  useDocumentTitle(
    `${name}, Question ${capitalizeFirstLetter(questionNumber)}`
  );
  useScrollToTop(questionNumber);

  const prevLink =
    prev === "rules"
      ? `${ROUTE_QUIZ_RULES}?category=${category}`
      : `${ROUTE_QUIZ_QUESTION}/${prev}?category=${category}`;

  const nextLink =
    next === "result"
      ? `${ROUTE_QUIZ_RESULT}?category=${category}`
      : `${ROUTE_QUIZ_QUESTION}/${next}?category=${category}`;

  return (
    <main className="main px-4 py-2">
      <div className="fs-lg mb-4 mt-2 text-center">{name}</div>

      <section className="container-question">
        <div className="align-i-ctr flex justify-c-sb mb-2 px-0p5">
          <span className="fs-2">
            <span className="fw-bold">
              <KushanFontFamily textToShow="Q" />
              uestion:
            </span>
            <span className="text-primary-800"> {number}/5 </span>
          </span>
          <span className="fs-2">
            <span className="fw-bold">
              <KushanFontFamily textToShow="S" />
              core:
            </span>
            <span className="text-primary-800"> 0</span>
          </span>
        </div>

        <h1 className="fs-3 text-center">{statement}</h1>

        <OptionsUL options={options} answer={answer} category={category} />

        <div className="align-i-ctr flex mb-2 px-0p5">
          <Link to={prevLink} className="fw-bold link pb-1">
            <span className="ml-0p5 text-slate-800">
              <i className="left-angle-icon fas fa-angle-left"></i>
            </span>
            <KushanFontFamily textToShow={prev === "rules" ? "R" : "Q"} />
            <span className="text-slate-800">
              {prev === "rules"
                ? "ules"
                : `uestion ${capitalizeFirstLetter(prev)}`}
            </span>
          </Link>

          <Link to={nextLink} className="fw-bold link ml-auto pb-1">
            <KushanFontFamily textToShow={next === "result" ? "R" : "Q"} />
            <span className="text-slate-800">
              {next === "result"
                ? "esult"
                : `uestion ${capitalizeFirstLetter(next)}`}{" "}
              <i className="right-angle-icon fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
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
