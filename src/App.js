import "./App.css";
import { Home, Rules } from "pages";
import { ROUTE_ROOT, ROUTE_QUIZ_RULES } from "utils";
import { Footer, Header } from "components";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path={ROUTE_ROOT} element={<Home />} />
        <Route path={ROUTE_QUIZ_RULES} element={<Rules />} />
      </Routes>

      <Footer />
    </div>
  );
}
