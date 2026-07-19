import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">
            Learn. Grow. Achieve.
          </p>

          <h1>
            Bridge the gap between
            learning and success.
          </h1>

          <p>
            Discover courses, develop new skills,
            and continue your learning journey with
            EduBridge.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="primary-btn">
              Explore Courses
            </Link>

            <Link to="/signup" className="secondary-btn">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;