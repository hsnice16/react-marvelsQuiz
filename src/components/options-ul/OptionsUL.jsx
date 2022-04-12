import "./options-ul.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export const OptionsUL = ({ options, answer, category, onPage }) => (
  <ul className="max-w-45 stacked-list">
    {options.map(({ _id, option }) => (
      <li
        key={_id}
        className={classNames(
          onPage === "Answers" && option === answer ? "answer-li" : "",
          onPage === "Answers" ? "" : "option-li",
          "shadow-light"
        )}
      >
        <input
          className="d-none"
          type="radio"
          name={`${category}-option-${option}`}
          id={`option-${option}`}
        />
        <label
          className={classNames(
            "inline-block",
            "p-1",
            onPage === "Answers" ? "" : "cursor-ptr w-100pct"
          )}
          htmlFor={`option-${option}`}
        >
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

OptionsUL.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      option: PropTypes.string,
    })
  ),
  answer: PropTypes.string,
  category: PropTypes.string,
  onPage: PropTypes.string,
};

OptionsUL.defaultProps = {
  options: [{ _id: "", option: "" }],
  answer: "",
  category: "",
  onPage: "",
};
