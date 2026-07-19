import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Start Your Learning Journey?</h2>

        <p>
          Join thousands of students already learning with EduBridge.
          Explore courses, complete projects, and earn certificates.
        </p>

        <div className="cta-buttons">
          <Link to="/signup" className="primary-btn">
            Get Started
          </Link>

          <Link to="/courses" className="secondary-btn">
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;