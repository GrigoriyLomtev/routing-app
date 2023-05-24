import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/auth-slice";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name } = useTypedSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>{`Welcome, ${name}!`}</p>
      <button className="submitBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
