const http = require("http");
const express = require("express");

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.set("port", port);

app.use((Request, Response, Next) => {
    Response.status(404).send("");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Servidor em execução em http://${hostname}:${port}/`);
});