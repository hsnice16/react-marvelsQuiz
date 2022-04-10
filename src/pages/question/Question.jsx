import classNames from "classnames";
import { QuestionsData } from "data";
import { KushanFontFamily } from "components";
import { Link, useParams } from "react-router-dom";
import {
  useDocumentTitle,
  useScrollToTop,
  useSearchParamsCategory,
} from "custom-hooks";
import {
  ROUTE_QUIZ_QUESTION,
  ROUTE_QUIZ_RESULT,
  ROUTE_QUIZ_RULES,
  capitalizeFirstLetter,
} from "utils";

export const Question = () => {
  const { questionNumber } = useParams();
  const { category } = useSearchParamsCategory();
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

        <ul className="max-w-45 stacked-list">
          {options.map(({ _id, option }) => (
            <li key={_id} className="option-li shadow-light">
              <input
                className="d-none"
                type="radio"
                name={`${category}-option-${option}`}
                id={`option-${option}`}
              />
              <label
                className="cursor-ptr inline-block p-1 w-100pct"
                htmlFor={`option-${option}`}
              >
                <i
                  className={classNames(
                    "fas",
                    "fa-check-circle",
                    option === answer ? "text-lime-600" : "text-slate-500"
                  )}
                ></i>
                <span className="ml-1"> {option}</span>
              </label>
            </li>
          ))}
        </ul>

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
