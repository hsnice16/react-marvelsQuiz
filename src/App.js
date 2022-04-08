import "./App.css";
import { Home } from "pages";
import { ROUTE_ROOT } from "utils";
import { Footer, Header } from "components";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path={ROUTE_ROOT} element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}
