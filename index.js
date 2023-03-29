
const http = require('http')
const fs = require('fs')


const server = http.createServer((req, resp) => {
    fs.writeFile('index.html', '<h1> Hello World </h1>  <p> This is Satendra Mani Gautam</p>', (err) => {
    })
    fs.readFile('./index.html','utf-8', (err, data) => {
        if (err) {
            resp.writeHead(404)
            resp.write("Page Not Found")
        }
        else{
            resp.writeHead(200, { 'content-type': 'text/html' })
            resp.write(data)
        }
        resp.end()
    })
})

server.listen(5000, () => {
    console.log("server started")
})

