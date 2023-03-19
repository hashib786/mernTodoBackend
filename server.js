require("dotenv").config();
const express = require("express");
const cors = require("cors");
const DataBase = require("./config/config");
const routers = require("./router/todoRoute");

const app = express();
DataBase();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello from backend");
});

app.use("/api/v1", routers);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
