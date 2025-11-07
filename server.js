const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "team.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "projects.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`✅ Сервер запущен: http://localhost:${port}`);
});
