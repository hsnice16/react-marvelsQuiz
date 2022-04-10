import { v4 as uuid } from "uuid";
import { resultGIF } from "assets";

import {
  CATEGORY_AVENGERS_INFINITY_WAR,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_CAPTAIN_MARVEL,
} from "utils";

export const ResultData = {
  [CATEGORY_AVENGERS_INFINITY_WAR]: {
    _id: uuid(),
    name: "Avengers: Infinity War",
  },

  [CATEGORY_DOCTOR_STRANGE]: {
    _id: uuid(),
    name: "Doctor Strange",
  },

  [CATEGORY_CAPTAIN_MARVEL]: {
    _id: uuid(),
    name: "Captain Marvel",
  },

  heroImg: {
    altText: "groot dancing, gif",
    src: resultGIF,
  },
};
