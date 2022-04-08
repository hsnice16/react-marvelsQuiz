import { v4 as uuid } from "uuid";
import { rulesGIF } from "assets";

import {
  CATEGORY_AVENGERS_INFINITY_WAR,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_CAPTAIN_MARVEL,
} from "utils";

export const RulesData = {
  [CATEGORY_AVENGERS_INFINITY_WAR]: {
    id: uuid(),
    ahaText: "Aha! You think you know all about",
    name: "Avengers: Infinity War",
  },

  [CATEGORY_DOCTOR_STRANGE]: {
    id: uuid(),
    ahaText: "Aha! You think you know all about",
    name: "Doctor Strange",
  },

  [CATEGORY_CAPTAIN_MARVEL]: {
    id: uuid(),
    ahaText: "Aha! You think you have watched",
    name: "Captain Marvel",
  },

  heroImg: {
    altText: "nick fury saying Rules are rules, gif",
    src: rulesGIF,
  },

  rules: [
    { id: uuid(), rule: "You will face 5 Questions" },
    {
      id: uuid(),
      rule: "The right answer will give you 2 points, Wrong will add 0 to your total",
    },
    {
      id: uuid(),
      rule: "To clear the Quiz, you will have to answer all correctly",
    },
  ],
};
