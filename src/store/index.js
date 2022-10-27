import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const persistUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(user);
  };

  const loadUser = () => {
    const jsonUser = localStorage.getItem("user");
    if (jsonUser) {
      const user = JSON.parse(jsonUser);
      setCurrentUser(user);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        persistUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
