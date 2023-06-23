const express = require("express");
const route = express.Router();
const checkMiddleware = require('./middleware')

const app = express();



// ********** To apply middleware on all routes below **********
// app.use(checkMiddle);  

// ********** To apply middleware on grouped routes below by 'route' **********
 route.use(checkMiddleware);


app.get("", (req, resp) => {
  resp.send(
    `You're at our home page! Home page not required middleware conditions!`
  );
});


app.get("/test", checkMiddleware, (req, resp) => {  // Applied middleware on single route here
  resp.send(
    `You're at our test page! it means you have fulfilled the middleware conditions!`
  );
});


route.get("/test-group", (req, resp) => {  // Applied middleware group route here
  resp.send(
    `You're at our test page! it means you have fulfilled the middleware conditions!`
  );
});

app.use('/', route);

app.listen(2000);
