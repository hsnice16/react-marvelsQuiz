import "./header.css";
import React from "react";
import { useTheme } from "context";
import { ROUTE_ROOT } from "utils";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { KushanFontFamily } from "components";

export const Header = () => {
  const { theme, handleThemeToggle } = useTheme();

  return (
    <header className="align-i-ctr justify-c-sb flex px-4 py-2">
      <nav className="fs-lg">
        <Link to={ROUTE_ROOT} className="text-primary-800">
          <KushanFontFamily textToShow="m" className="fs-xxl" />
          arvels <KushanFontFamily textToShow="Q" className="fs-xxl" />
          uiz
        </Link>
      </nav>

      <button
        onClick={handleThemeToggle}
        className="btn-theme translate-y tooltip"
      >
        <i
          className={classNames(theme === "dark" ? "fas" : "far", "fa-moon")}
        ></i>
        <span className="tooltip-left tooltip-text">
          change to {theme === "dark" ? "light" : "dark"}
        </span>
      </button>
    </header>
  );
};
