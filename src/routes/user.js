import express from "express";
import multer from "multer";
import {
  getUser,
  getAllUsers,
  getUserByEmail,
  addUser,
  deleteUser,
  updateUser,
  getInfo,
  addProfile
} from "../controllers/user.js";
import { fileURLToPath } from "url";
import path from "path";
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(__dirname, "..", "..", "uploads");
    console.log("uploadPath", uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get("/:id", getUser);
router.get("/email/:id", getUserByEmail);
router.get("/", getAllUsers);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

router.get("/info/:slug", getInfo);

router.post("/profile/:userId", upload.single('pdf'), addProfile)



export default router;
