import express from "express";

import {
  createAssignment,
  getAllAssignments,
  getAssignmentsByCourse,
  deleteAssignment,
} from "../controllers/assignmentController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// Logged-in users
router.get("/", authMiddleware, getAllAssignments);

router.get(
  "/course/:courseId",
  authMiddleware,
  getAssignmentsByCourse
);

// Admin only
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createAssignment
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteAssignment
);

export default router;