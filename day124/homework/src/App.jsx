import { useState } from "react";

function App() {
  const names = [
    "biba",
    "datuna",
    "saba",
    "soso",
    "david",
    "bachi",
  ];

  const [selected, setSelected] = useState([]);

  const addName = (name) => {
    setSelected([...selected, name]);
  };

  const removeName = (name) => {
    setSelected(selected.filter((n) => n !== name));
  };

  const reset = () => {
    setSelected([]);
  };

  return (
    <div
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "serif",
      }}
    >
      <h1>Selected names</h1>

      {/* Selected names */}
      <ul>
        {selected.map((name, index) => (
          <li key={index}>
            {name}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => removeName(name)}
            >
              remove name
            </button>
          </li>
        ))}
      </ul>

      <button onClick={reset}>Reset</button>

      <hr />

      {/* All names */}
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => addName(name)}
            >
              add name
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

