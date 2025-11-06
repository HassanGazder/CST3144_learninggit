var express = require('express')
var path = require("path")

var apiRouter = require("./routes/api_router")
var app = express();
var staticPath = path.resolve(__dirname,"static")
// app.use()


app.use("/api",apiRouter)
app.use("/static",express.static(staticPath))
app.listen(3000)