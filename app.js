var frontity = require("./build/server").default;
var http = require("http");
var server = http.createServer(frontity);
server.listen();