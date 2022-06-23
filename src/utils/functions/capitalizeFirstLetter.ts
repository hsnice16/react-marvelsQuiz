/**
 * capitalizeFirstLetter - func to capitalize first
 *                         letter of the string
 *
 * @param {string} inputString - string of which first
 *                               letter to capitalize
 * @returns capitalized string
 */
export const capitalizeFirstLetter = (inputString: string): string => {
  return `${inputString.charAt(0).toUpperCase()}${inputString.slice(1)}`;
};
