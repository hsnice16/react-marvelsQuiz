import { ImageType } from "types";
import { v4 as uuid } from "uuid";
import { resultGIF } from "assets";

import {
  CATEGORY_CAPTAIN_MARVEL,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_AVENGERS_INFINITY_WAR,
} from "utils";

type CategoryType = {
  _id: string;
  name: string;
};

type ResultDataType = {
  heroImg: ImageType;
  [CATEGORY_DOCTOR_STRANGE]: CategoryType;
  [CATEGORY_CAPTAIN_MARVEL]: CategoryType;
  [CATEGORY_AVENGERS_INFINITY_WAR]: CategoryType;
};

export const ResultData: ResultDataType = {
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
    src: resultGIF,
    altText: "groot dancing, gif",
  },
};
