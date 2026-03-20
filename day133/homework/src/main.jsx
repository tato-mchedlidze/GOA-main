// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// import { StudentsContext } from "./context/StudentsContext";

// const students = [
//   "Giorgi",
//   "Nino",
//   "Luka",
//   "Mariam",
//   "Saba"
// ];

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <StudentsContext.Provider value={students}>
//     <App />
//   </StudentsContext.Provider>
// );

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { StudentsProvider } from "./context/StudentsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StudentsProvider>
    <App />
  </StudentsProvider>
);
