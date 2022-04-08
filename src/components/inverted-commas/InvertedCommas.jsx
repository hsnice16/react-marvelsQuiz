import PropTypes from "prop-types";

export const InvertedCommas = ({ className, commaStyle }) => (
  <span className={`fs-xl ${className} text-red-500`}>{commaStyle}</span>
);

InvertedCommas.propTypes = {
  className: PropTypes.string,
  commaStyle: PropTypes.string,
};

InvertedCommas.defaultProps = {
  className: "",
  commaStyle: "",
};
