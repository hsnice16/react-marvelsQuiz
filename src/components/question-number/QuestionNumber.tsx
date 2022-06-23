import React from "react";
import { ROUTE_ROOT } from "utils";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { KushanFontFamily } from "components";

type QuestionNumberPropTypes = {
  number: number;
  onPage: string;
};

export const QuestionNumber = ({ number, onPage }: QuestionNumberPropTypes) => {
  return (
    <div
      className={classNames(
        "mb-2",
        "px-0p5",
        onPage !== "Answers" ? "align-i-ctr flex justify-c-sb" : ""
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

QuestionNumber.defaultProps = {
  number: 0,
  onPage: "",
};
