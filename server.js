const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Указываем папку, где лежат HTML, CSS и другие файлы
app.use(express.static(path.join(__dirname, "public")));

// Главная страница
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Страница "О нас"
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// Страница "Наша команда"
app.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "team.html"));
});

// Страница "Проекты"
app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "projects.html"));
});

// Страница "Контакты"
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

// Если страница не найдена
app.use((req, res) => {
  res.status(404).send("<h1>404 - Страница не найдена</h1>");
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});
