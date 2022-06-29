import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const AuthWrapper = ({ children }) => {
  const { isError, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <main className="main">
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      </main>
    );
  }
  if (isError) {
    return (
      <main className="main">
        <h2 style={{ textAlign: "center" }}>oops! something went wrong</h2>
      </main>
    );
  }
  return children;
};

export default AuthWrapper;
