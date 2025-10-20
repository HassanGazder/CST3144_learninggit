let http = require('http')

function requestHandler(request,response){
    console.log("in comes a request" , request.url)
    response.end("hello world")
}

var server = http.createServer(requestHandler)

server.listen(3000)