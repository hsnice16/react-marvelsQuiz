import PropTypes from "prop-types";
import { ROUTE_ROOT } from "utils";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { KushanFontFamily } from "components";

export const QuestionNumber = ({ number, onPage }) => {
  return (
    <div
      className={classNames(
        onPage !== "Answers" ? "align-i-ctr flex justify-c-sb" : "",
        "mb-2",
        "px-0p5"
      )}
    >
      <span className="fs-2">
        <span className="fw-bold">
          <KushanFontFamily textToShow="Q" />
          uestion:
        </span>
        <span className="text-primary-800"> {number}/5 </span>
      </span>

      {onPage !== "Answers" && (
        <Link to={ROUTE_ROOT} className="fw-bold link">
          <KushanFontFamily textToShow="Q" />
          <span className="text-slate-800">uit Quiz</span>
        </Link>
      )}
    </div>
  );
};

QuestionNumber.propTypes = {
  number: PropTypes.number,
  onPage: PropTypes.string,
};

QuestionNumber.defaultProps = {
  number: 0,
  onPage: "",
};
