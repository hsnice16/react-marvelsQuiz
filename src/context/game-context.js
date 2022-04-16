import { MARVELS_QUIZ_USER_GAME } from "utils";
import { createContext, useContext, useReducer } from "react";
import { gameInitialReducerState, gameReducer } from "reducer";

const initialValue = {
  game: {
    ...gameInitialReducerState,
  },
  dispatch: () => {},
};

const GameContext = createContext(initialValue);

const GameProvider = ({ children }) => {
  const [game, dispatch] = useReducer(
    gameReducer,
    JSON.parse(sessionStorage.getItem(MARVELS_QUIZ_USER_GAME)) ??
      gameInitialReducerState
  );

  const value = { game, dispatch };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

const useGame = () => useContext(GameContext);

export { GameProvider, useGame };
