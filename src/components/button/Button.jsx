import "./button.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export const Button = ({ className, iconDirection, btnText }) => (
  <button className={classNames(className, "translate-y")}>
    {btnText} <i
      className={classNames(
        `${iconDirection}-double-angle-icon`,
        "fas",
        `fa-angle-double-${iconDirection}`
      )}
    ></i>
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  iconDirection: PropTypes.string,
  btnText: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  iconDirection: "",
  btnText: "",
};
