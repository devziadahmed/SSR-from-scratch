const { readFileSync } = require("fs");
const { createServer } = require("http");
const { parse } = require("url");
const { renderToString } = require("react-dom/server");
const React = require("react");
import Home from "./static";

const htmlTemplate = readFileSync(`${__dirname}/../index.html`, "utf-8");
const clientJS = readFileSync(`${__dirname}/client.js`, "utf-8");

const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname;

  if (pathName === "/") {
    const renderdReact = renderToString(<Home />);
    const renderdHtml = htmlTemplate.replace("Content", renderdReact);

    res.writeHead(200, { "Content-type": "text/html" });
    res.end(renderdHtml);
  } else if (pathName === "/client.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(clientJS);
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("The URL cannot be found");
  }
});

server.listen(8000, () => console.log("Listening for requests on port 8000"));
