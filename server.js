var http = require("http");
var express = require("express");
var app = express();

var server = http.createServer(app);
//accepts http request on the server
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);

//enable post req on server -- #jQuery Post method()
app.post('/complete-test', postResults); //url, fnctuion
function postResults(req, res)  {  // 'req', res
 // do stuff

};


//end
console.log("Listening on http://127.0.0.1:8080");
server.listen('8080', '127.0.0.1');
