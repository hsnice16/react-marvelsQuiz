import { v4 as uuid } from "uuid";

import {
  CATEGORY_CAPTAIN_MARVEL,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_AVENGERS_INFINITY_WAR,
} from "utils";

type OptionType = {
  _id: string;
  option: string;
};

type QuestionType = {
  number: number;
  answer: string;
  link: {
    next: string;
    prev: string;
  };
  statement: string;
  options: OptionType[];
};

type CategoryType = {
  name: string;
  questions: {
    one: QuestionType;
    two: QuestionType;
    four: QuestionType;
    five: QuestionType;
    three: QuestionType;
  };
};

type QuestionsDataType = {
  [CATEGORY_CAPTAIN_MARVEL]: CategoryType;
  [CATEGORY_DOCTOR_STRANGE]: CategoryType;
  [CATEGORY_AVENGERS_INFINITY_WAR]: CategoryType;
};

export const QuestionsData: QuestionsDataType = {
  [CATEGORY_AVENGERS_INFINITY_WAR]: {
    name: "Avengers: Infinity War",
    questions: {
      one: {
        number: 1,
        answer: "Third",
        link: {
          next: "two",
          prev: "rules",
        },
        options: [
          { _id: uuid(), option: "Fifth" },
          { _id: uuid(), option: "Third" },
          { _id: uuid(), option: "Fourth" },
          { _id: uuid(), option: "Second" },
        ],
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
      },

      two: {
        number: 2,
        answer: "Six",
        link: {
          prev: "one",
          next: "three",
        },
        options: [
          { _id: uuid(), option: "Six" },
          { _id: uuid(), option: "Four" },
          { _id: uuid(), option: "Five" },
          { _id: uuid(), option: "Eight" },
        ],
        statement: "There were how many Infinity Stones in the movie ?",
      },

      three: {
        number: 3,
        answer: "Loki",
        link: {
          prev: "two",
          next: "four",
        },
        options: [
          { _id: uuid(), option: "Loki" },
          { _id: uuid(), option: "Thor" },
          { _id: uuid(), option: "Groot" },
          { _id: uuid(), option: "Heimdall" },
        ],
        statement: "____ told Thanos that Hulk is on the Asgardian ship.",
      },

      four: {
        number: 4,
        answer: "Two",
        link: {
          next: "five",
          prev: "three",
        },
        options: [
          { _id: uuid(), option: "One" },
          { _id: uuid(), option: "Two" },
          { _id: uuid(), option: "Three" },
          { _id: uuid(), option: "Vision didn't die" },
        ],
        statement: "In the movie, how many times did Vision die ?",
      },

      five: {
        number: 5,
        link: {
          prev: "four",
          next: "result",
        },
        answer: "Stormbreaker",
        options: [
          { _id: uuid(), option: "Mjolnir" },
          { _id: uuid(), option: "Jarnbjorn" },
          { _id: uuid(), option: "Stormbreaker" },
          { _id: uuid(), option: "Thunderstrike" },
        ],
        statement: "Which new weapon did Thor forge in the movie ?",
      },
    },
  },

  [CATEGORY_DOCTOR_STRANGE]: {
    name: "Doctor Strange",
    questions: {
      one: {
        number: 1,
        link: {
          next: "two",
          prev: "rules",
        },
        answer: "Shamballa",
        options: [
          { _id: uuid(), option: "Dormammu" },
          { _id: uuid(), option: "Shamballa" },
          { _id: uuid(), option: "Kaecillius" },
          { _id: uuid(), option: "Avada Kedavara" },
        ],
        statement: "What was the wi-fi password that Mordo gave Strange ?",
      },

      two: {
        number: 2,
        link: {
          prev: "one",
          next: "three",
        },
        answer: "Benedict Cumberbatch",
        options: [
          { _id: uuid(), option: "Mark Ruffalo" },
          { _id: uuid(), option: "Tom Hiddleston" },
          { _id: uuid(), option: "Robert Downey Jr." },
          { _id: uuid(), option: "Benedict Cumberbatch" },
        ],
        statement: "Who played the role of Dr. Stephen Strange in the movie ?",
      },

      three: {
        number: 3,
        statement: "Where did Dr. Strange go to get himself healed ?",
        options: [
          { _id: uuid(), option: "Taj Mahal" },
          { _id: uuid(), option: "Hong Kong" },
          { _id: uuid(), option: "Kamar Taj" },
          { _id: uuid(), option: "Mt. Everest" },
        ],
        answer: "Kamar Taj",
        link: {
          prev: "two",
          next: "four",
        },
      },

      four: {
        number: 4,
        statement: "Which relic choosed Dr. Strange ?",
        options: [
          { _id: uuid(), option: "The Infinity Stone" },
          { _id: uuid(), option: "The Eye of Agamotto" },
          { _id: uuid(), option: "The Wand of Watoomb" },
          { _id: uuid(), option: "The Cloak of Leviation" },
        ],
        answer: "The Cloak of Leviation",
        link: {
          prev: "three",
          next: "five",
        },
      },

      five: {
        number: 5,
        statement:
          "What was the source of The Ancient One's power and agelessness ?",
        options: [
          { _id: uuid(), option: "London Sanctum" },
          { _id: uuid(), option: "Hong Kong Sanctum" },
          { _id: uuid(), option: "The Dark Dimension" },
          { _id: uuid(), option: "The Mirror Dimension" },
        ],
        answer: "The Dark Dimension",
        link: {
          prev: "four",
          next: "result",
        },
      },
    },
  },

  [CATEGORY_CAPTAIN_MARVEL]: {
    name: "Captain Marvel",
    questions: {
      one: {
        number: 1,
        link: {
          next: "two",
          prev: "rules",
        },
        answer: "Goose",
        options: [
          { _id: uuid(), option: "Louie" },
          { _id: uuid(), option: "Moose" },
          { _id: uuid(), option: "Goose" },
          { _id: uuid(), option: "Chewie" },
        ],
        statement: "What was the name of Captain Marvel's cat in this movie ?",
      },

      two: {
        number: 2,
        link: {
          prev: "one",
          next: "three",
        },
        answer: "International Women's Day",
        options: [
          { _id: uuid(), option: "Earth Day" },
          { _id: uuid(), option: "International Book Day" },
          { _id: uuid(), option: "World Press Freedom Day" },
          { _id: uuid(), option: "International Women's Day" },
        ],
        statement: "The release of Captain Marvel fell on which day ?",
      },

      three: {
        number: 3,
        link: {
          prev: "two",
          next: "four",
        },
        answer: "Skrulls",
        options: [
          { _id: uuid(), option: "Krees" },
          { _id: uuid(), option: "Skrulls" },
          { _id: uuid(), option: "Novacorps" },
          { _id: uuid(), option: "Krptonians" },
        ],
        statement: "Who were the main villains in Captain Marvel ?",
      },

      four: {
        number: 4,
        answer: "21st",
        link: {
          next: "five",
          prev: "three",
        },
        options: [
          { _id: uuid(), option: "26th" },
          { _id: uuid(), option: "11th" },
          { _id: uuid(), option: "21st" },
          { _id: uuid(), option: "16th" },
        ],
        statement:
          "This was the ____ film to be released by the Marvel Cinematic Universe.",
      },

      five: {
        number: 5,
        answer: "2",
        link: {
          prev: "four",
          next: "result",
        },
        options: [
          { _id: uuid(), option: "3" },
          { _id: uuid(), option: "0" },
          { _id: uuid(), option: "1" },
          { _id: uuid(), option: "2" },
        ],
        statement: "How many cameos did Stan Lee make in Captain Marvel ?",
      },
    },
  },
};
