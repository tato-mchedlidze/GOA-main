import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial"
  };

  const userStyle = {
    padding: "10px",
    marginBottom: "8px",
    border: "1px solid #ccc",
    cursor: "pointer"
  };

  const detailStyle = {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid black"
  };

  if (loading) {
    return <p style={containerStyle}>Loading users...</p>;
  }

  if (error) {
    return <p style={containerStyle}>Error: {error}</p>;
  }

  return (
    <div style={containerStyle}>
      <h2>User List</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={userStyle}
          onClick={() => setSelectedUser(user)}
        >
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}

      {selectedUser && (
        <div style={detailStyle}>
          <h3>User Details</h3>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
          <p><strong>Website:</strong> {selectedUser.website}</p>
        </div>
      )}
    </div>
  );
}

export default App;
