var express = require('express');
var http = require('http')
var path = require('path');
var fs = require('fs')

var app = express()
app.use(function (request, response, next) {
    console.log("requet ip:" + request.url)
    console.log("request date:" + new Date())
    next()
})

app.use(function (request, response, next) {
    var filepath = path.join(__dirname, "static", request.url)
    fs.stat(filepath, function (err, fileinfo) {
        if (err) {
            next();
            return
        }
        if (fileinfo.isFile()) {
            response.sendFile(filepath);
        } else {
            next()
        }
    })
})
app.use(function(req,res){
    res.status(404);
    res.send("file not found!")
})

app.listen(3000, function () {
    console.log("app started on port 3000")
})