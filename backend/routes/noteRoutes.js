// import express from "express";
// import {
//   getNoteById,
//   getNotes,
//   CreateNote,
//   DeleteNote,
//   UpdateNote,
// } from "../controllers/noteController.js";
// const router = express.Router();
// import { protect } from "../middleware/authMiddleware.js";

// router.route("/").get(protect, getNotes);
// router
//   .route("/:id")
//   .get(getNoteById)
//   .delete(protect, DeleteNote)
//   .put(protect, UpdateNote);
// router.route("/create").post(protect, CreateNote);

// export default router;

const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  deleteNote,
  updateNote,
} = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, deleteNote)
  .put(protect, updateNote);

module.exports = router;
