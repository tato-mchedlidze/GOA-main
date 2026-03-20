import useInfo from "./hooks/useInfo";

function App() {
  const { count, increase, decrease, reset } = useInfo();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
      <p className="text-2xl font-bold">Count: {count}</p>

      <div className="flex gap-2">
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increase
        </button>

        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrease
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
