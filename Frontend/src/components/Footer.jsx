import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h2 className="footer-logo">EduBridge</h2>

          <p>
            Empowering learners through modern education,
            practical projects, expert mentors, and career-focused
            courses.
          </p>

          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>

        <div className="footer-column">
          <h3>Popular Courses</h3>

          <Link to="/courses">Web Development</Link>
          <Link to="/courses">MERN Stack</Link>
          <Link to="/courses">Python</Link>
          <Link to="/courses">UI/UX Design</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>
            <FaEnvelope /> support@edubridge.com
          </p>

          <p>
            <FaPhone /> +91 98765 43210
          </p>

          <p>
            <FaMapMarkerAlt /> India
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EduBridge. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;