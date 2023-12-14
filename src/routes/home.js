import express from 'express';
const router = express.Router();
import {
  getHome,
  getAllHomes,
  addHome,
  updateHome,
  deleteHome,
} from '../controllers/home.js';

router.get("/", getAllHomes); // Get all home entries
router.get("/:id", getHome); // Get a specific home entry by ID
router.get("/user/:userId", getHome); // Get a specific home entry by ID
router.post("/", addHome); // Add a new home entry
router.patch("/:id", updateHome); // Update a specific home entry by ID
router.delete("/:id", deleteHome); // Delete a specific home entry by ID

export default router;
