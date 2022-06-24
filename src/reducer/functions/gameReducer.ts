import { GameReducerActionTypes } from "types";
import { MARVELS_QUIZ_USER_GAME } from "utils";

import {
  ACTION_TYPE_RESET_GAME,
  ACTION_TYPE_SET_ANSWER,
  gameInitialReducerState,
} from "reducer";

export const gameReducer = (
  state: typeof gameInitialReducerState,
  action: GameReducerActionTypes
): typeof gameInitialReducerState => {
  switch (action.type) {
    case ACTION_TYPE_SET_ANSWER: {
      const {
        answer: { key, value, score },
      } = action.payload;

      const newState = {
        ...state,
        answers: { ...state.answers, [key]: { value, score } },
      };

      sessionStorage.setItem(MARVELS_QUIZ_USER_GAME, JSON.stringify(newState));

      return newState;
    }

    case ACTION_TYPE_RESET_GAME: {
      sessionStorage.setItem(
        MARVELS_QUIZ_USER_GAME,
        JSON.stringify({ ...gameInitialReducerState })
      );

      return { ...gameInitialReducerState };
    }

    default:
      return state;
  }
};
