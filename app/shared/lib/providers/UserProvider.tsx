import React, { createContext, useState } from "react";

import type { FC, ReactNode } from "react";

interface UserContextInterface {
  userId: string | null;
  setUserId: (newUserId: string) => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}
const defaultUserContext: UserContextInterface = {
  userId: null,
  setUserId: () => {},
};

const UserContext = createContext<UserContextInterface>(defaultUserContext);

const UserProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState("");
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
