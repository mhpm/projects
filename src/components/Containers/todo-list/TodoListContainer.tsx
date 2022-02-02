import { useState } from "react";
import { TodoList } from "../..";
import { ITodo } from "./TodoList.model";
interface TodoListContainerProps {
  todoList: ITodo[];
}

export const TodoListContainer = (props: TodoListContainerProps) => {
  const [todos, setTodos] = useState<ITodo[]>(props.todoList);

  const handleChange = (todo: ITodo) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === todo.id ? { ...item, isCompleted: !todo.isCompleted } : item
      )
    );
  };

  return (
    <TodoList>
      {todos.map((item) => (
        <TodoList.Item
          key={item.id}
          isCompleted={item.isCompleted}
          onChange={() => handleChange(item)}
        >
          {item.task.toUpperCase()}
        </TodoList.Item>
      ))}
    </TodoList>
  );
};
