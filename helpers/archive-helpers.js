var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpRequest = require ("http-request");
var buf = require("buffer");
var http = require("http");

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.urlList = urlList = {};


exports.readListOfUrls = function(){
  var data = fs.readFileSync(paths.list, 'utf8');
  exports.urlList.list = data.split("\n");
};

exports.isUrlInList = function(url){
  if (urlList.list.indexOf(url.substring(1)) === -1) {
    return false;
  } else {
    return true;
  }
};

exports.addUrlToList = function(url){
  fs.appendFile(paths.list, url.substring(1) + "\n", function(err) {
    if(err) {throw new err};
  });
};

exports.isURLArchived = function(localPath){

 var response = fs.existsSync(localPath);
 return response;

}

exports.downloadUrls = function(localPath){
 // http.get({
 //  host: "2.bp.blogspot.com",
 //  path: "/_IR8qT_UKjOI/TT2P3qleU9I/AAAAAAAAA3I/beckWSLh3nk/s1600/clown.jpg" },
 //  function(res) {
 //    var stream = fs.createWriteStream("clown.jpg");
 //    res.pipe(stream);
 //  });

};
