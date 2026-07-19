import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const StudentDashboard = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [enrollmentResponse, assignmentResponse] =
          await Promise.all([
            api.get("/enrollments/my-courses"),
            api.get("/assignments"),
          ]);

        setEnrollments(
          enrollmentResponse.data.enrollments || []
        );

        setAssignments(
          assignmentResponse.data.assignments || []
        );
      } catch (error) {
        setMessage(
          error.response?.data?.message ||
            "Failed to load dashboard"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Only show assignments belonging to enrolled courses
  const enrolledCourseIds = enrollments.map(
    (enrollment) => enrollment.course?._id
  );

  const myAssignments = assignments.filter(
    (assignment) =>
      enrolledCourseIds.includes(assignment.course?._id)
  );

  if (loading) {
    return (
      <p className="loading">
        Loading your dashboard...
      </p>
    );
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <p className="section-label">
            Student Dashboard
          </p>

          <h1>
            Welcome back, {user?.name || "Student"} 👋
          </h1>

          <p>
            Continue learning and keep track of your
            assignments.
          </p>
        </div>
      </section>

      {message && (
        <p className="status-message">{message}</p>
      )}

      <section className="stats-grid">
        <div className="stat-card">
          <h3>Enrolled Courses</h3>
          <p>{enrollments.length}</p>
        </div>

        <div className="stat-card">
          <h3>Assignments</h3>
          <p>{myAssignments.length}</p>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <h2>My Courses</h2>

          <Link to="/courses">
            Explore More Courses
          </Link>
        </div>

        <div className="course-grid">
          {enrollments.length === 0 ? (
            <div className="empty-state">
              <h3>No enrolled courses yet</h3>

              <p>
                Explore available courses and start
                learning.
              </p>

              <Link
                to="/courses"
                className="primary-btn"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            enrollments.map((enrollment) => (
              <article
                className="course-card"
                key={enrollment._id}
              >
                <span className="course-category">
                  {enrollment.course?.category}
                </span>

                <h3>
                  {enrollment.course?.title}
                </h3>

                <p>
                  {enrollment.course?.description}
                </p>

                <div className="course-info">
                  <span>
                    👨‍🏫{" "}
                    {enrollment.course?.instructor}
                  </span>

                  <span>
                    ⏱️{" "}
                    {enrollment.course?.duration}
                  </span>

                  <span>
                    📊 {enrollment.course?.level}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <h2>My Assignments</h2>
        </div>

        <div className="assignment-list">
          {myAssignments.length === 0 ? (
            <div className="empty-state">
              <h3>No assignments yet</h3>

              <p>
                Assignments for your enrolled courses
                will appear here.
              </p>
            </div>
          ) : (
            myAssignments.map((assignment) => (
              <article
                className="assignment-card"
                key={assignment._id}
              >
                <div>
                  <span className="course-category">
                    {assignment.course?.title}
                  </span>

                  <h3>{assignment.title}</h3>

                  <p>{assignment.description}</p>
                </div>

                <div className="due-date">
                  <strong>Due Date</strong>

                  <span>
                    {new Date(
                      assignment.dueDate
                    ).toLocaleDateString()}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default StudentDashboard;