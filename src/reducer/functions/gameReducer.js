import { MARVELS_QUIZ_USER_GAME } from "utils";
import {
  gameInitialReducerState,
  ACTION_TYPE_SET_ANSWER,
  ACTION_TYPE_RESET_GAME,
} from "reducer";

export const gameReducer = (state, action) => {
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
