let http = require('http')
let helper = require('./helper.js')

let data = [{
    time: helper.getCurrentTime(),
    server: helper.getServerStatus()
}]
let server = http.createServer((req, res) => {
    let convertData = JSON.stringify(data)
    console.log(helper.getCurrentTime())
    console.log(random())
    res.write(convertData)
    res.end()
})

server.listen(3000)