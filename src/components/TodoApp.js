/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/TodoApp.css";

const TodoApp = () => {
  const { user, setUser } = useContext(AuthContext);

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [view, setView] = useState("all"); // all | add | update | delete

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
    else fetchTodos();
  }, [user]);

  const fetchTodos = async () => {
    const { data } = await axios.get("https://todo-backend-pez1.onrender.com/api/todos", {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setTodos(data);
  };

  // ADD TODO
  const addTodo = async () => {
    if (!title.trim()) return;

    const { data } = await axios.post(
      "https://todo-backend-pez1.onrender.com/api/todos",
      { title },
      { headers: { Authorization: `Bearer ${user.token}` } }
    );

    setTodos([...todos, data]);
    setTitle("");
    setView("all");
  };

  // UPDATE TODO (toggle completed)
  const updateTodo = async (todo) => {
    const { data } = await axios.put(
      `https://todo-backend-pez1.onrender.com/api/todos/${todo._id}`,
      { completed: !todo.completed },
      { headers: { Authorization: `Bearer ${user.token}` } }
    );

    setTodos(todos.map(t => (t._id === data._id ? data : t)));
  };

  // DELETE TODO
  const deleteTodo = async (id) => {
    await axios.delete(`https://todo-backend-pez1.onrender.com/api/todos/${id}`, {
      headers: { Authorization: `Bearer ${user.token}` }
    });

    setTodos(todos.filter(t => t._id !== id));
  };

  // LOGOUT
  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* VERTICAL NAVBAR */}
      <div className="sidebar">
        <h3>Todo Menu</h3>

        <button onClick={() => setView("all")}>📋 All Todos</button>
        <button onClick={() => setView("add")}>➕ Add Todo</button>
        <button onClick={() => setView("update")}>✏ Update Todo</button>
        <button onClick={() => setView("delete")}>🗑 Delete Todo</button>
      </div>

      {/* MAIN AREA */}
      <div className="main">

        {/* HORIZONTAL NAVBAR */}
        <div className="topbar">
          <button onClick={logoutHandler}>Logout</button>
          <h2>Today Todo</h2>
        </div>

        {/* CONTENT AREA */}
        <div className="content">

          {/* ALL TODOS (DEFAULT) */}
          {view === "all" && (
            <div className="todo-grid">
              {todos.map(todo => (
                <div
                  key={todo._id}
                  className={`todo-card ${todo.completed ? "done" : ""}`}
                >
                  <span>{todo.title}</span>

                  <span
                    className={`status ${
                      todo.completed ? "completed" : "pending"
                    }`}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ADD TODO */}
          {view === "add" && (
            <div className="action-box">
              <input
                type="text"
                placeholder="Enter new todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button onClick={addTodo}>Add Todo</button>
            </div>
          )}

          {/* UPDATE TODO */}
          {view === "update" && (
            <div className="todo-grid">
              {todos.map(todo => (
                <div
                  key={todo._id}
                  className={`todo-card ${todo.completed ? "done" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => updateTodo(todo)}
                  />
                  <span>{todo.title}</span>
                </div>
              ))}
            </div>
          )}

          {/* DELETE TODO */}
          {view === "delete" && (
            <div className="todo-grid">
              {todos.map(todo => (
                <div key={todo._id} className="todo-card">
                  <span>{todo.title}</span>
                  <button onClick={() => deleteTodo(todo._id)}>❌</button>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default TodoApp;
