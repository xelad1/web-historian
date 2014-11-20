var path = require('path');
var url = require('url');
var archive = require('../helpers/archive-helpers');
var _ = require("underscore");
var httpRequest = require ("http-request");
var httpHelp = require('./http-helpers');
var fs = require("fs");
var js = require('jquery')(require("jsdom").jsdom().parentWindow);
// require more modules/folders here!

  var actions = {

    'GET' : function(req, res) {
      archive.readListOfUrls();

      if (req.url === '/') {
        var localPath = archive.paths.siteAssets + '/index.html';
        httpHelp.serveAssets(res, localPath, fs.readFile);
      } else if (req.url === '/styles.css') {
        var localPath = archive.paths.siteAssets + '/styles.css';
        httpHelp.serveAssets(res, localPath, fs.readFile);
      } else {
        req.url = '/' + req.url.substring(6);
        localPath = archive.paths.archivedSites  + req.url;
        if(archive.isUrlInList(req.url)) {
          httpHelp.serveAssets(res, localPath, fs.readFile);
        } else {
          // check if valid website, if so post
          // else see below
          res.writeHead(404, headers);
          res.end();
        }
      }
    },
    'POST' : function(req, res) {
      // fs.appendFile(archive.paths.list, "\n" + req.url, 'utf8', urlArray.join("\n"), function (err) {
      //   if (err) throw err;
      //   console.log('The "data to append" was appended to file!');
      // });
      // fs.writeFile(archive.paths.list + req.url)

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

js('input').on('keypress', function (){
  console.log("yo");})
