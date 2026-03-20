import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ name: "Giorgi", age: 25 });
        }, 1000);
      });

      setUser(response);
    }

    fetchUser();
  }, []);

  return (
    <div>
      <h2>User Info</h2>

      {user ? (
        <p>
          Name: {user.name} <br />
          Age: {user.age}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default User;
