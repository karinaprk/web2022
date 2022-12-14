import {createContext, useContext} from "react";

const SpeedContext = createContext(null);

export const Provider = SpeedContext.Provider;

export const useSpeedContext = () => useContext(SpeedContext);
