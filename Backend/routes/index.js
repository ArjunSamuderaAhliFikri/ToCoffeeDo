const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { run, retrieveDataById } = require("../db/retrieveData");

app.use(cors());

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
