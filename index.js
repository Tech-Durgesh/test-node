const express = require('express');
const app = express();

const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let output = '';
async function getData(){
    let connection = await client.connect();
    let database = connection.db('school');
    let collection = database.collection('students');
    output = await collection.find({}).toArray();
}

getData();

app.get('', (req, resp)=>{
    resp.send(output);
});

app.listen(4000);