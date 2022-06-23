import { v4 as uuid } from "uuid";
import { CategoryType, ImageType } from "types";

import {
  loveU3000GIF,
  drStrangePoster,
  captainMarvelPoster,
  avengerInfinityPoster,
} from "assets";

import {
  CATEGORY_CAPTAIN_MARVEL,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_AVENGERS_INFINITY_WAR,
} from "utils";

type CategoriesType = {
  _id: string;
  img: ImageType;
  heading: string;
  description: string;
  totalQuestions: number;
  categoryName: CategoryType;
}[];

type HomeDataType = {
  heroImg: ImageType;
  categories: CategoriesType;
};

export const HomeData: HomeDataType = {
  categories: [
    {
      _id: uuid(),
      totalQuestions: 5,
      heading: "Avengers: Infinity War",
      img: {
        src: avengerInfinityPoster,
        altText: "avengers infinity war poster",
      },
      categoryName: CATEGORY_AVENGERS_INFINITY_WAR,
      description:
        "Play this quiz, if you think you know all about <em>Avengers: Infinity War</em>",
    },
    {
      _id: uuid(),
      totalQuestions: 5,
      heading: "Doctor Strange",
      img: {
        src: drStrangePoster,
        altText: "dr. strange poster",
      },
      categoryName: CATEGORY_DOCTOR_STRANGE,
      description:
        "Do you know all about <em>Doctor Strange?</em>, play this quiz and test yourself",
    },
    {
      _id: uuid(),
      totalQuestions: 5,
      heading: "Captain Marvel",
      img: {
        src: captainMarvelPoster,
        altText: "captain marvel poster",
      },
      categoryName: CATEGORY_CAPTAIN_MARVEL,
      description:
        "Do you really think you have watched <em>Captain Marvel?</em>, play and test yourself",
    },
  ],

  heroImg: {
    src: loveU3000GIF,
    altText: "iron man saying love u 3000, gif",
  },
};
