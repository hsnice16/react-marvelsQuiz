import {
  CATEGORY_CAPTAIN_MARVEL,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_AVENGERS_INFINITY_WAR,
} from "utils";

const categoriesList = [
  CATEGORY_CAPTAIN_MARVEL,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_AVENGERS_INFINITY_WAR,
];

/**
 * isAValidCategory - func to check if the
 *      given category is a valid one or not
 *
 * @param {string} categoryToCheck
 * @returns a boolean true - if category is a
 *                          valid one or false
 */
export const isAValidCategory = (categoryToCheck: string): boolean => {
  return categoriesList.includes(categoryToCheck);
};
