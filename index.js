const express = require("express");
const app = express();
const connection = require("./mongodb");

app.use(express.json());

app.get("/students", async (req, resp) => {
  let collection = await connection();
  let results = await collection.find({}).toArray();
  resp.send(results);
});

app.post("/add-student", async (req, resp) => {
  let collection = await connection();
  let results = await collection.insertMany(req.body);
  resp.send(results);
});

app.listen(4000);
