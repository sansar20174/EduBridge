import {
  FaLinkedin,
  FaGithub,
  FaStar,
} from "react-icons/fa";

const mentors = [
  {
    id: 1,
    name: "John Anderson",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    id: 2,
    name: "Sophia Wilson",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
  },
];

const Mentors = () => {
  return (
    <section className="mentors">
      <div className="section-title">
        <p className="section-label">OUR MENTORS</p>

        <h2>Learn From Industry Experts</h2>

        <p>
          Our experienced mentors help students gain practical
          knowledge and industry-ready skills.
        </p>
      </div>

      <div className="mentor-grid">
        {mentors.map((mentor) => (
          <div className="mentor-card" key={mentor.id}>
            <img src={mentor.image} alt={mentor.name} />

            <div className="mentor-content">
              <h3>{mentor.name}</h3>

              <p>{mentor.role}</p>

              <div className="mentor-rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mentor-socials">
                <a href="#">
                  <FaLinkedin />
                </a>

                <a href="#">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
