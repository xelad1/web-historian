var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var _ = require("underscore");
var httpRequest = require ("http-request");

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // // asset as file path
    var ext = path.extname(asset); // take path, figure out the extension --> .html
    var validExtensions = {
      ".html" : "text/html",
      ".js": "application/javascript",
      ".css": "text/css"
    };
    // var contentType = validExtensions[ext];
    // console.log("Serving file: " + asset);
    callback(asset, function(err, data) {
      if (err){
        throw new error;
        console.log('data');
      }
        res.writeHead(200, headers);
        // debug;
        //

        res.write(data);
        res.end();
    });

};

exports.sendResponse = function(res, data, statusCode){
  statusCode = statusCode || 200;
  res.writeHead(statusCode, headers);
  res.end(data);
};

exports.collectData = function(req, callback){
  var data = "";
  req.on('data', function(chunk){
    data += chunk;
  });
  req.on('end', function(){
    callback(JSON.parse(data));
  });
};

// exports.getFile = function(asset, res, contentType) {
//   var contents = fs.readFile(asset, 'utf8');
//   res.writeHead(200, headers);
//   res.end(contents);
// };

// As you progress, keep thinking about what helper functions you can put here!
