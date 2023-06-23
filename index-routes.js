const express = require('express');
const path = require('path');
const data = require('./data');

const app = express();
const publicPath = path.join(__dirname, 'public');

// ************** In this case we need to give extension for the file in url **************
// app.use(express.static(publicPath));


// ************** In this case we don't need to give extension for the file in url **************
app.set('view engine', 'ejs');

app.get('', (req, resp)=>{
    resp.sendFile(`${publicPath}/index.html`);  // rendring default from public folder
})

app.get('/about', (req, resp)=>{
    resp.sendFile(`${publicPath}/about.html`);  // rendring default from public folder
})

app.get('/help', (req, resp)=>{
    resp.sendFile(`${publicPath}/help.html`);  // rendring default from public folder
})

app.get('/profile', (req, resp)=>{
    resp.render('profile', {data});  // rendring by EJS template engine
})

app.get('/detail', (req, resp)=>{
    resp.render('detail');  // rendring by EJS template engine
})

app.get('/login', (req, resp)=>{
    resp.render('login');  // rendring by EJS template engine
})

app.get('*', (req, resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
})

app.listen(5100);

