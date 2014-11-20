var path = require('path');
var archive = require('../helpers/archive-helpers');
var _ = require("underscore");
var httpRequest = require ("http-request");
var httpHelp = require('./http-helpers');
var fs = require("fs");
// require more modules/folders here!

  var actions = {

    'GET' : function(req, res) {
      archive.readListOfUrls();

      if (req.url === '/') {
        var indexPath = archive.paths.siteAssets + '/index.html';
        httpHelp.serveAssets(res, indexPath, fs.readFile);
      } else {
        indexPath = archive.paths.archivedSites +  req.url;
        if(archive.isUrlInList(req.url)) {
          httpHelp.serveAssets(res, indexPath, fs.readFile);
        } else {
          res.writeHead(404, headers);
          res.end();
        }
      }
    },
    'POST' : function(req, res) {
      fs.appendFile(archive.paths.list, "\n" + req.url, 'utf8', urlArray.join("\n"), function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
      fs.writeFile(archive.paths.list + req.url)

    },
    'OPTIONS' : function(req, res) {
      //checks for options
      //sends response
    }

  }

exports.handleRequest = function (req, res) {
  var requestAction = actions[req.method];
  if(requestAction) {
    requestAction(req, res);
  } else {
    httpHelp.sendResponse(res, "Not Found", 404);
  }
};
