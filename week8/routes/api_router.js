var express = require('express');

var ALLOWED_IPS = [
    "127.0.0.1",
    "123.456.7.89"
]

var api = express.Router();
api.get("/users", function(request,response){response.send("welcome to olivia's home")})

api.use(function(request,response,next){
    var isUserIsAllowed = ALLOWED_IPS.indexOf(request.ip) !== -1;
    if (!isUserIsAllowed) {
        response.status(401).send("Not Authorized")
    }else{
        next()
    }
})

module.exports = api