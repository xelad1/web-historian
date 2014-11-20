var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var _ = require("underscore");
var httpRequest = require ("http-request");
var url = require('url');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {

    callback(asset, function(err, data) {
      if (err){
        throw new error;
      }
      res.writeHead(200, headers);
      res.write(data);
      res.end();
    });

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
