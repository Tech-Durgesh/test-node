const http = require("http");
const data = require("./data");
const myFn = (req, resp) => {
  resp.writeHead(200, { "Content-type": "applicationjson" });
  resp.write(
    JSON.stringify(data)
  );
  resp.end();
};

http.createServer(myFn).listen(5000);
