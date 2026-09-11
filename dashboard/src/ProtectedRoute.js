import React, { useEffect, useState } from "react";
import api from "./Axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await api.get("/me");
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  if (!isAuthenticated) {
    window.location.href = process.env.REACT_APP_FRONTEND_URL + "/login";
    return null;
  }

  return children;
};

export default ProtectedRoute;
