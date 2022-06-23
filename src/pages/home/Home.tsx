import { HomeData } from "data";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { ROUTE_QUIZ_RULES } from "utils";
import { useGame, useToast } from "context";
import { ACTION_TYPE_RESET_GAME } from "reducer";
import { useDocumentTitle, useScrollToTop } from "custom-hooks";
import { CategoryCard, InvertedCommas, KushanFontFamily } from "components";

export const Home = () => {
  const {
    categories,
    heroImg: { altText, src },
  } = HomeData;

  const { dispatch } = useGame();
  const { handleAddMoreToasts } = useToast();

  useEffect(() => {
    dispatch({ type: ACTION_TYPE_RESET_GAME });

    handleAddMoreToasts({
      msg: "Helloooooo!! So, How are you? We welcome you our marvel fan 🎉🎉",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDocumentTitle("Are you even a Marvel fan? Let's Check");
  useScrollToTop();

  return (
    <main className="main px-1 py-2">
      <div className="fs-xl mb-4 mt-2 text-center">
        Are you even a Marvel fan?
        <span className="block my-0p5">
          <KushanFontFamily className="span-l" textToShow="L" />
          et's <KushanFontFamily className="span-c" textToShow="C" />
          heck
        </span>
      </div>

      <img
        src={src}
        alt={altText}
        loading="lazy"
        className="block mx-auto w-33"
      />

      <blockquote className="ctr-text fw-bold">
        <InvertedCommas className="mt-4p5" commaStyle="‘‘" />
        <KushanFontFamily
          className="mb-1p5 fs-3"
          textToShow="I Love You 3000"
        />
        <InvertedCommas className="mb-3p5" commaStyle="’’" />
      </blockquote>

      <section>
        <h1 className="fs-3 text-center">Choose Your Category</h1>

        <div className="align-i-ctr flex flex-wrap gap-2p5 justify-c-sa p-4">
          {categories.map((category) => (
            <Link
              key={category._id}
              to={`${ROUTE_QUIZ_RULES}?category=${category.categoryName}`}
            >
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
