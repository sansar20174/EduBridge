import {
  FaBookOpen,
  FaGraduationCap,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="features">
      <div className="section-title">
        <p className="section-label">WHY CHOOSE US</p>

        <h2>Why Choose EduBridge?</h2>

        <p>
          Everything you need to learn, practice,
          collaborate, and build your career in one
          modern learning platform.
        </p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <FaBookOpen className="feature-icon" />

          <h3>Interactive Courses</h3>

          <p>
            Learn through engaging lessons, quizzes,
            and practical projects.
          </p>
        </div>

        <div className="feature-card">
          <FaGraduationCap className="feature-icon" />

          <h3>Expert Mentors</h3>

          <p>
            Learn directly from industry professionals
            with years of experience.
          </p>
        </div>

        <div className="feature-card">
          <FaUsers className="feature-icon" />

          <h3>Learning Community</h3>

          <p>
            Join thousands of learners, collaborate,
            and grow together.
          </p>
        </div>

        <div className="feature-card">
          <FaAward className="feature-icon" />

          <h3>Certificates</h3>

          <p>
            Earn certificates after successfully
            completing your learning journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;