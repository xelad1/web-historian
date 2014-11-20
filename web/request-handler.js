var path = require('path');
var url = require('url');
var archive = require('../helpers/archive-helpers');
var _ = require("underscore");
var httpRequest = require ("http-request");
var httpHelp = require('./http-helpers');
var fs = require("fs");
// require more modules/folders here!

  var actions = {
    'GET' : function(req, res) {
      if(req.url === '/') {
        var indexPath = archive.paths.siteAssets +"/index.html";
        var contents = httpHelp.serveAssets(res, indexPath, fs.readFile);
      } else if (fs.exists(path.join(archive.archivedSites, req.url))) {
        console.log(hi);
      }
        // httpHelp.serveAssets(res, asset, callback)
      // check if there is a url being requested, or just root
      // if just root,
      //  serve index.html
      // else serve loading.html
        // htmlfetcher
        // once ready
        // serve sites/requestURL


      // httpHelp.sendResponse(res, contents);
    },
    'POST' : function(req, res) {
      //take given data
      //  create a page out of data
      //  send a confirmation response
      //
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
