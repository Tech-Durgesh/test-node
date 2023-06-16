const http = require("http");

const myFn = (req, resp) => {
    resp.write("Durgesh Sharma");
    resp.end();

}


http.createServer(myFn).listen(3200);