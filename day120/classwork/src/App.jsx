import InfoComponent from "./component/InfoComponent";


function App() {
  const myName = "Tato";       
  const mySurname = "Mchedlidze";

  return (
    <div>
      <InfoComponent username={myName} surname={mySurname} />
    </div>
  );
}

export default App;
