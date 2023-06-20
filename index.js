const http = require("http");
const data = require("./data");
const input = process.argv;
const fs = require("fs");
const path = require("path");
const dirName = path.join(__dirname, "files");

// ******************* Simple static API *******************
// const myFn = (req, resp) => {
//   resp.writeHead(200, { "Content-type": "applicationjson" });
//   resp.write(
//     JSON.stringify(data)
//   );
//   resp.end();
// };

// ******************* Get input values by console *******************
// console.log(input);

// ******************* Create multiple directories *******************
// for(i=0; i < 5; i++){
//     fs.writeFileSync(dirName+'/'+input[2]+i, input[3]);
// }

// ******************* Delete multiple directories *******************
// for(i=0; i < 5; i++){
//     fs.unlinkSync(dirName+'/'+input[2]+i, input[3]);
// }

// ******************* Read directory *******************
// fs.readdir(dirName, (err, files)=>{
//     files.forEach((item)=>{
//         console.log(item);

//     })
// });

// ******************* Read file *******************
// fs.readdir(dirName, (err, files)=>{
//     files.forEach((item)=>{
//         fs.readFile(dirName+'/'+item, 'utf8', (er, file)=>{
//             console.log(file);
//         })
//     })
// });

// ******************* update file *******************
// fs.readdir(dirName, (err, files)=>{
//     files.forEach((item)=>{
//         fs.appendFile(dirName+'/'+item, ' This text is appended now.', (er)=>{
//             if(!er) console.log("file text updated!");
//         })
//     })
// });

// ******************* rename file *******************
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
let a = 10;
let b = 20;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 3000);
});

waitingData.then((data) => {
  console.log("after promise data : ", a + data);
});

console.log("before promise data : ", a + b);



// http.createServer(promises).listen(5000);
