import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/auth-slice";
import jsonUsers from "../data/users.json";
import { UserObject } from "../types";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findNameByUsername = (username: string) => {
    const user = jsonUsers.find(
      (user: UserObject) => user.username === username
    );
    return user ? user.name : "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      jsonUsers.some((user) => user.username === username) &&
      jsonUsers.some((user) => user.password === password)
    ) {
      dispatch(login({ name: findNameByUsername(username) }));
      navigate("/profile");
    } else {
      setErrorMessage("Имя пользователя или пароль введены не верно");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <form className="authForm" onSubmit={handleSubmit}>
        <div className={"inputField"}>
          <label>
            Логин:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className={"inputField"}>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button className="submitBtn" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
