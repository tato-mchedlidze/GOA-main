// cw1
function Task1() {
  const random1 = Math.random();
  const random2 = Math.random();

  return (
    <ul>
      {random1 > 0.5 && <li>Some random text</li>}

      <li>{random2 > 0.5 ? "hello" : "goodbye"}</li>
    </ul>
  );
}


// cw2
function Task2() {
  const interests = ["coding", "gaming", "music", "sports"];

  return (
    <ul>
      {interests.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}


// cw3
function Task3() {
  const isLoggedIn = Math.random() > 0.5;
  const showMessage = true;
  const numbers = [1, 2, 3];

  return (
    <div>

      <p>{isLoggedIn ? "Youlogged in" : "You not logged in"}</p>

      {showMessage && <p>visible</p>}

      <ul>
        {numbers.map((num) => (
          <li key={num}>Number: {num}</li>
        ))}
      </ul>

    </div>
  );
}

