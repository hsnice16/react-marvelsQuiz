import "./button.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export const Button = ({ onClick, className, iconDirection, btnText }) => (
  <button onClick={onClick} className={classNames(className, "translate-y")}>
    {btnText}{" "}
    <i
      className={classNames(
        `${iconDirection}-double-angle-icon`,
        "fas",
        `fa-angle-double-${iconDirection}`
      )}
    ></i>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconDirection: PropTypes.string,
  btnText: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  iconDirection: "",
  btnText: "",
};
