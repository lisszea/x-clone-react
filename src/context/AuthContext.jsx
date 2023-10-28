import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(localStorage.getItem("user"));
  const [user, setUser] = useState(null);

  const login = (userId) => {
    setUserId(userId);
    localStorage.setItem("user", userId);
  };

  const logout = () => {
    setUser(undefined);
    setUserId(undefined);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

