import "./header.css";
import { Link } from "react-router-dom";
import { KushanFontFamily } from "components";
import { ROUTE_ROOT } from "utils";

export const Header = () => {
  return (
    <header className="align-i-ctr justify-c-sb flex px-4 py-2">
      <nav className="fs-lg">
        <Link to={ROUTE_ROOT} className="text-primary-800">
          <KushanFontFamily textToShow="m" className="fs-xxl" />
          arvels <KushanFontFamily textToShow="Q" className="fs-xxl" />
          uiz
        </Link>
      </nav>

      <button className="btn-theme translate-y">
        <i className="far fa-moon"></i>
      </button>
    </header>
  );
};
