import "./button.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export const Button = ({ onClick, className, btnText }) => (
  <button onClick={onClick} className={classNames(className, "translate-y")}>
    {btnText === "Back to home" ? (
      <>
        <i
          className={classNames(
            "left-double-angle-icon",
            "fas",
            "fa-angle-double-left"
          )}
        ></i>{" "}
        {btnText}
      </>
    ) : (
      <>
        {btnText}{" "}
        <i
          className={classNames(
            "right-double-angle-icon",
            "fas",
            "fa-angle-double-right"
          )}
        ></i>
      </>
    )}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  btnText: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  btnText: "",
};
