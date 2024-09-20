const { readFileSync } = require("fs");
const { createServer } = require("http");
const { parse } = require("url");
const { renderToString } = require("react-dom/server");
const React = require("react");
const Home = require("./static.js");

const htmlTemplate = readFileSync(`${__dirname}/index.html`, "utf-8");

const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname;

  if (pathName === "/") {
    const renderdReact = renderToString(<Home />);
    const renderdHtml = htmlTemplate.replace("Content", renderdReact);

    res.writeHead(200, { "Content-type": "text/html" });
    res.end(renderdHtml);
  } else if (pathName === "/test") res.end("TEST");
  else res.end("The URL cannot be found");
});

server.listen(8000, () => console.log("Listening for requests on port 8000"));
