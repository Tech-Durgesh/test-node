const express = require('express');
const EventEmitter = require('events');
const os = require('os');
const app = express();
const event = new EventEmitter();
// console.log(os);
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.platform());
// console.log(os.userInfo());
// console.log(os.hostname());
// console.log(os.arch());

let text = '';
let count = 0;

event.on('HomeHit', ()=>{
    count++;
    text = "Someone hit our Home Page! "+ count + " times."
})

app.get('', (req, resp)=>{
    event.emit('HomeHit');
    resp.send(text);
})

app.listen(5000);