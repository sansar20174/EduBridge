import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">
          🚀 Learn. Grow. Achieve.
        </p>

        <h1>
          Bridge the Gap Between
          <span> Learning </span>
          and Success.
        </h1>

        <p className="hero-description">
          Learn from expert instructors, complete
          real-world assignments, and build skills
          that prepare you for your dream career.
        </p>

        <div className="hero-buttons">
          <Link to="/courses" className="primary-btn">
            Explore Courses
          </Link>

          <Link to="/signup" className="secondary-btn">
            Get Started
          </Link>
        </div>

        <div className="hero-stats">
          <div>
            <h2>5000+</h2>
            <p>Students</p>
          </div>

          <div>
            <h2>150+</h2>
            <p>Courses</p>
          </div>

          <div>
            <h2>40+</h2>
            <p>Mentors</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
          alt="Students Learning"
        />

        <div className="floating-card card1">
          <FaBookOpen />
          <span>150+ Courses</span>
        </div>

        <div className="floating-card card2">
          <FaGraduationCap />
          <span>Expert Mentors</span>
        </div>

        <div className="floating-card card3">
          <FaUsers />
          <span>5000+ Students</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;