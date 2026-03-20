import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeButton from "./ThemeButton";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <ThemeButton />
    </div>
  );
}

export default Header;
