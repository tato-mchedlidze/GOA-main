import { useState, useEffect } from "react";

function KeydownCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = () => {
      setCount((prev) => prev + 1);
    };

    document.addEventListener("keydown", handleKeyDown);

    // cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <p>Count: {count}</p>;
}

export default KeydownCounter;
