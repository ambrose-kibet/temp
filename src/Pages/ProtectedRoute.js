import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
const ProtectedRoute = ({ children }) => {
  const { myUser } = useUserContext();
  if (!myUser.isAuthenticated) {
    return <Navigate to="/" />;
  }
  return { ...children };
};

export default ProtectedRoute;
