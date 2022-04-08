import "./category-card.css";
import PropTypes from "prop-types";

export const CategoryCard = ({ category }) => {
  const {
    img: { altText, src },
    heading,
    description,
    totalQuestions,
  } = category;

  return (
    <div className="card card-text-overlay card-vertical shadow-light">
      <img
        loading="lazy"
        className="card-vertical-img"
        src={src}
        alt={altText}
      />

      <span className="card-vertical-img fw-bold overlay-content">
        <i className="fas fa-brain mx-0p5"></i> Let's begin the game
      </span>

      <h2 className="card-head fs-2">{heading}</h2>
      <p className="card-text mb-1p5">
        <span dangerouslySetInnerHTML={{ __html: description }} />
        <span className="block fw-800 mt-1">{totalQuestions} Questions</span>
      </p>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    _id: PropTypes.string,
    img: PropTypes.shape({ altText: PropTypes.string, src: PropTypes.string }),
    heading: PropTypes.string,
    description: PropTypes.string,
    totalQuestions: PropTypes.number,
  }),
};

CategoryCard.defaultProps = {
  category: {
    _id: "",
    img: {
      altText: "",
      src: "",
    },
    heading: "",
    description: "",
    totalQuestions: "",
  },
};
