import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Answers, Home, Question, Result, Rules } from "pages";
import { Footer, Header, NotFound, ValidCategoryRoute } from "components";
import {
  ROUTE_QUIZ_ANSWERS,
  ROUTE_QUIZ_QUESTION,
  ROUTE_QUIZ_RESULT,
  ROUTE_QUIZ_RULES,
  ROUTE_ROOT,
} from "utils";

export default function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path={ROUTE_ROOT} element={<Home />} />

        <Route element={<ValidCategoryRoute />}>
          <Route path={ROUTE_QUIZ_ANSWERS} element={<Answers />} />
          <Route
            path={`${ROUTE_QUIZ_QUESTION}/:questionNumber`}
            element={<Question />}
          />
          <Route path={ROUTE_QUIZ_RESULT} element={<Result />} />
          <Route path={ROUTE_QUIZ_RULES} element={<Rules />} />
        </Route>

        <Route
          path="*"
          element={
            <NotFound
              documentTitle="Page Not Found"
              textToShow="This page isn't available. Sorry about that."
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
