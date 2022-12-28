import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    );
  }
  if (!user) {
    // rediret user to the router they wanted to go before login
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default Privateroute;
