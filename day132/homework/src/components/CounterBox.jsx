import useCounter from "../hooks/useCounter";

function CounterBox() {
  const { count, increase } = useCounter();

  return (
    <div className="p-4 bg-yellow-200 rounded">
      <p className="text-lg">Value: {count}</p>

      <button onClick={increase} className="px-3 py-1 bg-black text-white">
        Increase
      </button>
    </div>
  );
}

export default CounterBox;
