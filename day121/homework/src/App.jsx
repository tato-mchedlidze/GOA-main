import Hello from "./components/Hallo";
import HelloButton from "./components/HalloButton";

function App() {
  function someFunction() {
    alert("Button clicked!");
  }

  return (
    <div>
      <Hello name="Alice" />
      <HelloButton onClick={someFunction} />
    </div>
  );
}

export default App;
