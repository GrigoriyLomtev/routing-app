import React from "react";
import NavButton from "./NavButton";

const TheHeader = () => {
  return (
    <header>
      <nav className="navigation">
        <NavButton to={"/"} text={"На главную"} />
        <NavButton to={"/profile"} text={"Профиль"} />
        <NavButton to={"/login"} text={"Вход"} />
        <NavButton to={"/registration"} text={"Регистрация"} />
      </nav>
    </header>
  );
};

export default TheHeader;
