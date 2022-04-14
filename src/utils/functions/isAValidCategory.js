import {
  CATEGORY_AVENGERS_INFINITY_WAR,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_CAPTAIN_MARVEL,
} from "utils";

const categoriesList = [
  CATEGORY_AVENGERS_INFINITY_WAR,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_CAPTAIN_MARVEL,
];

/**
 * isAValidCategory - func to check if the
 *      given category is a valid one or not
 *
 * @param {string} categoryToCheck
 * @returns a boolean true - if category is a
 *                          valid one or false
 */
export const isAValidCategory = (categoryToCheck) => {
  return categoriesList.includes(categoryToCheck);
};
