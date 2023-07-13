import React, { createContext, useContext, useReducer } from "react";
import { data } from "../Data";

const DataContext = createContext();

const InitialState = {
  list: [...data.meetups],
  sortBy: "Both",
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "SORT_TYPE": {
      return { ...state, sortBy: action.payload };
    }
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);

  let eventList = state.list;

  if (state.sortBy == "Offline") {
    eventList = eventList.filter((currentEvent) => {
      return currentEvent.eventType == "Offline";
    });
  } else if (state.sortBy == "Online") {
    eventList = eventList.filter((currentEvent) => {
      return currentEvent.eventType == "Online";
    });
  } else {
    eventList = state.list;
  }

  return (
    <DataContext.Provider value={{ state, dispatch, eventList }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
