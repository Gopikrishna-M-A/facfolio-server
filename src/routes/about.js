import express from 'express';
const router = express.Router();
import {
  getAbout,
  getAllAbout,
  addAbout,
  updateAbout,
  deleteAbout,
} from '../controllers/about.js';

router.get("/", getAllAbout); // Get all about entries
router.get("/:id", getAbout); // Get a specific about entry by ID
router.post("/", addAbout); // Add a new about entry
router.patch("/:id", updateAbout); // Update a specific about entry by ID
router.delete("/:id", deleteAbout); // Delete a specific about entry by ID

export default router;
