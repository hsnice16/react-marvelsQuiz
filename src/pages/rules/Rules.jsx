import { useSearchParams } from "react-router-dom";
import { RulesData } from "data";
import { Button, KushanFontFamily } from "components";
import { useDocumentTitle, useScrollToTop } from "custom-hooks";

export const Rules = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const {
    [category]: { ahaText, name },
    heroImg: { altText, src },
    rules,
  } = RulesData;

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
          {rules.map(({ id, rule }) => (
            <li key={id} className="align-i-fs flex shadow-light">
              <i className="fas fa-genderless mt-0p5"></i>
              <span className="ml-1">{rule} </span>
            </li>
          ))}
        </ul>

        <Button
          className="btn-game-begin"
          iconDirection="right"
          btnText="Let's begin the game"
        />
      </section>
    </main>
  );
};
