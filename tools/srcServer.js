var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var assetTypes= [".js",".css",".txt"];

var serve = serveStatic("./build");

function isStaticResource(url){
  return assetTypes.reduce(function(memo,assetType){
    return memo || url.indexOf(assetType) !=-1;
  },false);
}

var server = http.createServer(function(req,res){
  if(!isStaticResource(req.url)){
    req.url = "/index.html";
  }
  var done = finalhandler(req,res);
  serve(req,res,done);
});

server.listen(3000);