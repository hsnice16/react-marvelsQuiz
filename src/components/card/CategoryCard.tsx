import React from "react";
import "./category-card.css";
import { ImageType } from "types";

type CategoryCardPropTypes = {
  category: {
    _id: string;
    img: ImageType;
    heading: string;
    description: string;
    categoryName: string;
    totalQuestions: number;
  };
};

export const CategoryCard = ({ category }: CategoryCardPropTypes) => {
  const {
    heading,
    description,
    totalQuestions,
    img: { altText, src },
  } = category;

  return (
    <div className="card card-text-overlay card-vertical shadow-light">
      <img
        src={src}
        alt={altText}
        loading="lazy"
        className="card-vertical-img"
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

CategoryCard.defaultProps = {
  category: {
    _id: "",
    img: {
      src: "",
      altText: "",
    },
    heading: "",
    description: "",
    categoryName: "",
    totalQuestions: "",
  },
};
