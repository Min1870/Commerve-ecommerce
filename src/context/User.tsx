import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface UserContext {
  loginWithRedirect: any;
  logout: any;
  myUser: any;
  isLoading: boolean;
  error: any;
  isSidebarOpen: boolean;
  toggleSidebar: (mode: "open" | "close") => void;
}

const UserContext = createContext<UserContext>({} as UserContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const { loginWithRedirect, logout, user, error, isLoading } = useAuth0();

  const [myUser, setMyUser] = useState<any>(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = (mode: "open" | "close") => {
    setIsSidebarOpen(mode === "open");
  };

  useEffect(() => {
    console.log("user", user);
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        loginWithRedirect,
        logout,
        myUser,
        isLoading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
