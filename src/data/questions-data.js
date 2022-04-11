import { v4 as uuid } from "uuid";
import {
  CATEGORY_AVENGERS_INFINITY_WAR,
  CATEGORY_DOCTOR_STRANGE,
  CATEGORY_CAPTAIN_MARVEL,
} from "utils";

export const QuestionsData = {
  [CATEGORY_AVENGERS_INFINITY_WAR]: {
    name: "Avengers: Infinity War",
    questions: {
      one: {
        number: 1,
        statement:
          "Avengers: Infinity War was which number movie in Marvel's Avengers series ?",
        options: [
          { _id: uuid(), option: "Fourth" },
          { _id: uuid(), option: "Fifth" },
          { _id: uuid(), option: "Second" },
          { _id: uuid(), option: "Third" },
        ],
        answer: "Third",
        link: {
          prev: "rules",
          next: "two",
        },
      },

      two: {
        number: 2,
        statement: "There were how many Infinity Stones in the movie ?",
        options: [
          { _id: uuid(), option: "Four" },
          { _id: uuid(), option: "Five" },
          { _id: uuid(), option: "Six" },
          { _id: uuid(), option: "Eight" },
        ],
        answer: "Six",
        link: {
          prev: "one",
          next: "three",
        },
      },

      three: {
        number: 3,
        statement: "____ told Thanos that Hulk is on the Asgardian ship.",
        options: [
          { _id: uuid(), option: "Loki" },
          { _id: uuid(), option: "Heimdall" },
          { _id: uuid(), option: "Thor" },
          { _id: uuid(), option: "Groot" },
        ],
        answer: "Loki",
        link: {
          prev: "two",
          next: "four",
        },
      },

      four: {
        number: 4,
        statement: "In the movie, how many times did Vision die ?",
        options: [
          { _id: uuid(), option: "One" },
          { _id: uuid(), option: "Two" },
          { _id: uuid(), option: "Three" },
          { _id: uuid(), option: "Vision didn't die" },
        ],
        answer: "Two",
        link: {
          prev: "three",
          next: "five",
        },
      },

      five: {
        number: 5,
        statement: "Which new weapon did Thor forge in the movie ?",
        options: [
          { _id: uuid(), option: "Mjolnir" },
          { _id: uuid(), option: "Jarnbjorn" },
          { _id: uuid(), option: "Thunderstrike" },
          { _id: uuid(), option: "Stormbreaker" },
        ],
        answer: "Stormbreaker",
        link: {
          prev: "four",
          next: "result",
        },
      },
    },
  },

  [CATEGORY_DOCTOR_STRANGE]: {
    name: "Doctor Strange",
    questions: {
      one: {
        number: 1,
        statement: "What was the wi-fi password that Mordo gave Strange ?",
        options: [
          { _id: uuid(), option: "Avada Kedavara" },
          { _id: uuid(), option: "Kaecillius" },
          { _id: uuid(), option: "Dormammu" },
          { _id: uuid(), option: "Shamballa" },
        ],
        answer: "Shamballa",
        link: {
          prev: "rules",
          next: "two",
        },
      },

      two: {
        number: 2,
        statement: "Who played the role of Dr. Stephen Strange in the movie ?",
        options: [
          { _id: uuid(), option: "Benedict Cumberbatch" },
          { _id: uuid(), option: "Robert Downey Jr." },
          { _id: uuid(), option: "Tom Hiddleston" },
          { _id: uuid(), option: "Mark Ruffalo" },
        ],
        answer: "Benedict Cumberbatch",
        link: {
          prev: "one",
          next: "three",
        },
      },

      three: {
        number: 3,
        statement: "Where did Dr. Strange go to get himself healed ?",
        options: [
          { _id: uuid(), option: "Taj Mahal" },
          { _id: uuid(), option: "Hong Kong" },
          { _id: uuid(), option: "Mt. Everest" },
          { _id: uuid(), option: "Kamar Taj" },
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
          { _id: uuid(), option: "The Cloak of Leviation" },
          { _id: uuid(), option: "The Infinity Stone" },
          { _id: uuid(), option: "The Eye of Agamotto" },
          { _id: uuid(), option: "The Wand of Watoomb" },
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
          { _id: uuid(), option: "The Dark Dimension" },
          { _id: uuid(), option: "London Sanctum" },
          { _id: uuid(), option: "The Mirror Dimension" },
          { _id: uuid(), option: "Hong Kong Sanctum" },
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
        statement: "What was the name of Captain Marvel's cat in this movie ?",
        options: [
          { _id: uuid(), option: "Louie" },
          { _id: uuid(), option: "Moose" },
          { _id: uuid(), option: "Chewie" },
          { _id: uuid(), option: "Goose" },
        ],
        answer: "Goose",
        link: {
          prev: "rules",
          next: "two",
        },
      },

      two: {
        number: 2,
        statement: "The release of Captain Marvel fell on which day ?",
        options: [
          { _id: uuid(), option: "Earth Day" },
          { _id: uuid(), option: "International Book Day" },
          { _id: uuid(), option: "World Press Freedom Day" },
          { _id: uuid(), option: "International Women's Day" },
        ],
        answer: "International Women's Day",
        link: {
          prev: "one",
          next: "three",
        },
      },

      three: {
        number: 3,
        statement: "Who were the main villains in Captain Marvel ?",
        options: [
          { _id: uuid(), option: "Krees" },
          { _id: uuid(), option: "Skrulls" },
          { _id: uuid(), option: "Novacorps" },
          { _id: uuid(), option: "Krptonians" },
        ],
        answer: "Skrulls",
        link: {
          prev: "two",
          next: "four",
        },
      },

      four: {
        number: 4,
        statement:
          "This was the ____ film to be released by the Marvel Cinematic Universe.",
        options: [
          { _id: uuid(), option: "26th" },
          { _id: uuid(), option: "11th" },
          { _id: uuid(), option: "21st" },
          { _id: uuid(), option: "16th" },
        ],
        answer: "21st",
        link: {
          prev: "three",
          next: "five",
        },
      },

      five: {
        number: 5,
        statement: "How many cameos did Stan Lee make in Captain Marvel ?",
        options: [
          { _id: uuid(), option: "3" },
          { _id: uuid(), option: "0" },
          { _id: uuid(), option: "1" },
          { _id: uuid(), option: "2" },
        ],
        answer: "2",
        link: {
          prev: "four",
          next: "result",
        },
      },
    },
  },
};
