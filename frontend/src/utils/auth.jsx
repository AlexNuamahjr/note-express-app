import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {      
      if (response.status === 200 && response.data.isAuthenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log("Error checking session", error);
      setIsAuthenticated(false);
    }
    // Call backend to check if the user is authenticated (session-based)
    // const checkAuthStatus = async () => {
    //   try {
    //     // const response = await axios.get(
    //     //   "http://localhost:8756/check-session",
    //     //   {
    //     //     withCredentials: true,
    //     //   }
    //     // );
    //     // console.log(response);

    //     if (response.status === 200 && response.data.isAuthenticated) {
    //       setIsAuthenticated(true);
    //     } else {
    //       setIsAuthenticated(false);
    //     }
    //   } catch (error) {
    //     console.log("Error checking session", error);
    //     setIsAuthenticated(false);
    //   }
    // };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
