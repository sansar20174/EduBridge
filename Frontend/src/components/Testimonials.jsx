import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "MERN Stack",
    review:
      "EduBridge made learning web development simple and practical. The projects helped me gain confidence.",
  },
  {
    id: 2,
    name: "Priya Verma",
    course: "UI/UX Design",
    review:
      "The mentors explained every concept clearly. I loved the interactive assignments and real-world examples.",
  },
  {
    id: 3,
    name: "Aman Gupta",
    course: "Python Programming",
    review:
      "One of the best learning platforms I've used. The course structure was easy to follow and very engaging.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="section-title">
        <p className="section-label">TESTIMONIALS</p>

        <h2>What Our Students Say</h2>

        <p>
          Hear from learners who have improved their skills through EduBridge.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="testimonial-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="testimonial-text">
              "{item.review}"
            </p>

            <h3>{item.name}</h3>

            <span>{item.course}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;