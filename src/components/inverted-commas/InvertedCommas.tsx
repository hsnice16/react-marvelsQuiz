import React from "react";
import classNames from "classnames";

type InvertedCommasPropTypes = {
  className: string;
  commaStyle: string;
};

export const InvertedCommas = ({
  className,
  commaStyle,
}: InvertedCommasPropTypes) => (
  <span className={classNames("fs-xl", className, "text-red-500")}>
    {commaStyle}
  </span>
);

InvertedCommas.defaultProps = {
  className: "",
  commaStyle: "",
};
