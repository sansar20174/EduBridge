import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../services/api";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses");
      setCourses(response.data.courses);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch enrolled courses
  const fetchEnrollments = async () => {
    if (!user || user.role === "admin") return;

    try {
      const response = await api.get("/enrollments/my-courses");

      const ids = response.data.enrollments.map(
        (enrollment) => enrollment.course._id
      );

      setEnrolledCourses(ids);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, []);

  // Enroll
  const handleEnroll = async (courseId) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login before enrolling.",
      });
      return;
    }

    if (user.role === "admin") {
      Swal.fire({
        icon: "info",
        title: "Admin Account",
        text: "Admin accounts cannot enroll in courses.",
      });
      return;
    }

    try {
      const response = await api.post("/enrollments", {
        courseId,
      });

      setEnrolledCourses((prev) => [...prev, courseId]);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: response.data.message,
        timer: 1800,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Enrollment Failed",
        text:
          error.response?.data?.message ||
          "Unable to enroll.",
      });
    }
  };

  // Unenroll
  const handleUnenroll = async (courseId) => {
    const result = await Swal.fire({
      title: "Unenroll from Course?",
      text: "You will lose access to this course and its assignments.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Unenroll",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      const response = await api.delete(
        `/enrollments/${courseId}`
      );

      setEnrolledCourses((prev) =>
        prev.filter((id) => id !== courseId)
      );

      Swal.fire({
        icon: "success",
        title: "Unenrolled!",
        text: response.data.message,
        timer: 1800,
        showConfirmButton: false,
      });
    } catch (error) {
      console.log(error.response);

      Swal.fire({
        icon: "error",
        title: "Failed",
        text:
          error.response?.data?.message ||
          "Unable to unenroll from the course.",
      });
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
        <p>Discover courses and build skills for your future.</p>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
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

            {user?.role !== "admin" &&
              (enrolledCourses.includes(course._id) ? (
                <button
                  className="secondary-btn"
                  onClick={() =>
                    handleUnenroll(course._id)
                  }
                >
                  Unenroll
                </button>
              ) : (
                <button
                  className="primary-btn"
                  onClick={() =>
                    handleEnroll(course._id)
                  }
                >
                  Enroll Now
                </button>
              ))}
          </article>
        ))}
      </div>
    </main>
  );
};

export default Courses;