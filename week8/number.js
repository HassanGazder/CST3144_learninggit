var express = require('express')
var app = express();

app.get('/olivia',function(request,response){
    response.send("welcome to olivia's homepage")
})

app.get('/users/:id',function(request,response){
    response.send("welcome to olivia's homepage")
})

app.listen(3000)