import express from "express";

import {enrollCourse,getMyCourses,unenrollCourse,} from "../controllers/enrollmentController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, enrollCourse);
router.get("/my-courses", authMiddleware, getMyCourses);
router.delete("/unenrolled-courses", authMiddleware, getUnenrolledCourses);

export default router;