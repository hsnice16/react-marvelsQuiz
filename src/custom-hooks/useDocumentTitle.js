import { useEffect } from "react";

/**
 * useDocumentTitle - hook
 *
 * @param {string} titleText - text to show on title
 *                             of the page
 */
const useDocumentTitle = (titleText) => {
  useEffect(() => {
    document.title = `marvelsQuiz | ${titleText}`;
  }, [titleText]);
};

export { useDocumentTitle };
