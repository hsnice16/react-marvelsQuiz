import "./kushan-font-family.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export const KushanFontFamily = ({ className, textToShow }) => (
  <span className={classNames("kushan-font-family", "mx-0p5", className)}>
    {textToShow}
  </span>
);

KushanFontFamily.propTypes = {
  className: PropTypes.string,
  textToShow: PropTypes.string,
};

KushanFontFamily.defaultProps = {
  className: "",
  textToShow: "",
};
