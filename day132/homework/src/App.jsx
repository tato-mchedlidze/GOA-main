import Counter from "./components/Counter";
import CounterBox from "./components/CounterBox";

function App() {
  return (
    <div className="min-h-screen flex gap-6 justify-center items-center bg-gray-100">
      <Counter />
      <CounterBox />
    </div>
  );
}

export default App;
