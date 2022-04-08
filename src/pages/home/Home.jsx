import { Link } from "react-router-dom";
import { HomeData } from "data";
import { ROUTE_QUIZ_RULES } from "utils";
import { useDocumentTitle, useScrollToTop } from "custom-hooks";
import { CategoryCard, InvertedCommas, KushanFontFamily } from "components";

export const Home = () => {
  const {
    categories,
    heroImg: { altText, src },
  } = HomeData;

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
        loading="lazy"
        className="block mx-auto w-33"
        src={src}
        alt={altText}
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
              to={`${ROUTE_QUIZ_RULES}?category=${category.categoryName}`}
              key={category._id}
            >
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
