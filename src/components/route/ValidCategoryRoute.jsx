import { NotFound } from "components";
import { isAValidCategory } from "utils";
import { Outlet } from "react-router-dom";
import { useSearchParamsCategory } from "custom-hooks";

export const ValidCategoryRoute = () => {
  const { category } = useSearchParamsCategory();

  return isAValidCategory(category) ? (
    <Outlet />
  ) : (
    <NotFound
      documentTitle="Category Not Found"
      textToShow="This category doesn't exist anymore"
    />
  );
};
