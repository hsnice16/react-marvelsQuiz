import React from "react";
import { Link } from "react-router-dom";
import { KushanFontFamily } from "components";

import {
  ROUTE_QUIZ_RULES,
  ROUTE_QUIZ_RESULT,
  ROUTE_QUIZ_QUESTION,
  capitalizeFirstLetter,
} from "utils";

type PrevNextLinkPropsTypes = {
  next: string;
  prev: string;
  category: string;
};

export const PrevNextLink = ({
  next,
  prev,
  category,
}: PrevNextLinkPropsTypes) => {
  const prevLink =
    prev === "rules"
      ? `${ROUTE_QUIZ_RULES}?category=${category}`
      : `${ROUTE_QUIZ_QUESTION}/${prev}?category=${category}`;

  const nextLink =
    next === "result"
      ? `${ROUTE_QUIZ_RESULT}?category=${category}`
      : `${ROUTE_QUIZ_QUESTION}/${next}?category=${category}`;

  return (
    <div className="align-i-ctr flex mb-2 px-0p5">
      <Link to={prevLink} className="fw-bold link pb-1">
        <span className="ml-0p5 text-slate-800">
          <i className="left-angle-icon fas fa-angle-left"></i>
        </span>
        <KushanFontFamily textToShow={prev === "rules" ? "R" : "Q"} />
        <span className="text-slate-800">
          {prev === "rules" ? "ules" : `uestion ${capitalizeFirstLetter(prev)}`}
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
  );
};

PrevNextLink.defaultProps = {
  next: "",
  prev: "",
  category: "",
};
