import Enrollment from "../models/enrollmentModel.js";
import Course from "../models/courseModel.js";

// Enroll in a course
export const enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    // Check if course exists
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (existingEnrollment) {
      return res.status(400).json({
        message: "You are already enrolled in this course",
      });
    }

    const enrollment = await Enrollment.create({
      student: req.user.id,
      course: courseId,
    });

    res.status(201).json({
      message: "Enrolled successfully",
      enrollment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Enrollment failed",
      error: error.message,
    });
  }
};

// Get logged-in student's enrolled courses
export const getMyCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      student: req.user.id,
    }).populate("course");

    res.status(200).json({
      count: enrollments.length,
      enrollments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get enrolled courses",
      error: error.message,
    });
  }
};

export const unenrollCourses = async (req, res) => {
  try {
    const { courseId } = req.params;

    const enrollment = await Enrollment.findOneAndDelete({
      student: req.user.id,
      course: courseId,
    });

    if (!enrollment) {
      return res.status(404).json({
        message: "Enrollment not found",
      });
    }

    res.status(200).json({
      message: "Course unenrolled successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to unenroll",
      error: error.message,
    });
  }
};