import express from "express";

import {
  getUsers,
  getUserById,
  saveUser,
  updateUser,
  deleteUser,
} from "../controllers/StudentController.js";

const router = express.Router();
console.log('routerrrr', router);

router.get("/student", getUsers);
router.get("/student/:id", getUserById);
router.post("/student", saveUser);
router.patch("/student/:id", updateUser);
router.delete("/student/:id", deleteUser);

export default router;
