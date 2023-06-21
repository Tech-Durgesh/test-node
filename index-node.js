// ******************* Simple static API *******************

const data = require("./data");
const myFn = (req, resp) => {
  resp.writeHead(200, { "Content-type": "applicationjson" });
  resp.write(
    JSON.stringify(data)
  );
  resp.end();
};

// ******************* Get input values by console *******************

//const input = process.argv;
// console.log(input);


// ******************* Create multiple directories *******************

// const fs = require("fs");
// const path = require("path");
// const dirName = path.join(__dirname, "files");
// for(i=0; i < 5; i++){
//     fs.writeFileSync(dirName+'/'+input[2]+i, input[3]);
// }


// ******************* Delete multiple directories *******************

// const fs = require("fs");
// const path = require("path");
// const dirName = path.join(__dirname, "files");
// for(i=0; i < 5; i++){
//     fs.unlinkSync(dirName+'/'+input[2]+i, input[3]);
// }


// ******************* Read directory *******************

// const fs = require("fs");
// const path = require("path");
// const dirName = path.join(__dirname, "files");
// fs.readdir(dirName, (err, files)=>{
//     files.forEach((item)=>{
//         console.log(item);

//     })
// });


// ******************* Read file *******************

// const fs = require("fs");
// const path = require("path");
// const dirName = path.join(__dirname, "files");
// fs.readdir(dirName, (err, files)=>{
//     files.forEach((item)=>{
//         fs.readFile(dirName+'/'+item, 'utf8', (er, file)=>{
//             console.log(file);
//         })
//     })
// });


// ******************* Update file *******************

// const fs = require("fs");
// const path = require("path");
// const dirName = path.join(__dirname, "files");
// fs.readdir(dirName, (err, files)=>{
//     files.forEach((item)=>{
//         fs.appendFile(dirName+'/'+item, ' This text is appended now.', (er)=>{
//             if(!er) console.log("file text updated!");
//         })
//     })
// });


// ******************* Rename file *******************

// const fs = require("fs");
// const path = require("path");
// const dirName = path.join(__dirname, "files");
// fs.readdir(dirName, (err, files)=>{
//     files.forEach((item)=>{
//         fs.rename(dirName+'/'+item, dirName+'/'+input[2], (er)=>{
//             if(!er) console.log("file name updated!");
//         })
//     })
// });


// ******************* Asynchronus example *******************
// let a = 12;
// let b = 12;
// setTimeout(()=>{
//     b= 20;
// }, 3000)
// console.log(a+b);


// ******************* Promises example *******************

// let a = 10;
// let b = 20;
// let waitingData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 3000);
// });
// waitingData.then((data) => {
//   console.log("after promise data : ", a + data);
// });
// console.log("before promise data : ", a + b);


module.exports = myFn;
// const http = require("http");
// http.createServer(myFn).listen(5000);
