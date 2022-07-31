const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  }

  if (req.url === "/about") {
    res.end("welcome to about page");
  }

  res.end(`<h1>Where are you?</h1>
  <p>you do not belong here</p>
  <a href="/">go home</a>
  `);
});

server.listen(4000);
