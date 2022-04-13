import {
  gameInitialReducerState,
  ACTION_TYPE_SET_ANSWER,
  ACTION_TYPE_RESET_GAME,
} from "reducer";

export const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE_SET_ANSWER:
      const {
        answer: { key, value, score },
      } = action.payload;

      return {
        ...state,
        answers: { ...state.answers, [key]: { value, score } },
      };

    case ACTION_TYPE_RESET_GAME:
      return { ...gameInitialReducerState };

    default:
      return state;
  }
};
