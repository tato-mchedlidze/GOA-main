import { useContext } from "react";
import ThemeContext from "../context/TheamContext";

function Info() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <div
      className={
        'p-9 text-center ${ isLight ? "bg-white text-black" : "bg-black text-white" }'
      }
    >
      <h1 className="text-2xl font-bold"> theme : {theme} </h1>
      <p className="mb-4"> should react </p>

      <button onClick={() => setTheme(isLight ? "dark" : "light")}>
        {" "}
        toggle theme{" "}
      </button>
    </div>
  );
}

export default Info;
