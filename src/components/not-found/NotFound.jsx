import PropTypes from "prop-types";
import { ROUTE_ROOT } from "utils";
import { Button } from "components";
import { crossSearchPNG } from "assets";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "custom-hooks";

export const NotFound = ({ documentTitle, textToShow }) => {
  useDocumentTitle(documentTitle);
  const navigate = useNavigate();

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
          onClick={() => {
            navigate(ROUTE_ROOT, { replace: true });
          }}
          className="btn-back-home"
          btnText="Back to home"
        />
      </div>
    </main>
  );
};

NotFound.propTypes = {
  documentTitle: PropTypes.string,
  textToShow: PropTypes.string,
};

NotFound.defaultProps = {
  documentTitle: "",
  textToShow: "",
};
