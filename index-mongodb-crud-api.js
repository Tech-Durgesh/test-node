const express = require("express");
const app = express();
const mongodb = require('mongodb');
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

app.put("/update-student/:name", async (req, resp) => {
  let collection = await connection();
  let results = await collection.updateOne(
    { name: req?.params?.name },
    { $set: req?.body }
  );
  resp.send(results);
});

app.delete('/delete-student/:id', async (req, resp)=>{
    let collection = await connection();
    let result = await collection.deleteOne({_id: new mongodb.ObjectId(req?.params?.id)});
    resp.send(result);
})

app.listen(4000);
