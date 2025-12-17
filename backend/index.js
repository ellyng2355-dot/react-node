const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối đến MySQL
const db = mysql.createConnection({
  host: "db", // tên service trong docker-compose
  user: "root",
  password: "root", // mật khẩu MySQL
  database: "test_db", // tên database
});

db.connect(err => {
  if (err) {
    console.error("Không thể kết nối MySQL: ", err);
  } else {
    console.log("Kết nối MySQL thành công");
  }
});

// Route API đơn giản
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
