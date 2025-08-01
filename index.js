const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the History API!");
});

app.get("/events", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json"));
  res.json(data);
});

app.get("/events/:year", (req, res) => {
  const year = parseInt(req.params.year);
  const data = JSON.parse(fs.readFileSync("data.json"));
  const filtered = data.filter((event) => event.year === year);

  if (filtered.length === 0) {
    return res.status(404).json({ message: "No events found for that year." });
  }
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
