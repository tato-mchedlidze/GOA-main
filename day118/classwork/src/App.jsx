// const App = () => {
//   const mainObj = {
//     siteName: "homework",
//     mainText: "Welcome to tato :D",
//     footerText: "Thanks for visiting my website"
//   }

//   return (
//     <>
//       <header>
//         <h1>Welcome to: {mainObj.siteName}</h1>
//         <br />
//       </header>

//       <main>
//         <p>{mainObj.mainText}</p>
//         <br />
//       </main>

//       <footer>
//         <b>{mainObj.footerText}</b>
//       </footer>
//     </>
//   )
// };

// export default App;

import Button from "./components/Button";

function App() {
  return (
    <main>
      <Button />
    </main>
  );
}

export default App;
