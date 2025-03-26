const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // middleware to parse json request bodies

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.use("/api/users", userRoutes);
app.use("/api/users", noteRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server listening on ${PORT}`));
