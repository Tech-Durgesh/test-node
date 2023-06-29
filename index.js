require('./mongoose');
const StudentModel = require('./Schema/students');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/insert', async (req, resp)=>{
    let record = new StudentModel(req?.body);
    let result = await record.save();
    resp.send(result);
});

app.get('/read', async (req, resp)=>{
    let result = await StudentModel.find();
    resp.send(result);
});

app.put('/update/:_id', async (req, resp)=>{
    let result = await StudentModel.updateOne(
        req?.params,
        { $set: req?.body }
    );
    resp.send(result);
});

app.delete('/delete/:_id', async (req, resp)=>{
    let result = await StudentModel.deleteOne(req?.params);
    resp.send(result);
});

app.get('/search/:key', async (req, resp)=>{
    let result = await StudentModel.find({
        $or:[
            {name: {$regex: req?.params?.key}},
            {class: {$regex: req?.params?.key}},
            {address: {$regex: req?.params?.key}},
        ]
    });
    resp.send(result);
});

app.listen(5000);