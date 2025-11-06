const http = require('http')
const port = 3000

http.createServer((req,res)=>{
    res.setHeader("access-control-allow-origin","*");
    res.writeHead(200,{'content-type': 'text/plain'})
    res.end('hello world cst3145\n')
}).listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})