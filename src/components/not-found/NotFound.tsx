import React from "react";
import { ROUTE_ROOT } from "utils";
import { Button } from "components";
import { crossSearchPNG } from "assets";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "custom-hooks";

type NotFoundPropTypes = {
  textToShow: string;
  documentTitle: string;
};

export const NotFound = ({ documentTitle, textToShow }: NotFoundPropTypes) => {
  const navigate = useNavigate();
  useDocumentTitle(documentTitle);

  return (
    <main className="main px-1 py-2">
      <div className="text-center">
        <img
          loading="lazy"
          className="max-w-20"
          src={crossSearchPNG}
          alt="search icon with cross in center"
        />
        <h1 className="mt-1p5 mb-3">{textToShow}</h1>

        <Button
          btnText="Back to home"
          className="btn-back-home"
          onClick={() => {
            navigate(ROUTE_ROOT, { replace: true });
          }}
        />
      </div>
    </main>
  );
};

NotFound.defaultProps = {
  textToShow: "",
  documentTitle: "",
};
