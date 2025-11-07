const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Подключаем статические файлы (CSS, изображения и т.п.)
app.use(express.static(path.join(__dirname, "public")));

// Определяем маршруты для 5 страниц
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

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});
