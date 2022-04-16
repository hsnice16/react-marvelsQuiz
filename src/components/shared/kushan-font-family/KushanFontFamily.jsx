import "./kushan-font-family.css";
import PropTypes from "prop-types";
import classNames from "classnames";

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
