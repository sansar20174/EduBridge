import { useEffect, useState } from "react";
import api from "../services/api";

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [message, setMessage] = useState("");

  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    category: "",
    instructor: "",
    duration: "",
    level: "Beginner",
  });

  const [assignmentForm, setAssignmentForm] = useState({
    title: "",
    description: "",
    course: "",
    dueDate: "",
  });

  const fetchData = async () => {
    try {
      const courseResponse = await api.get("/courses");
      setCourses(courseResponse.data.courses || []);

      const assignmentResponse = await api.get("/assignments");
      setAssignments(
        assignmentResponse.data.assignments || []
      );
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to load dashboard"
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCourseChange = (e) => {
    setCourseForm({
      ...courseForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAssignmentChange = (e) => {
    setAssignmentForm({
      ...assignmentForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    try {
      await api.post("/courses", courseForm);

      setMessage("Course created successfully");

      setCourseForm({
        title: "",
        description: "",
        category: "",
        instructor: "",
        duration: "",
        level: "Beginner",
      });

      fetchData();
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to create course"
      );
    }
  };

  const handleDeleteCourse = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/courses/${id}`);

      setMessage("Course deleted successfully");
      fetchData();
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to delete course"
      );
    }
  };

  const handleCreateAssignment = async (e) => {
    e.preventDefault();

    try {
      await api.post("/assignments", assignmentForm);

      setMessage("Assignment created successfully");

      setAssignmentForm({
        title: "",
        description: "",
        course: "",
        dueDate: "",
      });

      fetchData();
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to create assignment"
      );
    }
  };

  const handleDeleteAssignment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this assignment?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/assignments/${id}`);

      setMessage("Assignment deleted successfully");
      fetchData();
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to delete assignment"
      );
    }
  };

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <p className="section-label">
            Admin Dashboard
          </p>

          <h1>Manage EduBridge</h1>

          <p>
            Create courses, manage learning content,
            and add assignments.
          </p>
        </div>
      </section>

      {message && (
        <p className="status-message">{message}</p>
      )}

      <section className="stats-grid">
        <div className="stat-card">
          <h3>Total Courses</h3>
          <p>{courses.length}</p>
        </div>

        <div className="stat-card">
          <h3>Total Assignments</h3>
          <p>{assignments.length}</p>
        </div>
      </section>

      <section className="admin-grid">
        <div className="admin-form-card">
          <h2>Create Course</h2>

          <form onSubmit={handleCreateCourse}>
            <input
              type="text"
              name="title"
              placeholder="Course title"
              value={courseForm.title}
              onChange={handleCourseChange}
              required
            />

            <textarea
              name="description"
              placeholder="Course description"
              value={courseForm.description}
              onChange={handleCourseChange}
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={courseForm.category}
              onChange={handleCourseChange}
              required
            />

            <input
              type="text"
              name="instructor"
              placeholder="Instructor name"
              value={courseForm.instructor}
              onChange={handleCourseChange}
              required
            />

            <input
              type="text"
              name="duration"
              placeholder="Duration, e.g. 12 Weeks"
              value={courseForm.duration}
              onChange={handleCourseChange}
              required
            />

            <select
              name="level"
              value={courseForm.level}
              onChange={handleCourseChange}
            >
              <option value="Beginner">
                Beginner
              </option>

              <option value="Intermediate">
                Intermediate
              </option>

              <option value="Advanced">
                Advanced
              </option>
            </select>

            <button
              type="submit"
              className="primary-btn"
            >
              Create Course
            </button>
          </form>
        </div>

        <div className="admin-form-card">
          <h2>Create Assignment</h2>

          <form onSubmit={handleCreateAssignment}>
            <input
              type="text"
              name="title"
              placeholder="Assignment title"
              value={assignmentForm.title}
              onChange={handleAssignmentChange}
              required
            />

            <textarea
              name="description"
              placeholder="Assignment description"
              value={assignmentForm.description}
              onChange={handleAssignmentChange}
              required
            />

            <select
              name="course"
              value={assignmentForm.course}
              onChange={handleAssignmentChange}
              required
            >
              <option value="">
                Select a course
              </option>

              {courses.map((course) => (
                <option
                  key={course._id}
                  value={course._id}
                >
                  {course.title}
                </option>
              ))}
            </select>

            <input
              type="date"
              name="dueDate"
              value={assignmentForm.dueDate}
              onChange={handleAssignmentChange}
              required
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Create Assignment
            </button>
          </form>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <h2>Manage Courses</h2>
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

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-info">
                <span>👨‍🏫 {course.instructor}</span>
                <span>⏱️ {course.duration}</span>
                <span>📊 {course.level}</span>
              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  handleDeleteCourse(course._id)
                }
              >
                Delete Course
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <h2>Manage Assignments</h2>
        </div>

        <div className="assignment-list">
          {assignments.map((assignment) => (
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

              <div className="assignment-actions">
                <span>
                  Due:{" "}
                  {new Date(
                    assignment.dueDate
                  ).toLocaleDateString()}
                </span>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDeleteAssignment(
                      assignment._id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;