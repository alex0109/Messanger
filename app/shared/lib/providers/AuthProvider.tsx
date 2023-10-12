import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useState } from "react";

import type { FC, ReactNode } from "react";

interface AuthContextType {
  token: string;

  isAuthenticated: boolean;
  // eslint-disable-next-line no-unused-vars
  authenticate: (arg0: string) => void;

  logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
};

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string>("");

  const authenticate = useCallback(async (token: string) => {
    setAuthToken(token);
    await AsyncStorage.setItem("token", token);
  }, []);

  const logout = useCallback(async () => {
    setAuthToken("");
    await AsyncStorage.removeItem("token");
  }, []);

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
