import "./App.css";
import { Footer, Header } from "components";
import { Route, Routes } from "react-router-dom";
import { Home, Question, Result, Rules } from "pages";
import {
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
        <Route
          path={`${ROUTE_QUIZ_QUESTION}/:questionNumber`}
          element={<Question />}
        />
        <Route path={ROUTE_QUIZ_RESULT} element={<Result />} />
        <Route path={ROUTE_QUIZ_RULES} element={<Rules />} />
        <Route path={ROUTE_ROOT} element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}
