import Assignment from "../models/assignmentModel.js";
import Course from "../models/courseModel.js";

// Create assignment - Admin only
export const createAssignment = async (req, res) => {
  try {
    const {
      title,
      description,
      course,
      dueDate,
    } = req.body;

    if (!title || !description || !course || !dueDate) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    // Check if course exists
    const existingCourse = await Course.findById(course);

    if (!existingCourse) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    const assignment = await Assignment.create({
      title,
      description,
      course,
      dueDate,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Assignment created successfully",
      assignment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create assignment",
      error: error.message,
    });
  }
};

// Get all assignments
export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find()
      .populate("course", "title category instructor")
      .sort({ dueDate: 1 });

    res.status(200).json({
      count: assignments.length,
      assignments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get assignments",
      error: error.message,
    });
  }
};

// Get assignments for one course
export const getAssignmentsByCourse = async (req, res) => {
  try {
    const assignments = await Assignment.find({
      course: req.params.courseId,
    })
      .populate("course", "title")
      .sort({ dueDate: 1 });

    res.status(200).json({
      count: assignments.length,
      assignments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get assignments",
      error: error.message,
    });
  }
};

// Delete assignment - Admin only
export const deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(
      req.params.id
    );

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }

    res.status(200).json({
      message: "Assignment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete assignment",
      error: error.message,
    });
  }
};