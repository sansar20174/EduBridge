import express from "express";

import {
  enrollCourse,
  getMyCourses,
} from "../controllers/enrollmentController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, enrollCourse);
router.get("/my-courses", authMiddleware, getMyCourses);

export default router;