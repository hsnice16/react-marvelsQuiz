import { useSearchParams } from "react-router-dom";

/**
 * useSearchParamsCategory - hook
 *
 * @returns an object having structure { category }
 */
export const useSearchParamsCategory = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return { category };
};
