const express = require("express");
const cors = require("cors");
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

const app = express();

// IMPORTANT for Render deployment
const PORT = process.env.PORT || 3000;

app.use(cors());

// Serve frontend static files
app.use(express.static(path.join(__dirname, "public")));

// Load CSV data
let data = [];
fs.createReadStream(path.join(__dirname, "test.csv"))
  .pipe(csv())
  .on("data", (row) => data.push(row))
  .on("end", () => console.log("✅ CSV file successfully loaded!"));

// API: Search player
app.get("/player", (req, res) => {
  const name = req.query.name?.toLowerCase();
  console.log("Searching player:", name);

  const player = data.find(
    (p) => p.Player && p.Player.toLowerCase().includes(name)
  );

  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ error: "Player not found" });
  }
});

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
