import React from "react";
import "./kushan-font-family.css";
import classNames from "classnames";

type KushanFontFamilyPropTypes = {
  className: string;
  textToShow: string;
};

export const KushanFontFamily = ({
  className,
  textToShow,
}: KushanFontFamilyPropTypes) => (
  <span className={classNames("kushan-font-family", "mx-0p5", className)}>
    {textToShow}
  </span>
);

KushanFontFamily.defaultProps = {
  className: "",
  textToShow: "",
};
