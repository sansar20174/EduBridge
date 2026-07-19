import { useEffect, useState } from "react";
import api from "../services/api";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses");
      setCourses(response.data.courses);
    } catch (error) {
      console.error(error);
      setMessage("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    if (!user) {
      setMessage("Please login before enrolling");
      return;
    }

    if (user.role === "admin") {
      setMessage("Admin accounts cannot enroll in courses");
      return;
    }

    try {
      const response = await api.post("/enrollments", {
        courseId,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Enrollment failed"
      );
    }
  };

  if (loading) {
    return <p className="loading">Loading courses...</p>;
  }

  return (
    <main className="courses-page">
      <div className="page-header">
        <p className="section-label">Explore Learning</p>
        <h1>Available Courses</h1>
        <p>
          Discover courses and build skills for your future.
        </p>
      </div>

      {message && (
        <p className="status-message">{message}</p>
      )}

      <div className="course-grid">
        {courses.length === 0 ? (
          <p>No courses available yet.</p>
        ) : (
          courses.map((course) => (
            <article
              className="course-card"
              key={course._id}
            >
              <span className="course-category">
                {course.category}
              </span>

              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <div className="course-info">
                <span>👨‍🏫 {course.instructor}</span>
                <span>⏱️ {course.duration}</span>
                <span>📊 {course.level}</span>
              </div>

              {user?.role !== "admin" && (
                <button
                  className="primary-btn"
                  onClick={() => handleEnroll(course._id)}
                >
                  Enroll Now
                </button>
              )}
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default Courses;