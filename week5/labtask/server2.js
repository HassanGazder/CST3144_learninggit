let http = require('http')
let random = require('./randomNumber.js')
let chalk = require('chalk')

let server = http.createServer((req, res) => {
    let generatedRandomNumber = random()
    if (generatedRandomNumber >= 1 && generatedRandomNumber <= 33) {
        console.log(chalk.green(generatedRandomNumber))
    } else if (generatedRandomNumber >= 34 && generatedRandomNumber <= 66) {
        console.log(chalk.yellow(generatedRandomNumber))
    } else if (generatedRandomNumber >= 67 && generatedRandomNumber <= 100) {
        console.log(chalk.red(generatedRandomNumber))
    }
    res.writeHead(200,{"content-type":'application/json'})
    res.write(JSON.stringify(generatedRandomNumber))
    res.end()
})

server.listen(3001)