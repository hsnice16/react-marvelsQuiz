import PropTypes from "prop-types";
import classNames from "classnames";

export const InvertedCommas = ({ className, commaStyle }) => (
  <span className={classNames("fs-xl", className, "text-red-500")}>
    {commaStyle}
  </span>
);

InvertedCommas.propTypes = {
  className: PropTypes.string,
  commaStyle: PropTypes.string,
};

InvertedCommas.defaultProps = {
  className: "",
  commaStyle: "",
};
