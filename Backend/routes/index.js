const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const { run, retrieveDataById, updateTask } = require("../db/retrieveData");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.put("/data/:id", async (req, res) => {
  let newTask = req.body;
  newTask._id = new mongoose.Types.ObjectId(newTask._id);

  await updateTask(newTask, req.body._id);
});

app.get("/data", async (req, res) => {
  const result = await run();
  res.json(result);
});

app.get("/data/:id", async (req, res) => {
  const id = req.params.id;

  const result = await retrieveDataById(id);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Connected in port http://localhost:${port}`);
});
