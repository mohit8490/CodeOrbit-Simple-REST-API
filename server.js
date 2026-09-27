

const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

let notes = [
  { id: 1, title: "Learn Node.js", content: "Practice Express REST APIs" },
  { id: 2, title: "Postman", content: "Test all endpoints" }
];

let nextId = 3;

// GET all notes
app.get("/api/notes", (req, res) => {
  res.status(200).json(notes);
});

// GET one note
app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.status(200).json(note);
});

// POST a note
app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "title and content are required" });
  }

  const note = { id: nextId++, title, content };
  notes.push(note);

  res.status(201).json({
    message: "Note created successfully",
    data: note
  });
});

// PUT a note
app.put("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = notes.findIndex(n => n.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "title and content are required" });
  }

  notes[index] = { id, title, content };

  res.status(200).json({
    message: "Note updated successfully",
    data: notes[index]
  });
});

// DELETE a note
app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = notes.findIndex(n => n.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  const deleted = notes.splice(index, 1)[0];

  res.status(200).json({
    message: "Note deleted successfully",
    data: deleted
  });
});

app.get("/", (req, res) => {
  res.json({ message: "CodeOrbit Task 1 REST API is running" });
});

app.listen(PORT, () => {
  console.log(`Task 1 API running at http://localhost:${PORT}`);
});
