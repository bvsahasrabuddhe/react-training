import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/xusers"
      );
      setUsers(res.data);
    };
    fetchUsers();
    //get -> await promise -> res / err
    // .then((res) => setUsers(res.data))
    // .catch((err) => setError(err.message));
  }, []);

  return (
    <ul>
      {error && <p className="text-danger">{error}</p>}
      {users.map((user) => (
        <li key={user.id}> {user.name}</li>
      ))}
    </ul>
  );
};

export default App;
