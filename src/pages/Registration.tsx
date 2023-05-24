import React, { useState } from "react";
import jsonUsers from "../data/users.json";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [nameState, setNameState] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Введенные пароли не совпадают");
    } else {
      setErrorMessage("");

      const nameIsAvailable = !jsonUsers.some(
        (user) => user.username === username
      );

      if (nameIsAvailable) {
        setSuccessMessage("Вы успешно зарегистрировались!");
      } else {
        setErrorMessage("Пользователь с таким логином уже зарегистрирован");
      }
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Registration</h1>
      {successMessage && (
        <>
          <div className="successMessage">{successMessage}</div>
          <button className="submitBtn" onClick={goToLogin}>
            Далее
          </button>
        </>
      )}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      {!successMessage && (
        <form onSubmit={handleSubmit} className="authForm">
          <div className={"inputField"}>
            <label>
              Имя:
              <input
                type="text"
                value={nameState}
                minLength={2}
                maxLength={15}
                onChange={(e) => setNameState(e.target.value)}
              />
            </label>
          </div>
          <div className={"inputField"}>
            <label>
              Логин:
              <input
                type="text"
                value={username}
                minLength={2}
                maxLength={15}
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
                minLength={2}
                maxLength={15}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className={"inputField"}>
            <label>
              Повторите пароль:
              <input
                type="password"
                value={confirmPassword}
                minLength={2}
                maxLength={15}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          <button className="submitBtn" type="submit">
            Регистрация
          </button>
        </form>
      )}
    </div>
  );
};

export default Registration;
