import React from 'react';
import { coffeeBrunchData } from '../data';


const CoffeContext = React.createContext();

export const CafeProvider = ({ children }) => {
  return <CoffeContext.Provider value={coffeeBrunchData}>{children}</CoffeContext.Provider>;
};

export const useCoffeeeData = () => {
  return React.useContext(CoffeContext);
};
