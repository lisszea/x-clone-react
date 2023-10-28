import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", userData);
  };

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

