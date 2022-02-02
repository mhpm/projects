import { useEffect, useState } from "react";

export const useTodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const responseJson = await response.json();
      setTodos(responseJson.data);
    }

    fetchUsers();
  }, []);

  return [todos];
};
