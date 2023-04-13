import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./authContext";
import { AppRouter } from "../router/AppRouter";

const my_auth_app = "my_auth_app";

export const AuthProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(my_auth_app) ?? false
  );

  const login = useCallback(function () {
    window.localStorage.setItem(my_auth_app, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(my_auth_app);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    const onLogout = () => {
      logout();
    };
    window.addEventListener("logout", onLogout);
    return () => window.removeEventListener("logout", onLogout);
  }, [logout]);

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  );

  return (
    <AuthContext.Provider value={ value }>
      <AppRouter />
    </AuthContext.Provider>
  );
};
