import { v4 as uuid } from "uuid";

import {
  avengerInfinityPoster,
  captainMarvelPoster,
  drStrangePoster,
  loveU3000GIF,
} from "assets";

import {
  CATEGORY_AVENGERS_INFINITY_WAR,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_CAPTAIN_MARVEL,
} from "utils";

export const HomeData = {
  categories: [
    {
      _id: uuid(),
      categoryName: CATEGORY_AVENGERS_INFINITY_WAR,
      img: {
        altText: "avengers infinity war poster",
        src: avengerInfinityPoster,
      },
      heading: "Avengers: Infinity War",
      description:
        "Play this quiz, if you think you know all about <em>Avengers: Infinity War</em>",
      totalQuestions: 5,
    },
    {
      _id: uuid(),
      categoryName: CATEGORY_DOCTOR_STRANGE,
      img: {
        altText: "dr. strange poster",
        src: drStrangePoster,
      },
      heading: "Doctor Strange",
      description:
        "Do you know all about <em>Doctor Strange?</em>, play this quiz and test yourself",
      totalQuestions: 5,
    },
    {
      _id: uuid(),
      categoryName: CATEGORY_CAPTAIN_MARVEL,
      img: {
        altText: "captain marvel poster",
        src: captainMarvelPoster,
      },
      heading: "Captain Marvel",
      description:
        "Do you really think you have watched <em>Captain Marvel?</em>, play and test yourself",
      totalQuestions: 5,
    },
  ],

  heroImg: {
    altText: "iron man saying love u 3000, gif",
    src: loveU3000GIF,
  },
};
