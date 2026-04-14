const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Ensure all routes return JSON, 200, and precise body shape.
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.get("/health", (req, res) => {
  res.json({ message: "healthy" });
});

app.get("/me", (req, res) => {
  res.json({
    name: "Mustapha Pelumi Babatunde", 
    email: "phamust1111@gmail.com",        
    github: "https://github.com/oxblixxx"  
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on 127.0.0.1:${PORT}`);
});
