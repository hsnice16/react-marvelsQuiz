import { RulesData } from "data";
import { useToast } from "context";
import { CategoryType } from "types";
import React, { useEffect } from "react";
import { ROUTE_QUIZ_QUESTION } from "utils";
import { useNavigate } from "react-router-dom";
import { Button, KushanFontFamily } from "components";

import {
  useScrollToTop,
  useDocumentTitle,
  useSearchParamsCategory,
} from "custom-hooks";

export const Rules = () => {
  const navigate = useNavigate();
  const { category } = useSearchParamsCategory() as { category: CategoryType };

  const {
    rules,
    heroImg: { altText, src },
    [category]: { ahaText, name },
  } = RulesData;

  const { handleAddMoreToasts } = useToast();

  useEffect(() => {
    handleAddMoreToasts({
      msg: "Read carefullly!! We know you are a rockstar 😎 BUT rules are rules",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDocumentTitle("Rules are rules");
  useScrollToTop();

  return (
    <main className="main px-4 py-2">
      <img loading="lazy" className="block mx-auto" src={src} alt={altText} />

      <div className="fs-lg mb-4 mt-2 text-center">
        {ahaText} <em className="block">{name}</em>
      </div>

      <p className="ctr-text">
        <span className="py-2">
          <KushanFontFamily textToShow="N" />
          ice
        </span>
      </p>

      <section>
        <h1 className="fs-3 text-center">
          But before starting to play, read the rules{" "}
          <strong className="text-primary-800">carefully</strong>
        </h1>

        <ul className="max-w-45 stacked-list">
          {rules.map(({ _id, rule }) => (
            <li key={_id} className="align-i-fs flex shadow-light">
              <i className="fas fa-genderless mt-0p5"></i>
              <span className="ml-1">{rule} </span>
            </li>
          ))}
        </ul>

        <Button
          className="btn-game-begin"
          btnText="Let's begin the game"
          onClick={() => {
            navigate(`${ROUTE_QUIZ_QUESTION}/one?category=${category}`);
          }}
        />
      </section>
    </main>
  );
};
