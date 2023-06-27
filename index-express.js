const express = require("express");
const app = express();

app.get("", (request, response) => {
  response.send(
    `<h1>Hello ${
      request?.query?.name ?? "User"
    }, This is our Home page </h1><br />
    <a href="/about-us">About Us</a><br />
    <a href="/help">Help</a>`
  );
});

app.get("/about-us", (request, response) => {
    response.send(
        `<h1>Hello ${
          request?.query?.name ?? "User"
        }, This is our About page </h1><br />
        <a href="/">Home</a><br />
        <a href="/help">Help</a>`
      );
});

app.get("/help", (request, response) => {
    response.send(
        `<h1>Hello ${
          request?.query?.name ?? "User"
        }, This is our Help page </h1><br />
        <input type="text" placeholder="Your query params displays here.." value="${request?.query?.name ?? ""}" /><br />
        <a href="/about-us">About Us</a><br />
        <a href="/">Home</a>`
      );
});

app.get("/json", (request, response) => {
    response.send([
        {
            name: "Durgesh",
            email: "durgesh@test.com",
        },
        {
            name: "Rahul",
            email: "rahul@test.com",
        },
    ]);
});

app.listen(5100);
