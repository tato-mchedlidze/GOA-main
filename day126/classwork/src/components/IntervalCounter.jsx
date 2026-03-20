import { useState, useEffect } from "react";

function IntervalCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 500);

    // cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>Count: {count}</p>;
}

export default IntervalCounter;
