import "./result.css";
import { ResultData } from "data";
import { CategoryType } from "types";
import React, { useEffect } from "react";
import { useGame, useToast } from "context";
import { useNavigate } from "react-router-dom";
import { Button, KushanFontFamily } from "components";
import { ROUTE_QUIZ_ANSWERS, getTotalScore } from "utils";

import {
  useScrollToTop,
  useDocumentTitle,
  useSearchParamsCategory,
} from "custom-hooks";

export const Result = () => {
  const navigate = useNavigate();
  const { category } = useSearchParamsCategory() as { category: CategoryType };

  const {
    game: { answers },
  } = useGame();

  const {
    [category]: { name },
    heroImg: { altText, src },
  } = ResultData;

  const totalScore = getTotalScore(answers);
  const { handleAddMoreToasts } = useToast();

  useEffect(() => {
    handleAddMoreToasts({
      msg: "Report Card!! Don't forget to share 😉",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDocumentTitle("Here is your Report Card 😅");
  useScrollToTop();

  return (
    <main className="main px-1 py-2">
      <img loading="lazy" className="block mx-auto" src={src} alt={altText} />

      <div className="fs-lg mb-4 mt-2 text-center">
        Result time for our <em>{name}</em> fan
      </div>

      <p className="ctr-text total-score-para">
        <span className="py-2">
          <KushanFontFamily textToShow="Y" />
          our <KushanFontFamily textToShow="T" />
          otal <KushanFontFamily textToShow="S" />
          core :<span className="text-primary-800"> {totalScore} </span>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="tooltip twitter-link"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `Hey 👋 everyone, I scored ${totalScore} out of 10 on the ${name} quiz.
              
Let's see how much you will score? Play today `
            )}&url=${encodeURIComponent(
              "https://marvelsquiz.vercel.app/"
            )}&via=hsnice16`}
          >
            <i className="fab fa-twitter"></i>
            <span className="tooltip-left tooltip-text">
              share with your friends
            </span>
          </a>
        </span>
      </p>

      <Button
        btnText="Show answers"
        className="btn-game-begin"
        onClick={() => {
          navigate(`${ROUTE_QUIZ_ANSWERS}?category=${category}`);
        }}
      />
    </main>
  );
};
