import "./options-ul.css";
import React from "react";
import classNames from "classnames";

type OptionsULPropTypes = {
  options: {
    _id: string;
    option: string;
  }[];
  answer: string;
  onPage: string;
  category: string;
  questionNumber: string;
  handleChange: (option: string) => void;
};

export const OptionsUL = ({
  answer,
  onPage,
  options,
  category,
  handleChange,
  questionNumber,
}: OptionsULPropTypes) => (
  <ul className="max-w-45 stacked-list">
    {options.map(({ _id, option }) => (
      <li
        key={_id}
        className={classNames(
          "shadow-light",
          onPage === "Answers" ? "" : "option-li",
          onPage === "Answers" && option === answer ? "answer-li" : ""
        )}
      >
        <label
          htmlFor={`option-${option}`}
          className={classNames(
            "p-1",
            "inline-block",
            onPage === "Answers" ? "" : "cursor-ptr w-100pct"
          )}
        >
          <input
            type="radio"
            className="d-none"
            onChange={() => {
              handleChange(option);
            }}
            id={`option-${option}`}
            name={`${category}-question-${questionNumber}`}
          />

          <i
            className={classNames(
              "fas",
              "fa-check-circle",
              option === answer
                ? "text-lime-600"
                : onPage === "Answers"
                ? "text-red-500"
                : "text-slate-500"
            )}
          ></i>
          <span className="ml-1"> {option}</span>
        </label>
      </li>
    ))}
  </ul>
);

OptionsUL.defaultProps = {
  answer: "",
  onPage: "",
  category: "",
  questionNumber: "",
  handleChange: () => {},
  options: [{ _id: "", option: "" }],
};
