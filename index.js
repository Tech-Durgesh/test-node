const express = require("express");
const app = express();
const connection = require("./mongodb");

let students = [];
async function studentsList() {
  let collection = await connection();
  let results = await collection.find({}).toArray();
  results.forEach((student) => {
    students.push(student);
  });
}
studentsList();

app.set("view engine", "ejs");
app.get("/students", (req, resp) => {
  resp.render("students", { students });
});

app.listen(4000);
