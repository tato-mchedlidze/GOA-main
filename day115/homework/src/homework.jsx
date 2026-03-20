import React from "react";

export default function homework() {
  const [count, setCount] = React.useState(0);
  const username = "Z";

  return (
    <div>
      <img src="placeholder.com" alt="placeholder" />
      <br />

      <p>{`Hello, ${username}!`}</p>

      <button
        onClick={() => setCount(count + 1)}
        title={`Current count is ${count}`}
      >
        {`Clicked ${count} times`}
      </button>

      <hr />
    </div>
  );
}