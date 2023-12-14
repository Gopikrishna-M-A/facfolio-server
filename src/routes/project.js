import express from 'express';
const router = express.Router();
import {
  getProject,
  getAllProjects,
  addProject,
  updateProject,
  deleteProject,
} from '../controllers/project.js';

router.get("/", getAllProjects); // Get all project entries
router.get("/:id", getProject); // Get a specific project entry by ID
router.post("/", addProject); // Add a new project entry
router.patch("/:id", updateProject); // Update a specific project entry by ID
router.delete("/:id", deleteProject); // Delete a specific project entry by ID

export default router;
