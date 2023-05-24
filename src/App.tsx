import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TheHeader from "./components/TheHeader";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";

const App = () => {
  const isAuthenticated = useTypedSelector(
    (state) => state.auth.isAuthenticated
  );
  return (
    <div className="container">
      <TheHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {isAuthenticated ? (
          <Route
            path="/registration"
            element={<Navigate to="/profile" replace />}
          />
        ) : (
          <Route path="/registration" element={<Registration />} />
        )}
        {isAuthenticated ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/profile" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
