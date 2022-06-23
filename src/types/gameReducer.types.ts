import { ACTION_TYPE_RESET_GAME, ACTION_TYPE_SET_ANSWER } from "reducer";

export type GameReducerActionTypes =
  | {
      payload: {
        answer: {
          key: string;
          score: number;
          value: string;
        };
      };
      type: typeof ACTION_TYPE_SET_ANSWER;
    }
  | { type: typeof ACTION_TYPE_RESET_GAME };
