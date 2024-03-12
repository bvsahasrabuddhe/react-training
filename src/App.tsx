import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));

    return () => controller.abort();
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
