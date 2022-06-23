import { GameReducerActionTypes } from "types";
import { MARVELS_QUIZ_USER_GAME } from "utils";
import { gameInitialReducerState, gameReducer } from "reducer";
import React, { createContext, useContext, useReducer } from "react";

type GameContextType = {
  game: typeof gameInitialReducerState;
  dispatch: React.Dispatch<GameReducerActionTypes>;
};

const GameContext = createContext<GameContextType>({
  game: {
    ...gameInitialReducerState,
  },
  dispatch: () => {},
});

const GameProvider = ({ children }: { children: JSX.Element }) => {
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
