import { useEffect, useState } from "react";

const Comp1 = () => {
  const [users, setUsers] = useState([]);

  const getInfo = async (apiLink) => {
    try {
      const res = await fetch(apiLink);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfo("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <section>
      <ul>
        {users.map((user, ind) => (
          <li key={ind}>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Website:</b> {user.website}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Comp1;
