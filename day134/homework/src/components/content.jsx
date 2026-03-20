import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>The app theme is now: {theme}</p>
    </div>
  );
}

export default Content;
