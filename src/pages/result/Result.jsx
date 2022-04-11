import { ResultData } from "data";
import { Button, KushanFontFamily } from "components";
import {
  useDocumentTitle,
  useScrollToTop,
  useSearchParamsCategory,
} from "custom-hooks";

export const Result = () => {
  const { category } = useSearchParamsCategory();
  const {
    heroImg: { altText, src },
    [category]: { name },
  } = ResultData;

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
          core :<span className="text-primary-800"> 10 </span>
        </span>
      </p>

      <Button
        className="btn-game-begin"
        iconDirection="right"
        btnText="Show answers"
      />
    </main>
  );
};
