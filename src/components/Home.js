import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card home-card">
        <h2>Welcome to Todo App</h2>
        <p>Manage your tasks smartly & efficiently</p>

        <button onClick={() => navigate("/login")}>Login</button>
        <button className="secondary" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
