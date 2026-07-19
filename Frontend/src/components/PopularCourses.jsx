import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses");
      setCourses(res.data.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="popular-courses">
      <div className="section-title">
        <p className="section-label">
          POPULAR COURSES
        </p>

        <h2>Start Learning Today</h2>

        <p>
          Explore our most popular courses and
          enhance your skills with practical
          learning.
        </p>
      </div>

      <div className="popular-grid">
        {courses.map((course) => (
          <div
            key={course._id}
            className="popular-card"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
              alt={course.title}
            />

            <div className="popular-content">
              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-footer">
                <span>⭐ 4.8</span>

                <Link
                  to="/courses"
                  className="primary-btn"
                >
                  View Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;