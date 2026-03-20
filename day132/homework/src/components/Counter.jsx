import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, increase, decrease } = useCounter();

  return (
    <div className="p-4 bg-blue-200 rounded">
      <p className="text-lg font-bold">Count: {count}</p>

      <button
        onClick={increase}
        className="px-3 py-1 bg-green-500 text-white mr-2"
      >
        +
      </button>

      <button onClick={decrease} className="px-3 py-1 bg-red-500 text-white">
        -
      </button>
    </div>
  );
}

export default Counter;
