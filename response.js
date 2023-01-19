const http = require('http');

const routes = require('./routes');

// function rqListener(req,res){

// }
// http.createServer(rqListener);
// http.createServer(function(req,res){

// });
// const server = http.createServer((req,res) => {
//     // console.log(req.url, req.headers,req.methods);
//     // process.exit();
//     // const url = req.url;
//     // const method = req.method;
    
// });
console.log(routes.someText);
const server = http.createServer(routes.handler);
server.listen(3000);