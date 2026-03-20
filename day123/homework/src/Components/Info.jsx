import { useState } from "react";

function Info() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Info</h2>

      <form>
        <input
          type="text"
          placeholder="anything"
          onChange={handleChange}
        />
      </form>

      <p>{text}</p>
    </div>
  );
}

export default Info;
