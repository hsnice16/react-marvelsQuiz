import PropTypes from "prop-types";
import { KushanFontFamily } from "components";

export const QuestionNumber = ({ number }) => {
  return (
    <div className="align-i-ctr flex justify-c-sb mb-2 px-0p5">
      <span className="fs-2">
        <span className="fw-bold">
          <KushanFontFamily textToShow="Q" />
          uestion:
        </span>
        <span className="text-primary-800"> {number}/5 </span>
      </span>
      <span className="fs-2">
        <span className="fw-bold">
          <KushanFontFamily textToShow="S" />
          core:
        </span>
        <span className="text-primary-800"> 0</span>
      </span>
    </div>
  );
};

QuestionNumber.propTypes = {
  number: PropTypes.number,
};

QuestionNumber.defaultProps = {
  number: 0,
};
