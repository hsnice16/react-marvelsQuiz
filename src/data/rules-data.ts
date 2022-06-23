import { rulesGIF } from "assets";
import { ImageType } from "types";
import { v4 as uuid } from "uuid";

import {
  CATEGORY_CAPTAIN_MARVEL,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_AVENGERS_INFINITY_WAR,
} from "utils";

type CategoryType = {
  _id: string;
  name: string;
  ahaText: string;
};

type RuleType = {
  _id: string;
  rule: string;
};

type RulesDataType = {
  rules: RuleType[];
  heroImg: ImageType;
  [CATEGORY_CAPTAIN_MARVEL]: CategoryType;
  [CATEGORY_DOCTOR_STRANGE]: CategoryType;
  [CATEGORY_AVENGERS_INFINITY_WAR]: CategoryType;
};

export const RulesData: RulesDataType = {
  [CATEGORY_AVENGERS_INFINITY_WAR]: {
    _id: uuid(),
    name: "Avengers: Infinity War",
    ahaText: "Aha! You think you know all about",
  },

  [CATEGORY_DOCTOR_STRANGE]: {
    _id: uuid(),
    name: "Doctor Strange",
    ahaText: "Aha! You think you know all about",
  },

  [CATEGORY_CAPTAIN_MARVEL]: {
    _id: uuid(),
    name: "Captain Marvel",
    ahaText: "Aha! You think you have watched",
  },

  heroImg: {
    src: rulesGIF,
    altText: "nick fury saying Rules are rules, gif",
  },

  rules: [
    { _id: uuid(), rule: "You will face 5 Questions" },
    {
      _id: uuid(),
      rule: "The right answer will give you 2 points, Wrong will add 0 to your total",
    },
    {
      _id: uuid(),
      rule: "To clear the Quiz, you will have to answer all correctly",
    },
  ],
};
