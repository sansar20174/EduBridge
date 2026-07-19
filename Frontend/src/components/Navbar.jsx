import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        EduBridge
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/courses">Courses</Link>

        {user ? (
          <>
            {user.role === "admin" ? (
              <Link to="/admin-dashboard">
                Admin Dashboard
              </Link>
            ) : (
              <Link to="/student-dashboard">
                My Learning
              </Link>
            )}

            <button
              className="theme-btn"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="theme-btn"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            <Link to="/login">Login</Link>

            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;