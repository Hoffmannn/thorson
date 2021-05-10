import React, { useContext, useState } from "react";

type AuthType = {
  token: string;
  setToken: (string) => void;
  isLoading: boolean;
  setIsLoading: (boolean) => void;
};

export const AuthContext = React.createContext({} as AuthType);

export const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AuthContext.Provider value={{ token, setToken, isLoading, setIsLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
};
