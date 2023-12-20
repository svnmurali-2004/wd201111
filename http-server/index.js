<<<<<<< HEAD
const http = require("http");
const fs = require("fs");
const arg = require("minimist")(process.argv.slice(2));

let homeContent = "";
let projectContent = "";
let regContent = "";

console.log(arg.port);

fs.readFile("home.html", (err, data) => {
  homeContent = data;
});

fs.readFile("project.html", (err, project) => {
  projectContent = project;
});

fs.readFile("registration.html", (err, reg) => {
  regContent = reg;
});

fs.readFile("home.html", (err, home) => {
  if (err) throw err;

  http.createServer((req, res) => {
    let url = req.url;
    if (url === "/project") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(projectContent);
      res.end();
    } else if (url === "/registration") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(regContent);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(home);
      res.end();
    }
  }).listen(arg.port);
});
=======
const http = require('http');
const cmdinput = require('minimist')(process.argv.slice(2));
const file = require("fs");

const pages = {
  "/project": "project.html",
  "/registration": "registration.html",
  "/": "home.html", // Default page
};

const datacontrol = (req, res) => {
  const filename = pages[req.url] || pages["/"]; // Fallback to default
  const stream = file.createReadStream(filename);
  stream.pipe(res);
};

http.createServer(datacontrol).listen(cmdinput.port);
>>>>>>> 569d7c8dd1c81f6cb772801811df5d7da5bf075b
