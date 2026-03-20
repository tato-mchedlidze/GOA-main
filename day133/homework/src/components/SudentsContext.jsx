// import { createContext } from "react";

// export const StudentsContext = createContext();


import { createContext } from "react";

export const StudentsContext = createContext();

export function StudentsProvider({ children }) {
  const students = [
    "Giorgi",
    "Nino",
    "Luka",
    "Mariam",
    "Saba"
  ];

  return (
    <StudentsContext.Provider value={students}>
      {children}
    </StudentsContext.Provider>
  );
}
