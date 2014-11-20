var http = require("http");
var handler = require("./request-handler");
var _ = require("underscore");
var httpRequest = require ("http-request");
var js = require('jquery')(require("jsdom").jsdom().parentWindow);


var port = 8080;
var ip = "127.0.0.1";

var createIt = function () {
http.createServer(handler.handleRequest).listen(port, ip).listen(port, ip);

console.log("Listening on http://" + ip + ":" + port);

};
