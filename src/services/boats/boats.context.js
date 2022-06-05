import React, { useState, useContext, createContext, useEffect } from "react";

import { boatsRequest } from "./boats.service";

export const BoatsContext = createContext();

export const BoatsContextProvider = ({ children }) => {
  const [boats, setBoats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveBoats = () => {
    setIsLoading(true);
    setBoats([]);

    setTimeout(() => {
      boatsRequest()
        .then((results) => {
          setIsLoading(false);
          setBoats(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveBoats();
  }, []);
  return (
    <BoatsContext.Provider
      value={{
        boats,
        isLoading,
        error,
      }}
    >
      {children}
    </BoatsContext.Provider>
  );
};
