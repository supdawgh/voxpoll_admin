import { createContext, useEffect, useState } from "react";

import axios from "axios";
export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || {}
  );

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const axiosins = axios.create({
    baseURL: "http://localhost:3500",
    headers: {
      Authorization: `Bearer ${auth.accessToken}`,
    },
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth, axiosins }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
