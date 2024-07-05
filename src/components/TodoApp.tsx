import React from "react";
import TodoList from "./TodoList";
import "../app/globals.css";
import { useEffect, useState } from "react";
import { getAllTodos } from "../../utils/supabaseFunction";

const TodoApp = () => {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    const getTodos = (async = () => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    });
    getTodos();
  }, []);

  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3 className="text-3xl">supabase Todo App</h3>
      <form>
        <input type="text" className="shadow-lg p-1 outline-none" />
        <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-300">
          add
        </button>
      </form>
      <TodoList />
      <TodoList />
      <TodoList />
    </section>
  );
};

export default TodoApp;
