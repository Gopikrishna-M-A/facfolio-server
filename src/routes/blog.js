import express from 'express';
const router = express.Router();
import {
  getBlog,
  getAllBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blog.js';

router.get("/", getAllBlogs); // Get all blog entries
router.get("/:id", getBlog); // Get a specific blog entry by ID
router.post("/", addBlog); // Add a new blog entry
router.patch("/:id", updateBlog); // Update a specific blog entry by ID
router.delete("/:id", deleteBlog); // Delete a specific blog entry by ID

export default router;
