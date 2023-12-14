import express from 'express';
const router = express.Router();
import {
  getResearch,
  getAllResearch,
  addResearch,
  updateResearch,
  deleteResearch,
} from '../controllers/research.js';

router.get("/", getAllResearch); // Get all research entries
router.get("/:id", getResearch); // Get a specific research entry by ID
router.post("/", addResearch); // Add a new research entry
router.patch("/:id", updateResearch); // Update a specific research entry by ID
router.delete("/:id", deleteResearch); // Delete a specific research entry by ID

export default router;
