import React from "react";
import { Link } from "react-router-dom";

interface INavButton {
  to: string;
  text: string;
}

const NavButton = ({ to, text }: INavButton) => {
  return (
    <Link className="navBtn" to={to}>
      {text}
    </Link>
  );
};

export default NavButton;
