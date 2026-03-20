import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Info() {
  const value = useContext(MyContext);

  return <p className="text-lg font-semibold text-blue-600">{value}</p>;
}

export default Info;
