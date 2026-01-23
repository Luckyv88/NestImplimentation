import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Home page with two buttons */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todos" element={<TodoApp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
