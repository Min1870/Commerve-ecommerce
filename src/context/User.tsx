import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface UserContext {
  isSidebarOpen: boolean;
  toggleSidebar: (mode: 'open' | 'close') => void;
}

const UserContext = createContext<UserContext>({} as UserContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = (mode: 'open' | 'close') => {
    setIsSidebarOpen(mode === "open");
  };
  return (
    <UserContext.Provider value={{ isSidebarOpen,toggleSidebar}}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
