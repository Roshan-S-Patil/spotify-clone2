import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

//we impooted this DataLayer in Index.js
//And there the DataLayer is wrapping the App component
//so Childern here is reffering components inside datalayer in Index .js
//if there are more components than App inside DataLayer then they will also be the children of DataLayer

export const Datalayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//Now To have Access to this Datalayer
export const useDataLayerValue = () => useContext(DataLayerContext);
