import { Link, useNavigate } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

import lightLogo from "../assets/logo-light.png";
import darkLogo from "../assets/logo-dark.png";

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
      {/* Logo */}
      <Link to="/" className="logo">
        <img
          src={theme === "dark" ? darkLogo : lightLogo}
          alt="EduBridge Logo"
          className="logo-img"
        />
        <span className="logo-text">EduBridge</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/courses">Courses</Link>

        {user &&
          (user.role === "admin" ? (
            <Link to="/admin-dashboard">Admin Dashboard</Link>
          ) : (
            <Link to="/student-dashboard">My Learning</Link>
          ))}

        {user ? (
          <>
            <button className="nav-action" onClick={handleLogout}>
              Logout
            </button>

            <button
              type="button"
              className={`theme-toggle ${theme === "dark" ? "is-dark" : ""}`}
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
              aria-pressed={theme === "dark"}
            >
              <span className="theme-toggle__track">
                <span
                  className={`theme-toggle__icon theme-toggle__icon--sun ${
                    theme === "light" ? "is-active" : ""
                  }`}
                >
                  <FiSun />
                </span>

                <span className="theme-toggle__thumb"></span>

                <span
                  className={`theme-toggle__icon theme-toggle__icon--moon ${
                    theme === "dark" ? "is-active" : ""
                  }`}
                >
                  <FiMoon />
                </span>
              </span>
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/signup">Sign Up</Link>

            <button
              type="button"
              className={`theme-toggle ${theme === "dark" ? "is-dark" : ""}`}
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
              aria-pressed={theme === "dark"}
            >
              <span className="theme-toggle__track">
                <span
                  className={`theme-toggle__icon theme-toggle__icon--sun ${
                    theme === "light" ? "is-active" : ""
                  }`}
                >
                  <FiSun />
                </span>

                <span className="theme-toggle__thumb"></span>

                <span
                  className={`theme-toggle__icon theme-toggle__icon--moon ${
                    theme === "dark" ? "is-active" : ""
                  }`}
                >
                  <FiMoon />
                </span>
              </span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;