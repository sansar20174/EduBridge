import {
  FaUserPlus,
  FaLaptopCode,
  FaTasks,
  FaCertificate,
} from "react-icons/fa";

const LearningJourney = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Create Account",
      description:
        "Sign up and create your free EduBridge account.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Enroll in Courses",
      description:
        "Choose courses that match your learning goals.",
    },
    {
      icon: <FaTasks />,
      title: "Complete Assignments",
      description:
        "Practice with projects and assignments to improve your skills.",
    },
    {
      icon: <FaCertificate />,
      title: "Earn Certificate",
      description:
        "Receive a certificate after successfully completing your course.",
    },
  ];

  return (
    <section className="journey">
      <div className="section-title">
        <p className="section-label">
          LEARNING JOURNEY
        </p>

        <h2>How EduBridge Works</h2>

        <p>
          Follow these simple steps to begin your
          learning journey.
        </p>
      </div>

      <div className="journey-grid">
        {steps.map((step, index) => (
          <div
            className="journey-card"
            key={index}
          >
            <div className="journey-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

            <span className="step-number">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningJourney;