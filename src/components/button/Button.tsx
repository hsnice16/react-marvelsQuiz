import "./button.css";
import React from "react";
import classNames from "classnames";

type ButtonPropTypes = {
  btnText: string;
  className: string;
  onClick: () => void;
};

export const Button = ({ onClick, className, btnText }: ButtonPropTypes) => (
  <button onClick={onClick} className={classNames(className, "translate-y")}>
    {btnText === "Back to home" ? (
      <>
        <i
          className={classNames(
            "fas",
            "fa-angle-double-left",
            "left-double-angle-icon"
          )}
        ></i>{" "}
        {btnText}
      </>
    ) : (
      <>
        {btnText}{" "}
        <i
          className={classNames(
            "fas",
            "fa-angle-double-right",
            "right-double-angle-icon"
          )}
        ></i>
      </>
    )}
  </button>
);

Button.defaultProps = {
  btnText: "",
  className: "",
  onClick: () => {},
};
